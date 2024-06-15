import styled from 'styled-components'
import bgSideBar from '../../assets/bgSideBar.png'

export const Container = styled.div`
  width: 30%;
  height: 100vh;
  background-image: url(${bgSideBar});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (max-width: 430px) {
      width: 100vw;
      height: 30vh;
  }

  @media screen and (min-width: 431px) and (max-width: 915px) {
    width: 100vw;
    height: 30vh;
  }

  @media screen and (min-device-width: 1024px) and (max-device-width: 1440px) {
    width: 45vw;
  }

  @media screen and (min-device-width: 1920px) {
    width: 45vw;
  }
`