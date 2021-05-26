import styled from 'styled-components';
export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const SocialIcons = styled.section`
  display: flex;
  font-size: 22px;
`;
export const Links = styled.section`
  display: flex;
  & p {
    font-size: 14px;
    & a {
      text-decoration: none;
      color: #EB5757;
      margin-left: 5px;
    }
  }
`;
