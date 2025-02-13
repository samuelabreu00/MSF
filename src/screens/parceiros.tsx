import styled from "styled-components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import cliente1 from "@/assets/imgAEB.png";
import cliente2 from "@/assets/imgCialne.webp";
import cliente3 from "@/assets/imgFip.jpeg";
import cliente4 from "@/assets/imgHope.webp";
import cliente5 from "@/assets/imgMaeRainha.png";
import cliente6 from "@/assets/imgNidobox.png";
import cliente7 from "@/assets/imgNormatelEng.webp";
import cliente8 from "@/assets/imgNormatelIncorp.png";
import cliente9 from "@/assets/imgPinheiro.png";
import cliente10 from "@/assets/imgPontes.png";
import cliente11 from "@/assets/imgTelles.webp";
import cliente12 from "@/assets/imgUniforca.png";
import cliente13 from "@/assets/imgVila.png";

const ParceirosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  min-height: 40vh;
  border-bottom: 5px solid var(--green);
  
  div.contentClientes {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 55px;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1.title{
      font-weight: 600;
      font-size: 37px;
      color: var(--black);
    }
  }

  @media (max-width: 380px) {
    .carousel-controls{
      display: none;
    }
    div.contentClientes{
      padding: 0;
    }

    .carousel-item {
      flex: 0 0 100%;
      width: 100%;
    }
  }
  
`;

const clientImages = [
  cliente1,
  cliente2,
  cliente3,
  cliente4,
  cliente5,
  cliente6,
  cliente7,
  cliente8,
  cliente9,
  cliente10,
  cliente11,
  cliente12,
  cliente13
];

export const Parceiros = () => {
  return (
    <ParceirosContainer id="fornecedores">
      <div className="contentClientes">
        <h1 className="title">Parceiros</h1>
        <Carousel opts={{ align: "start" }} className="w-full" plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>

          <div className="carousel-controls">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselContent>
            {clientImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="carousel-item flex justify-center items-center md:basis-1/4 lg:basis-1/3 sm:basis-1/3 basis-1/2"
              >
                <div className="p-2 w-full max-w-[200px]">
                  <div className="flex aspect-square items-center justify-center rounded-md overflow-hidden">
                    <img
                      src={image}
                      alt={`Cliente ${index + 1}`}
                      className="w-full h-[100px] object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
        </Carousel>
      </div>
    </ParceirosContainer>
  );
};
