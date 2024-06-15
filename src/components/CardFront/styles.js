import styled from "styled-components"
import cardBg from '../../assets/cardBg.png'

export const Container = styled.div`
  width: 450px;
  height: 245px;
  border-radius: 12px;
  position: absolute;
  top: 20%;
  left: 10%;
  padding: 28px 32px;
  background-image: url(${cardBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({theme}) => theme.COLORS.WHITE};

  @media screen and (max-width: 430px) {
    transform: scale(.75);
    top: 3%;
    left: -10%;
  }

  @media screen and (min-width: 431px) and (max-width: 915px) {
    top: 5%;
  }

  @media screen and (min-device-width: 1024px) and (max-device-width: 1440px) {
    width: 400px;
    height: 220px;
    font-size: 15px;
    left: 2%;
  }

  @media screen and (min-device-width: 1920px) {
    width: 500px;
    height: 295px;
    font-size: 20px;
  }

  .companie{
    width: 80px;
    height: 80px;
    font-size: 24px;
    font-weight: 600;

    img{
      width: 80px;
    }
  }

  .number{
    width: fit-content;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 3px;

    @media screen and (min-device-width: 1920px) {
      font-size: 30px;
    }
  }

  .name{
    text-transform: uppercase;
  }

  .nameAndExpiryContainer{
    display: flex;
    justify-content: space-between;
  }
  `