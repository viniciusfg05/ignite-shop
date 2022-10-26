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
import { ChakraThemeConfig } from "../styles/chakraThemeConfig";
import { ChakraProvider } from '@chakra-ui/react'
import { IgniteShopProvider } from "../context/ContextApi";
import Modal from "../componets/modal/modal";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ChakraThemeConfig}>
      <IgniteShopProvider>

        <ContainerStyled>
          <HeaderStyled>
            <Image src={logo} alt="" />

            <Modal />

          </HeaderStyled>
          <Component {...pageProps} />
        </ContainerStyled>
      </IgniteShopProvider>
    </ChakraProvider>
  );
}

export default MyApp;
