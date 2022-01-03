import styled, { css } from 'styled-components';
const boxShadow = css`
  -webkit-box-shadow: ${({ theme }) => theme.shadow4};
  -moz-box-shadow: ${({ theme }) => theme.shadow4};
  box-shadow: ${({ theme }) => theme.shadow4};
`;
export const HeaderBar = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  top: ${({ theme }) => theme.size0};
  ${boxShadow};
  width: ${({ theme }) => theme.pct100};
  height: ${({ theme }) => theme.size32};
  padding: ${({ theme }) => theme.size0} ${({ theme }) => theme.size12};
  background: ${({ theme }) => theme.black};
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    height: ${({ theme }) => theme.size40};
    & .logo {
      width: calc(
        ${({ theme }) => theme.size50} + ${({ theme }) => theme.size14}
      );
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    height: ${({ theme }) => theme.size48};
    & .logo {
      width: calc(
        ${({ theme }) => theme.size50} + ${({ theme }) => theme.size32});
    }
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.pct100};
  max-width: ${({ theme }) => theme.desktopContainer};
  margin: ${({ theme }) => theme.size0} auto;
`;
export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Heart = styled.img`
  margin-right: ${({ theme }) => theme.size8};
  width: ${({ theme }) => theme.size18};
  height: ${({ theme }) => theme.size18};
  &:hover, &:active, &:focus{
    transform:scale(1.25);
    color: ${({ theme }) => theme.border} solid ${({ theme }) => theme.lightGray};
    outline:none;
  }
}
  @media(max-width: ${({ theme }) => theme.mobil}){
    display:none;
  }
`;
export const TextLogin = styled.p`
  margin-right: ${({ theme }) => theme.size8};
  font-size: ${({ theme }) => theme.size12};
  color: ${({ theme }) => theme.white};
  svg {
    width: 26px;
    height: 26px;
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.size14};
  }
  @media(max-width: ${({ theme }) => theme.mobil}){
    display:none;
  }
`;
export const UserPhoto = styled.img`
  margin-right: ${({ theme }) => theme.size8};
  width: ${({ theme }) => theme.size26};
  height: ${({ theme }) => theme.size26};
  @media(max-width: ${({ theme }) => theme.mobil}){
    display:none;
  }
`;
export const BurguerMenu = styled.div`
  display: flex;
  &:hover, &:active, &:focus{
    background: ${({ theme }) => theme.black};
    border-radius:50%;
    width:${({ theme }) => theme.size20};;
    height:${({ theme }) => theme.size20};;
    padding:2px;
    outline:none;
  }
  svg {
    width: ${({ theme }) => theme.size20};;
    color: ${({ theme }) => theme.white};;
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;
