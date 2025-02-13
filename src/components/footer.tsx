import styled from "styled-components"
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FooterContainer = styled.div`
background-color: var(--black);
color: var(--white);

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4rem 0;

    div.contentFooter{
        max-width: 1350px;
        padding: 0 24px;
        margin: 0 auto;
        display: flex;
        align-items: flex-start;
        gap: 3rem;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 3rem;
        border-bottom: 1px solid gray;

        div.box{
            width: 25%;
            display: flex;
            flex-direction: column;
            gap: 12px;

            h1{
                font-size: 19px;
                font-weight: 600;
            }

            ul.social{
                flex-direction: row;
            }

            ul{
                display: flex;
                flex-direction: column;
                gap: 8px;

                a{
                    text-decoration: none;
                    color: var(--white);
                }
                li{
                    list-style: none;

                    a{
                        font-size: 25px;
                    }
                }
            }
        }
    }

    p.copy{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 3rem;
        text-align: center;
    }

@media (max-width: 620px){
    div.contentFooter{
        flex-direction: column;
    }
    div.contentFooter div.box{
        width: 100%;
    }
}
`

export const Footer = () =>{
    const currentYear = new Date().getFullYear();
    return(
        <>
        <FooterContainer >
            <div className="contentFooter">
                <div className="box">
                    <h1>Solução em Quadros Elétricos</h1>
                    <p>Oferecendo soluções de alta qualidade desde 2019</p>
                </div>

                <div className="box">
                    <h1>Links Rápidos</h1>
                    <ul>
                        <a href="#">Home</a>
                        <a href="#sobre">Quem somos</a>
                        <a href="#fornecedores">Fornecedores</a>
                        <a href="#servicos">Nosso trabalho</a>
                        <a href="#contato">Contato</a>
                    </ul>
                </div>

                <div className="box">
                    <h1>Contato</h1>
                    <ul>
                        <li>R. Adélia Feijó, 884 - Mata Galinha - Galpão 02</li>
                        <li>contato@msfsolucoes.com.br</li>
                        <li>(85) 98202-3640</li>
                    </ul>
                </div>

                <div className="box">
                    <h1>Redes Sociais</h1>
                    <ul className="social">
                        <li><a href="https://www.instagram.com/msfsolucoes/" target="_blank"><FaInstagram /></a></li>
                        <li><a href="" target="_blank"><FaWhatsapp /></a></li>
                    </ul>
                </div>
            </div>
            <p className="copy">&copy; {currentYear} MSF Soluções em Quadros Elétricos. Todos os direitos reservados</p>
        </FooterContainer>
        </>
    )
}