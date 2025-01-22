import styled from "styled-components"

interface CardServicosProps{
    title: string,
    texto: string
    icons: React.ReactNode[];
}

const Card = styled.div `
background-color: var(--white);
width: 430px;
min-height: 150px;
border-radius: 8px;
border: 1px solid #b7b7b7;

padding: 22px;
display: flex;
flex-direction: column;
gap: 10px;

    h1{
        font-size: 27px;
        font-weight: 500;
        color: var(--green);
        display: flex;
        align-items: center;
        gap: 8px;
    }
    p{
        font-size: 17px;
        color: var(--magenta);
        font-weight: 450;
    }
`
export const CardServicos = ({title, texto, icons}:CardServicosProps) =>{
    return(
        <>
        <Card>
            <h1>{icons.map((icon, index) =>(
                <span key={index}>{icon}</span>
            ))}{title}</h1>
            <p>{texto}</p>
        </Card>
        </>
    )
}