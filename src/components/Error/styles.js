import styled, { css } from 'styled-components';
const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-items: center;
  margin: 0 auto;
`;
export const Container = styled.section`
  max-width: ${({ theme }) => theme.cardsContainerTablet};
  ${flexColumn}
  img {
    margin-top: 10vh;
    margin-bottom: ${({ theme }) => theme.size16};;
    width:${({ theme }) => theme.pct40};;
  }
`;
export const Description = styled.div`
  ${flexColumn}
  *{
    text-align: center;
  }
  & h3{
    font-size:calc(${({ theme }) => theme.pct100} * 3);
  }
  & h2{
    margin-bottom:1rem;
    font-size:calc(${({ theme }) => theme.pct100} * 1.4);
  }
  & p{
    margin-bottom: 5vh;
    font-size:${({ theme }) => theme.size16};;
  }
`;
