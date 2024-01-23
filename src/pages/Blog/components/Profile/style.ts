import styled from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  min-height: 13.25rem;
  flex-shrink: 0;

  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;

  padding: 2rem 2.5rem;
  gap: 2rem;

  margin-top: -5.5rem;
`
export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`
export const ProfileDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    h1 {
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: ${({ theme }) => theme.textSizes['title-title-x']};

      font-weight: 700;
      line-height: 130%;
    }
  }

  p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
    font-weight: 400;
    line-height: 160%;
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

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${({ theme }) => theme.colors['base-label']};
      }
    }
  }
`
