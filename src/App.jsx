import { useEffect, useState } from "react"

import { Container } from "./styles/app"

import BgSideBar from "./components/BgSideBar"
import CardFront from "./components/CardFront"
import CardBack from "./components/CardBack"
import Form from "./components/Form"
import SubmitMessage from "./components/SubmitMessage"

export default function App() {

  const [ name, setName ] = useState('')
  const [ number, setNumber ] = useState('')
  const [ expiry, setExpiry ] = useState('')
  const [ cvc, setCvc ] = useState('')

  const [ companie, setCompanie ] = useState('')

  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [expiryError, setExpiryError] = useState(false);
  const [cvcError, setCvcError] = useState(false);

  const [validated, setValidated] = useState(false)

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

  const [error, setError] = useState(false)

  const verifyErrors = () => {
    let hasError = false

    if(name === ''){
      setNameError(true)
      hasError = true
    }

    const numberTrimmed = number.replace(/\s+/g, '')

    if(number === '' || companie === 'Amex' && numberTrimmed.length < 15 || companie != 'Amex'&& numberTrimmed.length < 16){
      setNumberError(true)
      hasError = true
    }

    const month = Number(expiry.substring(0, 2))
    const year = Number(expiry.substring(3,5))
    const actualYear = Number(String(new Date().getFullYear()).substring(2,4))
    
    if(expiry == '' || expiry.length < 5 || month < 1 || month > 12 || actualYear > year){
      setExpiryError(true)
      hasError = true
    }

    if(cvc === '' || companie === 'Amex' && cvc.length < 4 || companie != 'Amex' && cvc.length < 3){
      setCvcError(true)
      hasError = true
    }

    return hasError
  }

  const handleSubmit = e => {
    e.preventDefault();

    setNameError(false)
    setNumberError(false)
    setExpiryError(false)
    setCvcError(false)

    verifyErrors()
    
    const hasError = verifyErrors();
    setError(hasError);

    if (!hasError) {
      setValidated(true);
    }
  };

  useEffect(() => {
    if (nameError || numberError || expiryError || cvcError) {
      setError(true);
    } else {
      setError(false)
    }
  }, [nameError, numberError, expiryError, cvcError]);

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
      { validated ? 
        (<SubmitMessage/>) : 
        
        (<Form
          setName={setName}
          setNumber={setNumber}
          setExpiry={setExpiry}
          setCvc={setCvc}
          verifyCompanie={verifyCompanie}
          companie={companie}
          handleSubmit={handleSubmit}
          nameError={nameError}
          setNameError={setNameError}
          numberError={numberError}
          setNumberError={setNumberError}
          expiryError={expiryError}
          setExpiryError={setExpiryError}
          cvcError={cvcError}
          setCvcError={setCvcError}
          error={error}
        />)
      }
    </Container>
  )
}