import { CardServicos } from "@/components/cardServiços"
import styled from "styled-components"
import { BsLightning } from "react-icons/bs";
import { SlWrench } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";

const ServicosContainer = styled.div`
background-color: var(--yellow);
display: flex;
justify-content: center;
align-items: center;
min-height: 50vh;


    div.contentServicos{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 12px;
        

        max-width: 1350px;
        margin: 0 auto;
        box-sizing: content-box;
        padding: 0 24px;
        width: 100%;

        h1.title{
            font-weight: 600;
            font-size: 37px;
            color: var(--green);
        }
        div.containerCardServicos{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }
`

export const Serviços = () =>{
    return(
        <>
        <ServicosContainer id="sericos">
            <div className="contentServicos">
                <h1 className="title">Nossos Serviços</h1>
                <div className="containerCardServicos">
                    <CardServicos title="Instalações" texto="Instalação profissional de quadros elétricos" icons={[<BsLightning />]}/>
                    <CardServicos title="Manutenções" texto="Serviços de manutenção preventiva e corretiva" icons={[<SlWrench />]}/>
                    <CardServicos title="Segurança" texto="Implementação de medidas de segurança elétrica" icons={[<MdOutlineSecurity />]}/>
                </div>
            </div>
        </ServicosContainer>
        </>
    )
}