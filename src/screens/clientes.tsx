import styled from "styled-components";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ClientesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  min-height: 50vh;

  div.contentClientes {
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 24px;
    box-sizing: content-box;
  }
`;

const clientImages = [
  "https://via.placeholder.com/300x300?text=Cliente+1",
  "https://via.placeholder.com/300x300?text=Cliente+2",
  "https://via.placeholder.com/300x300?text=Cliente+3",
  "https://via.placeholder.com/300x300?text=Cliente+4",
  "https://via.placeholder.com/300x300?text=Cliente+5",
];

export const Clientes = () => {
  return (
    <>
      <ClientesContainer>
        <div className="contentClientes">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselPrevious />
            <CarouselContent>
              {clientImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center p-6 bg-gray-100 rounded-md">
                      <img
                        src={image}
                        alt={`Cliente ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
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
    </>
  );
};
