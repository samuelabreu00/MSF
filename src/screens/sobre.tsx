import styled from "styled-components"

const SobreContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

min-height: 20vh;
background-color: var(--yellow);

    div.contentSobre{
        display: flex;
        align-items: center;
        flex-direction: column;

        max-width: 1350px;
        margin: 0 auto;
        box-sizing: content-box;
        padding: 0 24px;

        h1{
            font-weight: 600;
            font-size: 37px;
            color: var(--green);
        }
        p{
            font-size: 22px;
            margin-top: 12px;
            color: var(--magenta);

            span{
                font-weight: 600;
            }
        }
    }
`

export const Sobre = () =>{
    return(
        <SobreContainer id="sobre">
            <div className="contentSobre">
                <h1>Quem Somos</h1>
                <p>A MSF Soluções é uma empresa cearense líder em soluções de energia elétrica. <span>Especializada em montagem de quadros de baixa (BT), média (MT) e alta tensão (AT)</span>. Nossa equipe de engenheiros e técnicos altamente qualificados garante soluções eficientes, seguras e personalizadas para clientes de diversos setores</p>
            </div>
        </SobreContainer>
    )
}