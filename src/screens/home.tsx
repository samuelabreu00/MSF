import styled from "styled-components"
import { Button } from "@/components/ui/button"
import imgHome from '@/assets/imgHome.jpg'

const HomeContainer = styled.div`
    background-color: var(--black);
    color: var(--white);
    min-height: 100vh;
    display: flex;
    padding: 1rem 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);

    div.contentHome{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        

        max-width: 1350px;
        margin: 0 auto;
        padding: 0 24px;
        box-sizing: content-box;
        
        div.containerImg{
            width: 600px;
            height: 600px;
            border-radius: 30px;
            overflow: hidden;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        div.texts{
           h1{
            font-size: 52px;
            font-weight: 500;
    
            span{
                background-color: var(--yellow);
                padding: 0 10px;
            }
           }
           p{
            width: 100%;
            font-size: 24px;
            margin: .7rem 0 1rem 0;
           }
        }
}

@media (max-width: 1000px) {
        div.contentHome{
            flex-direction: column-reverse;
            gap: 1rem;
            padding: 10rem 24px;
        }
        div.contentHome div.containerImg{
            height: 100%;
            width: 100%;
        }
    }
@media (max-width: 660px){
    div.contentHome div.texts h1{
        font-size: 32px;
    }
}
`

const CustomButton = styled(Button)`
background-color: var(--yellow);
color: var(--white);
width: 200px;
height: 50px;
font-size: 19px;
transition: .3s;

&:hover{
    background-color: var(--yellow);
    color: var(--black);
}
`

export const Home = () =>{
    return(
        <>
        <HomeContainer>
            <div className="contentHome">
                <div className="texts" data-aos="fade-right">
                    <h1>Soluções em <span>Quadros Elétricos</span></h1>
                    <p>Oferecemos soluções personalizadas e de alta qualidade para suas necessidades elétricas</p>
                    <CustomButton>Fale Conosco</CustomButton>
                </div>

                <div className="containerImg" data-aos="fade-right"><img src={imgHome} alt="" /></div>
                
            </div>
        </HomeContainer>
        </>
    )
}