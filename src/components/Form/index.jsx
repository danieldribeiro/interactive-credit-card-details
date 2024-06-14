import { Container } from "./styles"

import InputMask from 'react-input-mask'

export default function Form({ setName, setNumber, setExpiry, setCvc, verifyCompanie, companie }){

  const handleName = e => setName(e.target.value) 
  const handleNumber = e => {
    setNumber(e.target.value)
    const firstDigit = e.target.value.substring(0, 1)
    verifyCompanie(firstDigit)
  }
  const handleExpiry = e => setExpiry(e.target.value)
  const handleCvc = e => setCvc(e.target.value)

  return(
    <Container>
      <label htmlFor="name">
        NOME IMPRESSO NO CARTÃO
          <input 
            type="text" 
            placeholder="DANIEL D RIBEIRO" 
            id="name"
            onChange={handleName}
          />
      </label>

      <label htmlFor="number">
        NÚMERO DO CARTÃO 
        <InputMask 
          mask={companie == 'Amex' ? '9999 999999 99999' : "9999 9999 9999 9999"}
          maskChar={null} 
          alwaysShowMask={false} 
          placeholder='0000 0000 0000 0000'
          id="number"
          onChange={handleNumber}
        />
      </label>

      <div className="expiry-cardCode-wrapper">
        <label htmlFor="expiry">
          VALIDADE
          <InputMask 
            mask="99/99" 
            maskChar={null} 
            alwaysShowMask={false} 
            placeholder='MM/AA' 
            id="expiry"
            onChange={handleExpiry}
          />
        </label>

        <label htmlFor="cvc">
          CVC
          <InputMask 
            mask="999" 
            maskChar={null} 
            alwaysShowMask={false} 
            placeholder='000' 
            id="cvc"
            onChange={handleCvc}
          />
        </label>
      </div>
    </Container>
  )
}