import styled from "styled-components"
import Logo from "../assets/logo.png"

const HeaderContainer = styled.div`

background-color: var(--black);
width: 100%;
height: 100px;
display: flex;

 div.content-header{
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    box-sizing: content-box;
    padding: 0 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 200px;
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;
        
        a{
            color: var(--white);
            text-decoration: none;
            font-weight: 450;
            transition: all.3s;

            &:hover{
                opacity: .7;
            }
        }
    }

}

`

export const Header = () =>{
    return(
        <>
        <HeaderContainer>
            <div className="content-header">
                <img src={Logo} alt="" />

                <ul>
                    <a href="#">Home</a>
                    <a href="#sobre">Quem somos</a>
                    <a href="#servicos">Nosso trabalho</a>
                    <a href="#clientes">Clientes</a>
                    <a href="#contato">Contatos</a>
                </ul>
            </div>
        </HeaderContainer>
        </>
    )
}