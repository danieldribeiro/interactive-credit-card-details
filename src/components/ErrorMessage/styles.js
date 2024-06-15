import styled from 'styled-components'

export const Container = styled.p`
  margin: 0px 0 30px;
  color: ${({theme}) => theme.COLORS.RED};
  display: none;
  transition: all .2s;
`