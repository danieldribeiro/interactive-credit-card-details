import styled from 'styled-components'

export const Container = styled.form`
  width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 430px) {
    width: 95vw;
    margin-top: 200px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    margin-bottom: 40px;

    @media screen and (max-width: 430px) {
      font-size: 14px;
      margin-bottom: 20px;
    }

    input{
      width: 380px;
      height: 45px;
      border-radius: 8px;
      outline: none;
      border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
      padding: 10px 16px;
      font-size: 18px;

      @media screen and (max-width: 430px) {
        width: 300px;
      }

      &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_200};
        font-size: 16px;
      }
    }

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }

    input[type=number] { 
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }

  .expiry-cardCode-wrapper{
    width: 380px;
    display: flex;
    gap: 10px;

    @media screen and (max-width: 430px) {
      width: 300px;
    }

    input{
      width: 100%;
    }
  }
`