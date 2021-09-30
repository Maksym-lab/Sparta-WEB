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
    & img:first-child {
      width: calc(
        ${({ theme }) => theme.size50} + ${({ theme }) => theme.size14}
      );
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    height: ${({ theme }) => theme.size48};
    & img:first-child {
      width: calc(
        ${({ theme }) => theme.size50} + ${({ theme }) => theme.size32}
      );
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
`;
export const TextLogin = styled.p`
  margin-right: ${({ theme }) => theme.size8};
  font-size: ${({ theme }) => theme.size12};
  color: ${({ theme }) => theme.white};
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.size14};
  }
`;
export const UserPhoto = styled.img`
  margin-right: ${({ theme }) => theme.size8};
  width: ${({ theme }) => theme.size26};
  height: ${({ theme }) => theme.size26};
`;
export const BurguerMenu = styled.div`
  display: flex;
  svg {
    width: 20px;
    color: #f6f6f6;
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    display: none;
  }
`;
