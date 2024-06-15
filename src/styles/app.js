import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media screen and (max-device-width: 430px) {
    flex-direction: column;
  }

  @media screen and (min-device-width: 431px) and (max-device-width: 915px) {
    flex-direction: column;
  }
`