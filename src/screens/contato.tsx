  import styled from "styled-components"
  import { Input } from "@/components/ui/input"
  import { Textarea } from "@/components/ui/textarea"
  import { Button } from "@/components/ui/button"
  import { IoLocationOutline } from "react-icons/io5";
  import { BsTelephone } from "react-icons/bs";
  import { AiOutlineMail } from "react-icons/ai";

  const ContatoContainer = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
    div.contentContato{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      max-width: 1350px;
      margin: 0 auto;
      padding: 24px;
      width: 100%;

      h1{
        font-weight: 600;
        font-size: 37px;
        color: var(--green);
      }

      div.flex{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        
        form{
          width: 50%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        div.mapa{
          width: 50%;
          height: 500px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;

          iframe{
            width: 100%;
            height: 100%;
          }

          ul.social{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;

            li{
              display: flex;
              align-items: center;
              gap: 12px;
              font-size: 15px;
              font-weight: bold;

              @media (max-width: 620px){
                font-size: 12px;
              }   
            }
          }
        }
      }
    }
  @media (max-width: 620px){
    div.contentContato{
      padding: 3rem 24px;
    }
    div.contentContato div.flex{
      flex-direction: column;
      align-items: center;
    }
    div.contentContato div.flex form, div.contentContato div.flex div.mapa{
      width: 100%;
    }
  }

  
  `

  const Icon = styled.div`
  font-size: 25px;
  `

  export const Contato = () =>{
    return(
        <>
        <ContatoContainer id="contato"> 
          <div className="contentContato">
            <h1>Entre em contato</h1>
            <div className="flex">
              <form>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Mensagem" />
                <Button type="submit">Enviar</Button>
              </form>

              <div className="mapa">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.2237469970296!2d-38.54700372412444!3d-3.7614147433428675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749369c0d1c99%3A0x9701f1dfa431bbe6!2sR.%20Queir%C3%B3s%20Ribeiro%2C%20221%20-%20Bom%20Futuro%2C%20Fortaleza%20-%20CE%2C%2060410-294!5e0!3m2!1spt-PT!2sbr!4v1738515720284!5m2!1spt-PT!2sbr"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen></iframe>
                <ul className="social">
                  <li><Icon><IoLocationOutline /></Icon> <p>Endereço: R. Queirós Ribeiro, 221 - LOJAS 02 - 03</p></li>
                  <li><Icon><BsTelephone /></Icon> <p>(85) 98202-3640</p></li>
                  <li><Icon><AiOutlineMail /></Icon> <p>contato@msfsolucoes.com.br</p></li>
                </ul>
              </div>
            </div>
          </div>
        </ContatoContainer>
        </>
    )
  }