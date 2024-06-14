import { Container } from "./styles"

import visa from '../../assets/visaLogo.png'
import masterCard from '../../assets/mastercardLogo.png'
import amex from '../../assets/amexLogo.png'

export default function CardFront({ companie, name, number, expiry }){

  return(
    <>
      <Container>
        <div className="companie">
          {
            companie == 'Amex' ? <img src={amex} alt="" /> :
            companie == 'Visa' ? <img src={visa} alt="" /> :
            companie == 'Mastercard' ? <img src={masterCard} alt="" /> : ''
          }
        </div>
        <div className="number">{number != '' ? number : '0000 0000 0000 0000'}</div>
        <div className="nameAndExpiryContainer">
          <div className="name">{name != '' ?  name : 'DANIEL D RIBEIRO'}</div>
          <div>{expiry != '' ? expiry : '00/00'}</div>
        </div>
      </Container>
    </>
  )
}