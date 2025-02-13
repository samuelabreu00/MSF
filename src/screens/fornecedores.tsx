import styled from "styled-components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

import cliente1 from "@/assets/imgRittal.avif";
import cliente2 from "@/assets/imgSheesi.svg";
import cliente3 from "@/assets/imgBrum.png";
import cliente4 from "@/assets/imgEmbrastec.avif";
import cliente5 from "@/assets/imgSteck.png";
import cliente6 from "@/assets/imgSchneider.png";
import cliente7 from "@/assets/imgAbb.png";

const FornecedoresContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--yellow);
  min-height: 40vh;
  border-bottom: 5px solid var(--green);
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  
  div.contentClientes {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1.title{
      font-weight: 600;
      font-size: 37px;
      color: var(--white);
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
];

export const Fornecedores = () => {
  return (
    <FornecedoresContainer id="fornecedores">
      <div className="contentClientes">
        <h1 className="title">Fornecedores</h1>
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
                className="carousel-item flex-shrink-0 flex justify-center items-center md:basis-1/5 lg:basis-1/5 sm:basis-1/3 basis-1/2"
              >
                <div className="p-2 w-full max-w-[200px]">
                  <div className="flex aspect-square items-center justify-center rounded-md overflow-hidden">
                    <img
                      src={image}
                      alt={`Cliente ${index + 1}`}
                      className="w-full max-w-[150px] h-[80px] object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
        </Carousel>
      </div>
    </FornecedoresContainer>
  );
};
