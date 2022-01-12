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
export const Button = styled.button`
    border: none;
    border-radius: ${({ theme }) => theme.size4};
    width: 190px;
    height: ${({ theme }) => theme.size50};
    font-size: 1.1em;
    color: ${({ theme }) => theme.black};
    background:${({ theme }) => theme.red};
    &:hover, &:active, &:focus{
      background: #ff555e;
    }
`
