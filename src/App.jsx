import { useState } from "react"

import { Container } from "./styles/app"

import BgSideBar from "./components/BgSideBar"
import CardFront from "./components/CardFront"
import CardBack from "./components/CardBack"
import Form from "./components/Form"

export default function App() {

  const [ name, setName ] = useState('DANIEL D RIBEIRO')
  const [ number, setNumber ] = useState('0000 0000 0000 0000')
  const [ expiry, setExpiry ] = useState('00/00')
  const [ cvc, setCvc ] = useState('000')

  const [ companie, setCompanie ] = useState('')

  const verifyCompanie = (number) => {
    const firstDigit = Number(number.substring(0, 1))
    
    switch(firstDigit){
      case 3:
        setCompanie('Amex')
        break
      case 4:
        setCompanie('Visa')
        break
      case 5:
        setCompanie('Mastercard')
        break
    }

    return firstDigit
  }

  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [expiryError, setExpiryError] = useState(false);
  const [cvcError, setCvcError] = useState(false);

  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();

    if(name === 'DANIEL D RIBEIRO'){
      setNameError(true)
    }

    if(number == '0000 0000 0000 0000'){
      setNumberError(true)
    } 

    if(companie == 'Amex' && number.length < 15) {
      setNumberError(true)
      console.log('cheguei')
      return
    } 

    if(companie != 'Amex' && number.length < 16) setNumberError(true)


    console.log(nameError, numberError, expiryError, cvcError)
  
    if (nameError || numberError || expiryError || cvcError) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <Container>
      <BgSideBar />
      {<CardFront 
        name={name}
        number={number}
        expiry={expiry}
        companie={companie}
      />}
      <CardBack 
        cvc={cvc}
      />
      <Form
        setName={setName}
        setNumber={setNumber}
        setExpiry={setExpiry}
        setCvc={setCvc}
        verifyCompanie={verifyCompanie}
        companie={companie}
        handleSubmit={handleSubmit}
        nameError={nameError}
        numberError={numberError}
        expiryError={expiryError}
        cvcError={cvcError}
        error={error}
      />
    </Container>
  )
}