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
import { useRef } from 'react'
import { DrawerContentStyled, NumberCardStyled } from '../styles/pages/modal'
import Image from "next/future/image"
import camisa from "../assets/camisa.png"

export function Modal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <>
      <Button ref={btnRef} bg="#202024" colorScheme={'#121214'} w={"3rem"} h={"3rem"} display="flex" alignItems="center" onClick={onOpen}>
        <NumberCardStyled>1</NumberCardStyled>
        <Icon w="24px" h="24px">
          <Handbag size={24} weight="bold" />
        </Icon>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'md'}
        
      >
        <DrawerOverlay />
        <DrawerContentStyled bg="#202024" w="480px" padding="2rem">
          <DrawerCloseButton size="1.5rem" mt="1rem" mr="1rem"/>
          <h1>Sacola de compras</h1>

          <div>
            <Image src={camisa} width={94} height={94} alt=""/>

            <div>
              <p>Camiseta Beyond the Limits</p>
              <strong>R$ 79,90</strong>
            </div>

            <button>Remover</button>
          </div>

        </DrawerContentStyled>
      </Drawer>
    </>
  )
}