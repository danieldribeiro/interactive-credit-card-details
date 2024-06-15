import { Container } from "./styles"

export default function ErrorMessage({error}){
  
  return(
    <Container className={error ? 'error' : ''}>
      Campo não preenchido ou preenchido incorretamente
    </Container>
  )
}