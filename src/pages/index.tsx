import { HomeContainerStyled, ProductStyled } from "../styles/pages/Home"
import { useKeenSlider } from "keen-slider/react" // Slider
import Link from "next/link"
import "keen-slider/keen-slider.min.css" // Slider - CSS
import Image from "next/future/image"
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    url: string;
    price: string;
  }[]
}

export default function Home({products}: HomeProps) {
  const [ sliderRef ] = useKeenSlider({ // sliderRef - Ref do React para modificar o conteiner do slider pelo javascript
    slides: {
      perView: 3, // # content por pagina
      spacing: 48,
    }
  })


  return (
    <HomeContainerStyled ref={sliderRef} className="keen-slider">
      {products.map( product => (
        <Link key={product.id} href={`product/${product.id}`} prefetch={false}>
          <ProductStyled  className="keen-slider__slide">
            <Image src={product.imageUrl} width={520} height={480} alt=""/>

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </ProductStyled>
        </Link>
      ))}
    </HomeContainerStyled>
  )
}

export const getStaticProps: GetStaticProps = async ()   => {
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
      products 
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }
}