import styled from "styled-components";

interface CardServicosProps {
  texto: string;
  backgroundImage?: string;
}

const Card = styled.div`
  position: relative; 
  width: 300px;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 10px;
  z-index: 1;
    
    div.texts{
        padding: 1rem;

        p {
            font-size: 27px;
            color: var(--white);
            font-weight: 600;
        }
    }
`;

const CardBackground = styled.div<{ backgroundImage?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : "none")};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.4; 
  z-index: -1; 
`;

export const CardServicos = ({ texto, backgroundImage }: CardServicosProps) => {
  return (
    <Card>
      <CardBackground backgroundImage={backgroundImage} />
      <div className="texts">
        <p>{texto}</p>
      </div>
    </Card>
  );
};
