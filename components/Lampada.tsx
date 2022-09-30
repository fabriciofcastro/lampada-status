import { Button, SContainer, img, BoxLampada, BoxButton, anchor } from "./stylesLampada";

export default function Lampada({ status, functionLigar, functionDesligar, functionQuebrada, photo }) {

  return (
    <>
      <SContainer>
        <h1>LÂMPADA</h1>
        <BoxLampada>
          {
            <img src={ photo.src } alt="" onClick={ functionQuebrada } />
          }
        </BoxLampada>
        <BoxButton>
          {
            status === 'desligada'
              ?
              <Button type="submit" onClick={ functionLigar } > Ligar </Button>
              :
              <Button type="submit" onClick={ functionDesligar }> Desligar </Button>
          }
        </BoxButton>


      </SContainer>
    </>
  )
}