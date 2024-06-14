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
  }

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
      />
    </Container>
  )
}