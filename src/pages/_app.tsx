import type { AppProps } from 'next/app'
import { globalStyles } from './styles/global'
import Image from "next/image";

import Logo from '../assets/Logo.svg';
import ImgHome from '../assets/Card.png'
import { Container, Header } from './styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={Logo} alt="logo" />
      </Header>

      <Component {...pageProps} />
    </Container>  
  )
  
}
