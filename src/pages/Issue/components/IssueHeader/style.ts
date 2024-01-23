import styled from 'styled-components'

export const IssueHeaderContainer = styled.section`
  width: 100%;
  min-height: 10.5rem;
  padding: 2rem 2.5rem;

  margin-top: -5.5rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.textSizes['text-bold-l']};
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    gap: 1.5rem;
    margin-top: auto;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.colors['base-span']};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
