import styled, { css } from 'styled-components';
const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const input = css`
  border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
  height: ${({ theme }) => theme.size36};
  outline: none;
  background: ${({ theme }) => theme.absoluteWhite};
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.size12};
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    height: calc(
      ${({ theme }) => theme.size50} + ${({ theme }) => theme.size6}
    );
    font-size: ${({ theme }) => theme.size16};
  }
`;
export const Hero = styled.figure`
  position: relative;
  margin: ${({ theme }) => theme.size32} ${({ theme }) => theme.size0}
    ${({ theme }) => theme.size75};
  & img {
    height: ${({ theme }) => theme.size100};
    width: ${({ theme }) => theme.pct100};
    object-fit: cover;
  }
  & span {
    position: absolute;
    left: ${({ theme }) => theme.size0};
    right: ${({ theme }) => theme.size0};
    bottom: -40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    margin-top: ${({ theme }) => theme.size40};
  }
`;
export const Main = styled.main`
  ${flex}
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidthBorderDesktop};
  @media (min-width: ${({ theme }) => theme.tablet}) {
    border: ${({ theme }) => theme.border} solid
      ${({ theme }) => theme.darkGray};
    border-radius: ${({ theme }) => theme.size8};
    margin: ${({ theme }) => theme.size0} 4%;
    max-width: ${({ theme }) => theme.maxWidthBorderDesktop};
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin: auto;
    max-width: ${({ theme }) => theme.cardsContainerTablet};
  }
`;
export const Form = styled.form`
  width: ${({ theme }) => theme.pct90};
  max-width: ${({ theme }) => theme.grid414};
  margin: 10% auto 25%;
  & input:valid {
    border: 2px solid green;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.size34};
  width: ${({ theme }) => theme.pct100};
  }
  & .password {
    margin-bottom: ${({ theme }) => theme.size0};
  }
  & svg {
    position: absolute;
    top: ${({ theme }) => theme.size10};
    left: ${({ theme }) => theme.size8};
    font-size: ${({ theme }) => theme.size16};
    color: ${({ theme }) => theme.darkGray};
    @media screen and (min-width: ${({ theme }) => theme.tablet}) {
      top: ${({ theme }) => theme.size18};
      font-size: ${({ theme }) => theme.size20};
    }
    @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
      top: ${({ theme }) => theme.size16};
    }
  }
  & input {
    padding-left: ${({ theme }) => theme.size30};
    width: ${({ theme }) => theme.pct100};
    height: ${({ theme }) => theme.size30};
    ${input}
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    & label {
      margin-bottom: ${({ theme }) => theme.size28};
      font-size: ${({ theme }) => theme.size14};
    }
    & input{
      font-size: ${({ theme }) => theme.size12};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    & label {
      margin-bottom: ${({ theme }) => theme.size20};
      font-size: ${({ theme }) => theme.size24};
    }
    & input{
      font-size: ${({ theme }) => theme.size16};
    }
    & input {
      height: ${({ theme }) => theme.size50};
    }
  }
`;
export const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.size50} ${({ theme }) => theme.size0};
  button {
    border: none;
    border-radius: ${({ theme }) => theme.size4};
    width: 190px;
    height: ${({ theme }) => theme.size50};
    font-size: 1.1em;
    color: ${({ theme }) => theme.black};
  }
  button:nth-child(2) {
    margin-left: ${({ theme }) => theme.size10};
    background-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};
  }
`;
