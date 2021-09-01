import styled, { css } from 'styled-components';
const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  background:${({ theme }) => theme.background};
`;
export const Container = styled.section`
  max-width: ${({ theme }) => theme.cardsContainerTablet};
  ${flexColumn}
  * {
    text-align: center;
  }
.lds-grid {
  margin: 13vh auto 60vh;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-grid div {
  position: absolute;
  width: ${({ theme }) => theme.size12};
  height: ${({ theme }) => theme.size12};
  border-radius: ${({ theme }) => theme.size2};
  background: ${({ theme }) => theme.red};
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: ${({ theme }) => theme.size8};
  left: ${({ theme }) => theme.size8};
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: ${({ theme }) => theme.size8};
  left: ${({ theme }) => theme.size32};
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: ${({ theme }) => theme.size8};
  left: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size6});
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: ${({ theme }) => theme.size32};
  left: ${({ theme }) => theme.size8};
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: ${({ theme }) => theme.size32};
  left: ${({ theme }) => theme.size32};
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: ${({ theme }) => theme.size32};
  left: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size6});
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size6});
  left: ${({ theme }) => theme.size8};
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size6});
  left: ${({ theme }) => theme.size32};
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size6});
  left: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size6});
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
`;
