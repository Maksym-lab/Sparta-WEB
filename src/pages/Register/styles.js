import styled, { css } from 'styled-components';
const flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Hero = styled.figure`
  position: relative;
  margin: ${({ theme }) => theme.size32} ${({ theme }) => theme.size0} ${({ theme }) => theme.size75};
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
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
    border-radius: ${({ theme }) => theme.size8};
    margin: ${({ theme }) => theme.size0} 4%;
    max-width: ${({ theme }) => theme.maxWidthBorderDesktop};
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin: auto;
    max-width: ${({ theme }) => theme.maxWidthBorderDesktop};
  }
`;
export const SectionUpload = styled.section`
  position: relative;
  ${flex}
  height: 165px;
  img {
    width: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size46});
  }
  input {
    width: ${({ theme }) => theme.border};
    height: ${({ theme }) => theme.border};
    border: none;
    background-color: ${({ theme }) => theme.white};
    outline: none;
    &:before {
      content: attr(data-title);
      position: absolute;
      left: -25px;
      right: ${({ theme }) => theme.size0};
      width: ${({ theme }) => theme.pct100};
      height: ${({ theme }) => theme.size20};
      font-size: 1.8em;
      font-weight: ${({ theme }) => theme.regular};
      white-space: nowrap;
      cursor: pointer;
    }
  }
`;
export const Form = styled.form`
  width: 90%;
  max-width: ${({ theme }) => theme.grid414};
  div {
    display: grid;
    grid-template-columns: 5% 32% 1fr;
    grid-row-gap: ${({ theme }) => theme.size20};
    align-items: center;
    margin: ${({ theme }) => theme.size20} ${({ theme }) => theme.size0};
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
    height: ${({ theme }) => theme.size30};
    padding: ${({ theme }) => theme.size0} 2%;
    svg {
      font-size: ${({ theme }) => theme.size8};
    }
    input {
      border: none;
      height: 90%;
    }
    label {
      white-space: nowrap;
    }
    label:nth-child(2) {
      margin-left: ${({ theme }) => theme.size10};
    }
  }
`;
export const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.size50} ${({ theme }) => theme.size0};
  button {
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
    border-radius: ${({ theme }) => theme.size3};
    width: 140px;
    height: ${({ theme }) => theme.size45};
    font-size: 1.1em;
    color: ${({ theme }) => theme.black};
  }
  button:nth-child(1) {
    margin-right: ${({ theme }) => theme.size10};
    background-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};
  }
`;
export const RadioInput = styled.section`
  display: flex;
  align-items: center;
  input {
    margin-right: ${({ theme }) => theme.size3};
  }
  label {
    margin-right: ${({ theme }) => theme.size10};
  }
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label:before {
    content: '';
    display: inline-block;
    margin-right: ${({ theme }) => theme.size3};
    width: ${({ theme }) => theme.size14};
    height: ${({ theme }) => theme.size14};
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
    border-radius: ${({ theme }) => theme.radiusCircle};
    background-clip: content-box;
    background-color: ${({ theme }) => theme.white};
  }
  input[type='radio']:checked + label:before {
    background-color: ${({ theme }) => theme.red};
  }
`;
