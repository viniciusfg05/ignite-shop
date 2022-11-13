import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Icon,
} from '@chakra-ui/react'
import { Handbag } from 'phosphor-react'
import { useContext, useRef, useState } from 'react'
import { DrawerContentStyled, NumberCardStyled, ProductStyled } from '../../styles/pages/modal'
import Image from "next/future/image"
import camisa from "../../assets/camisa.png"
import { GetServerSideProps, GetStaticProps } from 'next'
import { IgniteShopContext } from '../../context/ContextApi'
import { stringify } from 'querystring'
import axios from 'axios'

export default function Modal(req: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { card, setDeleteCard } = useContext(IgniteShopContext)
  const [ productIds, setProductIds ] = useState({})


  const somarTransaction = card.reduce((acc, card ) => {
      acc.income += card.price; // pega o acc Income e soma com o price
      acc.total += card.price 

      return acc
  }, {
      income: 0,
      outcome: 0,
      total: 0,
  })

  const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL"
  })


  const btnRef = useRef()


  async function handleSelectItensCard() {
    
    try {
      const reponse = card.map(card => {
        return card.defaultPriceId
      })
      const produtos = reponse.map(data => {
        return data
      })
      
      const data = produtos.map(data => {
        return {
          price: data,
          quantity: 1
        }
      })

      const response = await axios.post('/api/checkout', {
        lineItemsPriceId: data
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl; 
    } catch (err) {

      alert('Falha ao redirecionar para o checkout!')
    }

  }

  function handleDeleteCard(id: String) {
    const data = card.filter(card => card.id !== id)

    setDeleteCard(data)
  }


  return (
    <>
      <Button ref={btnRef} bg="#202024" colorScheme={'#121214'} w={"3rem"} h={"3rem"} display="flex" alignItems="center" onClick={onOpen}>
        <NumberCardStyled>{card.length}</NumberCardStyled>
        <Icon w="24px" h="24px">
          <Handbag size={24} weight="bold" />
        </Icon>
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size={'md'}>
        <DrawerOverlay />
        <DrawerContentStyled bg="#202024" w="480px" padding="2rem">
          <DrawerCloseButton size="1.5rem" mt="1rem" mr="1rem" />

          <h1>Sacola de compras</h1>

          {card.map(card => (
            <>
              <section key={card.id}>
              <Image src={card.imageUrl === undefined ? "" : card.imageUrl} width={94} height={94} alt="" />

              <main>
                <p>{card.name}</p>
                <strong>{priceFormatter.format(card.price)}</strong>

                <button onClick={() => handleDeleteCard(card.id)}>Remover</button>
              </main>

              </section>
            </>
            ))}

          <footer>
            <section>
              <p>Quantidade</p>
              <span>{card.length} itens </span>
            </section>

            <section>
              <p>Valor total</p>
              <strong>{priceFormatter.format(somarTransaction.income)}</strong>
            </section>

            <button  onClick={handleSelectItensCard}>Finalizar compra</button>
          </footer>

        </DrawerContentStyled>
      </Drawer>
    </>
  )
}
