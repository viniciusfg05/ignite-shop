import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import logo from '../assets/logo.svg'
import { ContainerStyled, HeaderStyled } from "../styles/pages/app"
import Image from "next/future/image"

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContainerStyled>
      <HeaderStyled>
        <Image src={logo} alt="" />
      </HeaderStyled>
      <Component {...pageProps} />
    </ContainerStyled>
  )
}

export default MyApp
