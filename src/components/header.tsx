import styled from "styled-components"
import "../responsive.css"
import Logo from "../assets/logo.png"
import { useEffect } from "react"

const HeaderContainer = styled.div`

background-color: var(--black);
width: 100%;
height: 120px;
display: flex;
position: fixed;
top: 0;
left: 0;
z-index: 2;

 div.content-header{
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
    box-sizing: content-box;
    padding: 0 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .container-hamburguer{
        display: none;
        }
        .hamburguer{
            cursor: pointer;
        }
        .bar{
            display: block;
            width: 1.8rem;
            height: 3px;
            margin: 5px auto;
            transition: .3s ease-in-out;
            background-color: #fff;
            border-radius: 6px;
        }

    img{
        width: 250px;
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 32px;

        li{
            list-style: none;
        }
        
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

    
  useEffect(() => {
    const hamburguer = document.querySelector(".hamburguer") as HTMLElement | null;
    const navMenu = document.querySelector(".content-header .nav-menu") as HTMLElement | null;
  
    if (!hamburguer || !navMenu) return;

    const handleHamburguerClick = () => {
      hamburguer.classList.toggle("active");
      navMenu.classList.toggle("active");
    };
  
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(e.target as Node) &&
        !hamburguer.contains(e.target as Node)
      ) {
        navMenu.classList.remove("active");
        hamburguer.classList.remove("active");
      }
    };
  
    const handleScroll = () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburguer.classList.remove("active");
      }
    };
  
    if (hamburguer) {
      hamburguer.addEventListener("click", handleHamburguerClick);
    }
  
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("scroll", handleScroll);
  
    return () => {
      if (hamburguer) {
        hamburguer.removeEventListener("click", handleHamburguerClick);
      }
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return(
        <>
        <HeaderContainer>
            <div className="content-header">
               <a href="#" data-aos="fade-right"> <img src={Logo} alt=""/></a>

                <nav className="nav-menu" data-aos="fade-right">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#sobre">Quem somos</a></li>
                        <li><a href="#fornecedores">Fornecedores</a></li>
                        <li><a href="#parceiros">Parceiros</a></li>
                        <li><a href="#servicos">Nosso trabalho</a></li>
                        <li><a href="#contato">Contatos</a></li>    
                    </ul>
                </nav>

                <div className="container-hamburguer">
                    <div className="hamburguer">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
        </HeaderContainer>
        </>
    )
}