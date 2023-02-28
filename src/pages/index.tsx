import Image from "next/image"
import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from "./styles/pages/home"

import camiseta1 from '../assets/1.png';
import camiseta2 from '../assets/2.png';
import camiseta3 from '../assets/3.png';

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="camisa1" />

        <footer>
          <span>Camiseta maratona explorer</span>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="camisa1" />

        <footer>
          <span>Camiseta Ignite</span>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>

      <Product className="keen-slider__slide" >
        <Image src={camiseta3} width={520} height={480} alt="camisa1" />
 
        <footer>
          <span>Camiseta Ignite Lab</span>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>

      <Product className="keen-slider__slide" >
        <Image src={camiseta3} width={520} height={480} alt="camisa1" />
 
        <footer>
          <span>Camiseta Ignite</span>
          <strong>R$ 79,90</strong>
        </footer>
      </Product>
    </HomeContainer>
  )
}
