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
import { useContext, useRef } from 'react'
import { DrawerContentStyled, NumberCardStyled, ProductStyled } from '../../styles/pages/modal'
import Image from "next/future/image"
import camisa from "../../assets/camisa.png"
import { GetServerSideProps, GetStaticProps } from 'next'
import { IgniteShopContext } from '../../context/ContextApi'
import { stringify } from 'querystring'

export default function Modal(req: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const { card, setDeleteCard } = useContext(IgniteShopContext)
  console.log(card)

  function handleDeleteCard(id: String) {
    const data = card.filter(card => card.id !== id)

    setDeleteCard(data)
    // setCardFunction(deleteCard)
  }


  return (
    <>
      <Button ref={btnRef} bg="#202024" colorScheme={'#121214'} w={"3rem"} h={"3rem"} display="flex" alignItems="center" onClick={onOpen}>
        <NumberCardStyled>1</NumberCardStyled>
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
                <strong>{card.price}</strong>

                <button onClick={() => handleDeleteCard(card.id)}>Remover</button>
              </main>

              </section>
            </>
            ))}

          <footer>
            <section>
              <p>Quantidade</p>
              <span>3 item</span>
            </section>

            <section>
              <p>Valor total</p>
              <strong>R$ 270,00</strong>
            </section>

            <button>Finalizar compra</button>
          </footer>

        </DrawerContentStyled>
      </Drawer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {


  return {
      props: {

      }
  }
}
