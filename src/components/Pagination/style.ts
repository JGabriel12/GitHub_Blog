import styled from 'styled-components'

export const PaginationContainer = styled.div`
  width: 100%;
  margin: 3rem auto 7rem auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const IconStyle = styled.button`
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors.blue};

    &:hover {
      color: ${({ theme }) => theme.colors['base-border']};
      transition: 1s ease;
    }
  }
`

export const ButtonStyle = styled.button`
  margin: 0 8px;
  padding: 0.375rem 0.875rem;
  border-radius: 0.375rem;

  background-color: ${({ theme }) => theme.colors['base-post']};
  color: ${({ theme }) => theme.colors['base-text']};

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-border']};
    transition: 1s ease;
  }
`
