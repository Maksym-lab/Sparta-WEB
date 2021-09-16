import styled from 'styled-components';
export const BackgroundModal = styled.span`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 88vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Modal = styled.span`
  animation: slideLeft 0.4s forwards;
  z-index: 2;
  position: absolute;
  top: 0;
  right: -100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ theme }) => theme.pct80};
  height: ${({ theme }) => theme.pct100};
  padding: ${({ theme }) => theme.size6} ${({ theme }) => theme.size18};
  text-align: right;
  background-color: #202020;
  color: ${({ theme }) => theme.white};
  @keyframes slideLeft {
    100% {
      right: ${({ theme }) => theme.size0};
    }
  }
`;
export const Profile = styled.figure`
  display: flow-root;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.size30};
  img {
    width: ${({ theme }) => theme.size50};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize16};
    color: ${({ theme }) => theme.white};
  }
`;
export const Options = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    display: flex;
    align-items: center;
    margin-top: ${({ theme }) => theme.size40};
    margin-bottom: ${({ theme }) => theme.size8};
    font-size: ${({ theme }) => theme.fontSize16};
    color: ${({ theme }) => theme.white};
  }
  svg {
    margin-right: ${({ theme }) => theme.size8};
    font-size: ${({ theme }) => theme.fontSize12};
    color: ${({ theme }) => theme.red};
  }
  hr {
    border: 0.25px solid ${({ theme }) => theme.white};
    width: ${({ theme }) => theme.pct100};
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: ${({ theme }) => theme.fontSize10};
    color: ${({ theme }) => theme.white};
  }
  svg {
    color: ${({ theme }) => theme.white};
  }
`;
