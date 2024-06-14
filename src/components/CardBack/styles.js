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

  @media screen and (max-width: 430px) {
    transform: scale(.75);
    top: 21%;
    left: 0%;
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