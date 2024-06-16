import styled from 'styled-components'

export const Container = styled.div`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 430px) {
    width: 100vw;
    margin-top: 250px;
  }

  @media screen and (min-width: 431px) and (max-width: 915px) {
    width: 100vw;
    margin-top: 280px;
  }

  .wrapper{
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    font-size: 20px;
  }

  h2{
    font-size: 32px;
    text-transform: uppercase;
  }
`