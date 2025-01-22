import styled from "styled-components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import cliente1 from "@/assets/imgRittal.avif";
import cliente2 from "@/assets/imgSheesi.svg";
import cliente3 from "@/assets/imgBrum.png";
import cliente4 from "@/assets/imgEmbrastec.avif";
import cliente5 from "@/assets/imgSteck.png";
import cliente6 from "@/assets/imgSchneider.png";
import cliente7 from "@/assets/imgAbb.png";

const ClientesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--yellow);
  min-height: 50vh;

  div.contentClientes {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 55px;
    box-sizing: content-box;

    h1.title{
      font-weight: 600;
      font-size: 37px;
      color: var(--white);
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
    <ClientesContainer id="fornecedores">
      <div className="contentClientes">
        <h1 className="title">Fornecedores</h1>
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselPrevious />
          <CarouselContent>
            {clientImages.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center md:basis-1/4 lg:basis-1/3 sm:basis-1/3 basis-1/2"
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
          <CarouselNext />
        </Carousel>
      </div>
    </ClientesContainer>
  );
};
