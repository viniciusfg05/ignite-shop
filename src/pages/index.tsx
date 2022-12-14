import { CardConteinerStyled, HomeContainerStyled, ProductStyled } from "../styles/pages/Home"
import { useKeenSlider } from "keen-slider/react" // Slider
import Head from 'next/head'
import Link from "next/link"
import "keen-slider/keen-slider.min.css" // Slider - CSS
import Image from "next/future/image"
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import { CaretLeft, CaretRight, Handbag } from "phosphor-react"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import router from "next/router"
import { IgniteShopContext } from "../context/ContextApi"

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    url: string;
    price: number;
    defaultPriceId: string
  }[]
  productSelectData: {
    id: string;
    name: string;
    imageUrl: string;
    url: string;
    price: number;
    description: string
    defaultPriceId: string
  }
}



export default function Home({ products, productSelectData }: HomeProps) {
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [salva, setSalvar] = useState([])

  const { setCardFunction } = useContext(IgniteShopContext)

  console.log(salva)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: 'free-snap',
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    slides: {
      perView: 3,
      spacing: 43,
    },
    created() {
      setLoaded(true)
    },
  })

  async function handleBuyProduct(data) {
    setCardFunction(data)
  }

  const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
  })


  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainerStyled ref={sliderRef} className="keen-slider">
        <>
          {instanceRef.current && (
            <>
              {currentSlide === 1 &&
                <button
                  onClick={(e: any) =>
                    e.stopPropagation() || instanceRef.current.prev()
                  }
                // disabled={currentSlide === 1 ? true : false}
                ><CaretLeft size={50} /></button>
              }

            </>
          )}
        </>

        <>
          {products.map(product => (
            <>
              <ProductStyled key={product.id} className="keen-slider__slide">

                <Link href={`product/${product.id}`} prefetch={false}>
                  <Image src={product.imageUrl} width={480} height={480} alt="" />
                </Link>

                <footer>
                  <header>
                    <strong>{product.name}</strong>
                    <span>{priceFormatter.format(product.price)}</span>
                  </header>

                  <CardConteinerStyled onClick={() => handleBuyProduct(product)}>
                    <Handbag color="#fff" size={32} weight="bold" />
                  </CardConteinerStyled>


                </footer>


              </ProductStyled>

              <div>
              </div>
            </>
          ))}
        </>
          

        



      <button onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}>
            <CaretRight size={50} /> oiiiiiiiii
          </button>
      </HomeContainerStyled>
    </>
  )
}



export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })

  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price

    console.log(price.id)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: price.unit_amount / 100,
      defaultPriceId: price.id,
    }

  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }
}