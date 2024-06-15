import { useState } from "react";
import { Container } from "./styles";
import InputMask from 'react-input-mask';
import Button from "../Button";
import ErrorMessage from "../ErrorMessage";

export default function Form({ 
  setName, setNumber, setExpiry, setCvc, verifyCompanie, companie, 
  handleSubmit, nameError, setNameError, numberError, expiryError, cvcError, error, 
}) {
  const handleName = e => {
    const value = e.target.value;
    setName(value);
    setNameError(false)
  };

  const handleNumber = e => {
    const value = e.target.value;
    setNumber(value);
    const firstDigit = value.substring(0, 1);
    verifyCompanie(firstDigit);
  };

  const handleExpiry = e => {
    const value = e.target.value;
    setExpiry(value);
  };

  const handleCvc = e => {
    const value = e.target.value;
    setCvc(value);
  };  

  return (
    <Container>
      <label htmlFor="name">
        NOME IMPRESSO NO CARTÃO
        <input 
          type="text" 
          placeholder="DANIEL D RIBEIRO" 
          id="name"
          onChange={handleName}
          className={nameError ? 'error' : ''}
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
          className={numberError ? 'error' : ''}
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
            className={expiryError ? 'error' : ''}
          />
        </label>

        <label htmlFor="cvc">
          CVC
          <InputMask 
            mask={companie == 'Amex' ? '9999' : "999"} 
            maskChar={null} 
            alwaysShowMask={false} 
            placeholder={companie == 'Amex' ? '0000' : '000' }
            id="cvc"
            onChange={handleCvc}
            className={cvcError ? 'error' : ''}
          />
        </label>
      </div>

      <ErrorMessage error={error} />

      <Button onClick={handleSubmit} />
    </Container>
  );
}
