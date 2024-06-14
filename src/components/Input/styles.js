import styled from 'styled-components'

export const Container = styled.input`
  width: clamp(330px, 380px, 400px);
  height: 45px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${({theme}) => theme.COLORS.GRAY_200};
  padding: 10px 16px;
  font-size: 18px;
`