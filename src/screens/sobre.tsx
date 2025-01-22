import styled from "styled-components"
import imgSobre from "@/assets/ImgSobre.jpg"

const SobreContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 70vh;
background-color: var(--yellow);

    div.contentSobre{
        display: flex;
        align-items: center;
        flex-direction: column;

        max-width: 1350px;
        margin: 0 auto;
        box-sizing: content-box;
        padding: 24px;

        h1{
            font-weight: 600;
            font-size: 37px;
            color: var(--green);
        }
        div.flex{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            width: 100%;
            margin-top: 50px;
            div.containerImg{
                width: 400px;
                height: 400px;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(31, 31, 31, 0.463);

                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            p{
            font-size: 22px;
            margin-top: 12px;
            color: var(--magenta);
            width: 50%;

            span{
                font-weight: 600;
            }
        }

        }
       
    }
`

export const Sobre = () =>{
    return(
        <SobreContainer id="sobre">
            <div className="contentSobre">
                <h1>Quem Somos</h1>
                <div className="flex">
                    <div className="containerImg"><img src={imgSobre} alt="" /></div>
                    <p>A <span>MSF Soluções</span> é uma empresa cearense líder em soluções de energia elétrica. <span>Especializada em montagem de quadros de baixa (BT), média (MT) e alta tensão (AT)</span>. <br /> <br /> Nossa equipe de engenheiros e técnicos altamente qualificados garante soluções eficientes, seguras e personalizadas para clientes de diversos setores.</p>
                </div>
                
            </div>
        </SobreContainer>
    )
}