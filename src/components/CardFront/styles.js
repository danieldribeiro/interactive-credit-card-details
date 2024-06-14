import styled from "styled-components"
import cardBg from '../../assets/cardBg.png'

export const Container = styled.div`
  width: 450px;
  height: 245px;
  border-radius: 12px;
  background-color: red;
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
    top: -2%;
    left: -8%;
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
  }

  .name{
    text-transform: uppercase;
  }

  .nameAndExpiryContainer{
    display: flex;
    justify-content: space-between;
  }
  `