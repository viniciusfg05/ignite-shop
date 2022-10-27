import { CardConteinerStyled, HomeContainerStyled, ProductStyled } from "../styles/pages/Home"
import { useKeenSlider } from "keen-slider/react" // Slider
import Head from 'next/head'
import Link from "next/link"
import "keen-slider/keen-slider.min.css" // Slider - CSS
import Image from "next/future/image"
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import { Handbag } from "phosphor-react"
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
    price: string;
  }[]
  productSelectData: {
    id: string;
    name: string;
    imageUrl: string;
    url: string;
    price: string;
    description: string
    defaultPriceId: string
  }
}



export default function Home({ products, productSelectData }: HomeProps) {
  const [card, setCard] = useState([])
  const { setCardFunction } = useContext(IgniteShopContext)

  const [sliderRef] = useKeenSlider({ // sliderRef - Ref do React para modificar o conteiner do slider pelo javascript
    slides: {
      perView: 3, // # content por pagina
      spacing: 48,
    }
  })

  async function handleBuyProduct(data) {
    setCardFunction(data)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainerStyled ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <ProductStyled key={product.id} className="keen-slider__slide">
            <Link href={`product/${product.id}`} prefetch={false}>
              <Image src={product.imageUrl} width={520} height={480} alt="" />
            </Link>

            <footer>
              <header>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </header>

                <CardConteinerStyled onClick={() => handleBuyProduct(product)}>
                  <Handbag color="#fff" size={32} weight="bold" />
                </CardConteinerStyled>
            </footer>
          </ProductStyled>
        ))}
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

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100), //retona em centavos 

    }

  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }
}