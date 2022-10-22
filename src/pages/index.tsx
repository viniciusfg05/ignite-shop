import { HomeContainerStyled, ProductStyled } from "../styles/pages/Home"
import Image from "next/future/image"

import camiseta1 from '../assets/camiseta1.svg'
import camiseta2 from '../assets/camiseta2.svg'
import camiseta3 from '../assets/camiseta3.svg'

export default function Home() {
  return (
    <HomeContainerStyled>
      <ProductStyled>
        <Image src={camiseta1} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductStyled>

      <ProductStyled>
        <Image src={camiseta2} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductStyled>

      <ProductStyled>
        <Image src={camiseta2} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductStyled>

      <ProductStyled>
        <Image src={camiseta2} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductStyled>

      <ProductStyled>
        <Image src={camiseta2} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </ProductStyled>
    </HomeContainerStyled>
  )
}
