import styled from 'styled-components';
export const BackgroundModal = styled.span`
  position: fixed;
  z-index:3;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Modal = styled.span`
  position: absolute;
  z-index: 2;
  top: ${({ theme }) => theme.size0};;
  right: -100px;
  display: flex;
  flex-direction: column;
  animation: slideLeft 0.4s forwards;
  justify-content: space-between;
  box-shadow: -8px 8px 16px rgba(123, 123, 123, 0.2);
  width: ${({ theme }) => theme.pct80};
  height: ${({ theme }) => theme.pct80};
  padding: ${({ theme }) => theme.size6} ${({ theme }) => theme.size18};
  background-color: #202020;
  color: ${({ theme }) => theme.white};
  text-align: right;
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
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.fontSize16};
  }
`;
export const Options = styled.nav`
  position:relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: -15%;
  p {
    display: flex;
    align-items: center;
    margin-top: ${({ theme }) => theme.size40};
    margin-bottom: ${({ theme }) => theme.size8};
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.fontSize16};
  }
  svg {
    margin-right: ${({ theme }) => theme.size8};
    color: ${({ theme }) => theme.red};
    font-size: ${({ theme }) => theme.fontSize12};
  }
  hr {
    width: ${({ theme }) => theme.pct100};
    color:${({ theme }) => theme.white};
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
    margin: ${({ theme }) => theme.size0} ${({ theme }) => theme.size4};;
    color: ${({ theme }) => theme.white};
  }
`;
