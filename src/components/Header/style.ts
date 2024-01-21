import styled from 'styled-components'
import HeaderBg from '../../assets/HeaderBackground.svg'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  background: url(${HeaderBg}) no-repeat center;
  background-size: cover;

  img {
    margin-bottom: 5rem;
  }
`
