import { Container } from "./styles"
import backCardDetails from '../../assets/backCardDetails.png'

export default function CardBack({ cvc }){
  return(
    <>
      <Container>
        <div className="stripe"></div>
        <div className="cvc-wrapper">
          <span>{cvc != '' ? cvc : '000'}</span>
          <img src={backCardDetails} alt='Card design details'/>
        </div>
      </Container>
    </>
  )
}