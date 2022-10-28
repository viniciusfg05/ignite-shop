import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { SuccessContainerStyled, ImageContainerStyled, ImageContentStyled } from '../styles/pages/success'
import Image from "next/future/image"
import Head from 'next/head'
import { IgniteShopContext } from '../context/ContextApi'
import { useContext } from 'react'


interface SuccessProps {
    customerName: string,
    name: string,
    imageUrl: string,
}

export default function Success({ product, customerName }: any) {
  const { card, setDeleteCard } = useContext(IgniteShopContext)


    return (
        <>
            <Head>
                <title>Compra Efetuada | Ignite Shop</title>

                <meta name="rebots" content="noindex" />
            </Head>


            <SuccessContainerStyled>
                <ImageContainerStyled>
                    {product.map(product => (
                        <ImageContentStyled key={product.id} >
                            <Image src={product.imageUrl} width={120} height={110} alt={product.name} />
                        </ImageContentStyled>
                    ))}
                </ImageContainerStyled>
                    <h1>Compra Efetuada! </h1>     
                    <p>Uhuul <strong>{customerName}</strong>, sua compra de <span>{product.length}</span> camisetas já está a caminho da sua casa. </p>
                <Link href={'/'}>
                    Voltar ao catálago
                </Link>
            </SuccessContainerStyled>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const sessionId = String(query.session_id)

    // se não existe o session id
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    // Expand no line_intems para espandir os dados do produto
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name

    const product = session.line_items.data.map(product => {
        return {
            customerName: customerName,
            name: product.description,
            imageUrl: product.price.product.images[0],
        }

    })

    return {
        props: {
            product,
            customerName
        }
    }
}