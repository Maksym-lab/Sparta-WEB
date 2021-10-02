import styled from 'styled-components';
export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: ${({ theme }) => theme.size100} 0 ${({ theme }) => theme.size50};
`;
export const SocialIcons = styled.section`
  display: flex;
  font-size: ${({ theme }) => theme.size22};
  & svg{
    color: ${({ theme }) => theme.darkGray};
  }
`;
export const Links = styled.section`
  display: flex;
  & p {
    font-size: ${({ theme }) => theme.size14};
    & a {
      margin: ${({ theme }) => theme.size8};
      text-decoration: none;
      color: ${({ theme }) => theme.darkGray};
      margin-left: ${({ theme }) => theme.size4};
      &:hover, &:focus{
        color: ${({ theme }) => theme.red};
      }
    }
  }
`;
