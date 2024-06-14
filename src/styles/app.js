import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`