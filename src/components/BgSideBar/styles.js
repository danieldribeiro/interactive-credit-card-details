import styled from 'styled-components'
import bgSideBar from '../../assets/bgSideBar.png'

export const Container = styled.div`
  width: 30%;
  height: 100vh;
  background-image: url(${bgSideBar});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media screen and (min-width: 320px) {
      background-image: none;
      background-color: red;
  }

  @media screen and (max-width: 430px) {
      width: 100vw;
      height: 30vh;
  }
`