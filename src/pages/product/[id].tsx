import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/future/image"
import Head from "next/head";
import { useContext, useState } from "react";
import Stripe from "stripe";
import { IgniteShopContext } from "../../context/ContextApi";
import { stripe } from "../../lib/stripe";
import { ImageContainerStyled, ProductContainerStyled, ProductDetailsStyled } from "../../styles/pages/product";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    url: string;
    price: string;
    description: string
    defaultPriceId: []
  }
}

export default function Product({ product }: ProductProps) {
  const [ isCreatingCheckout, setIsCreatingCheckout ] = useState(false)

  const { setCardFunction } = useContext(IgniteShopContext)


  async function handleBuyProduct(data: any) {
      setCardFunction(data)
  }
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainerStyled>
        <ImageContainerStyled>
          <Image width={520} height={520} src={product.imageUrl} alt=""/>
        </ImageContainerStyled>
        
        <ProductDetailsStyled>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={isCreatingCheckout} onClick={() => handleBuyProduct(product)}>Adicionar no carrinho</button>
        </ProductDetailsStyled>
      </ProductContainerStyled>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, {id: string }> = async ({ params })   => {
  const productId = params.id

  console.log(productId)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price',]
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
       product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        description: product.description,
        defaultPriceId: price.id,
        price: new Intl.NumberFormat("pt-BR", {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100), //retona em centavos 
       },
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }
}
