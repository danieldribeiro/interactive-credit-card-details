import { Container } from "./styles";

import validateIcon from '../../assets/validateIcon.png'

export default function SubmitMessage(){
  return(
    <Container>
      <div className="wrapper">
        <img src={validateIcon} alt="" />
        <h2>Obrigado!</h2>
        <p>Adicionamos os dados do seu cartão!</p>
      </div>
    </Container>
  )
}