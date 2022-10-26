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

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContainerStyled>
      <HeaderStyled>
        <Image src={logo} alt="" />

        <CardConteinerStyled>
          <Handbag size={24} weight="bold" />
          <NumberCardStyled>1</NumberCardStyled>
        </CardConteinerStyled>
          
      </HeaderStyled>
      <Component {...pageProps} />
    </ContainerStyled>
  );
}

export default MyApp;
