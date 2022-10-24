import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import { SuccessContainerStyled, ImageContainerStyled } from '../styles/pages/success'
import Image from "next/future/image"
import Head from 'next/head'


interface SuccessProps {
    customerName: string,
    product: {
        name: string,
        imageUrl: string,
    }
}

export default function Success({customerName, product}: SuccessProps) {
    return (
        <>
            <Head>
                <title>Compra Efetuada | Ignite Shop</title>

                <meta name="rebots" content="noindex" />
            </Head>

            <SuccessContainerStyled>
                <h1>Compra Efetuada! </h1>

                <ImageContainerStyled>
                    <Image  src={product.imageUrl} width={120} height={110} alt={product.name}/>
                </ImageContainerStyled>

                <p>Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa. </p>

                <Link href={'/'}>
                    Voltar ao catálago
                </Link>

            </SuccessContainerStyled>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    const sessionId = String(query.session_id)

    // se não existe o session id
    if(!query.session_id) {
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
    const product = session.line_items.data[0].price.product as Stripe.Product

    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0]
            }
        }
    }
}