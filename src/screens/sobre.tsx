import styled from "styled-components"
import imgSobre from "@/assets/ImgSobre.jpg"

const SobreContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 90vh;
background-color: var(--white);
border-radius: 0 0 30px 30px;


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
            margin-top: 20px;
            div.containerImg{
                width: 400px;
                height: 400px;
                border-radius: 20px;
                overflow: hidden;

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

    @media (max-width: 750px){
        div.contentSobre div.flex{
            flex-direction: column;
        }
        div.contentSobre div.flex div.containerImg{
            width: 100%;
            height: 90%;
        }
        div.contentSobre div.flex p{
            width: 100%;
        }
    }
`

export const Sobre = () =>{
    return(
        <SobreContainer id="sobre" >
            <div className="contentSobre"
     data-aos-anchor-placement="center-center">
                <h1>Quem Somos</h1>
                <div className="flex">
                    <div className="containerImg"><img src={imgSobre} alt="" /></div>
                    <p>A <span>MSF Soluções</span> é uma empresa cearense líder em soluções de energia elétrica. <span>Especializada em montagem de quadros de baixa (BT), média (MT) e alta tensão (AT)</span>. <br /> <br /> Nossa equipe de engenheiros e técnicos altamente qualificados garante soluções eficientes, seguras e personalizadas para clientes de diversos setores. <br /> <br /> </p>
                </div>
                
            </div>
        </SobreContainer>
    )
}