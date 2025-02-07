import { CardServicos } from "@/components/cardServiços"
import styled from "styled-components"
import imgInstalação from "@/assets/imgInstalação.jpg"
import imgManutencao from "@/assets/imgManutenção.jpg"
import imgConsultoria from "@/assets/imgConusltoria.jpg"
import imgTreinamento from "@/assets/imgTreinamento.jpg"

const ServicosContainer = styled.div`
border-top: 5px solid var(--yellow);
background-color: var(--green);
display: flex;
justify-content: center;
align-items: center;
min-height: 60vh;


    div.contentServicos{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 12px;
        

        max-width: 1350px;
        margin: 0 auto;
        box-sizing: content-box;
        padding: 24px;
        width: 100%;

        h1.title{
            font-weight: 600;
            font-size: 37px;
            color: var(--white);
        }
        div.containerCardServicos{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            width: 100%;
            margin-top: 50px;

            flex-wrap: wrap;
        }
    }

    @media (max-width: 985px){
        div.contentServicos div.containerCardServicos{
            justify-content: center;

        }
    }
`

export const Serviços = () =>{
    return(
        <>
        <ServicosContainer id="servicos">
            <div className="contentServicos">
                <h1 className="title">Nossos Serviços</h1>
                <div className="containerCardServicos">
                    <CardServicos 
                     texto="Projeto e execução de sistemas elétricos"  
                     backgroundImage={imgInstalação}/>
                    <CardServicos 
                    texto="Manutenção e reforma de quadros existentes"
                     backgroundImage={imgManutencao}/>
                    <CardServicos 
                    texto="Consultoria técnica" 
                    backgroundImage={imgConsultoria}
                   />  
                    <CardServicos 
                    texto="Treinamento e capacitação" backgroundImage={imgTreinamento}/>
                </div>
            </div>
        </ServicosContainer>
        </>
    )
}