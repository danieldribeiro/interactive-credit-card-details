import styled from 'styled-components'

export const Container = styled.button`
  width: 380px;
  height: 45px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.VIOLET_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: all .2s;

  &:hover{
    filter: opacity(.9);
  }
`