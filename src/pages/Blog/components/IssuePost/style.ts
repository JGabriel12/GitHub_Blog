import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const IssuePostContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  padding: 2rem;
  transition: 0.4s;

  background: ${({ theme }) => theme.colors['base-post']};
  border: 2px solid ${({ theme }) => theme.colors['base-post']};

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
  }

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong {
      flex: 1;
      max-width: 17.6875rem;
      font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
      color: ${({ theme }) => theme.colors['base-title']};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    span {
      width: max-content;
      font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
      color: ${({ theme }) => theme.colors['base-span']};
      font-weight: 400;
    }
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`
