import styled from "styled-components"
import cardBg from '../../assets/cardBackBg.png'

export const Container = styled.div`
  width: 450px;
  height: 245px;
  border-radius: 12px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 15%;
  padding: 28px 0px;
  background-image: url(${cardBg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${({theme}) => theme.COLORS.WHITE};

  @media screen and (max-device-width: 430px) {
    transform: scale(.75);
    left: -7%;
  }

  @media screen and (min-device-width: 431px) and (max-device-width: 915px) {
    top: calc(200px + 90px);
    left: 25%;
  }

  @media screen and (min-device-width: 1024px) and (max-device-width: 1440px) {
    width: 400px;
    height: 220px;
    font-size: 15px;
    left: 5%;
    top: 47%;
  }

  @media screen and (min-device-width: 1920px) {
    width: 500px;
    height: 295px;
    top: 46%;
  }

  .stripe{
    width: 100%;
    height: 55px;
    background-color: ${({theme}) => theme.COLORS.GRAY_800};
  }

  .cvc-wrapper{
    padding: 45px;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    @media screen and (min-device-width: 1920px) {
      gap: 15px;
    }

    > span {
      width: 100%;
      line-height: 35px;
      padding: 5px 10px;
      font-size: 20px;
      text-align: right;
      margin-bottom: 20px;
      background-color: ${({theme}) => theme.COLORS.GRAY_200};
      border-radius: 8px;
    }
  }
`