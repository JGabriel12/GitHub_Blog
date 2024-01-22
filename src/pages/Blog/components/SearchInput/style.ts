import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  width: 100%;
  margin-top: 4.5rem;
  margin-bottom: 3rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85rem;

    h3 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
    }

    span {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: 0.4s;
    flex: 1 0 0;

    border: 1px solid ${({ theme }) => theme.colors['base-border']};
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
    font-weight: 400;
    line-height: 160%;

    &:focus {
      border-color: ${({ theme }) => theme.colors.blue};
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
