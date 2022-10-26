import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logo from "../assets/logo.svg";
import {
  CardConteinerStyled,
  ContainerStyled,
  HeaderStyled,
  NumberCardStyled,
} from "../styles/pages/app";
import Image from "next/future/image";
import { Handbag } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import { Modal } from "./modal";
import { ChakraThemeConfig } from "../styles/chakraThemeConfig";
import { ChakraProvider  } from '@chakra-ui/react'

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContainerStyled>
      <ChakraProvider theme={ChakraThemeConfig}>
        <HeaderStyled>
          <Image src={logo} alt="" />

          <Modal />
          
        </HeaderStyled>
        <Component {...pageProps} />
      </ChakraProvider>
    </ContainerStyled>
  );
}

export default MyApp;
