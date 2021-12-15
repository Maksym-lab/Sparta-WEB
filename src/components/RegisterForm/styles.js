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
  margin: ${({ theme }) => theme.size32} ${({ theme }) => theme.size0};
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
  margin-top: 70px;
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidthBorderDesktop};
  @media (min-width: ${({ theme }) => theme.tablet}) {
    border: ${({ theme }) => theme.border} solid
      ${({ theme }) => theme.darkGray};
    border-radius: ${({ theme }) => theme.size8};
    margin: ${({ theme }) => theme.size0} 4%;
    margin-top: 70px;
    max-width: ${({ theme }) => theme.maxWidthBorderDesktop};
  }
  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin: auto;
    margin-top: 70px;
    max-width: ${({ theme }) => theme.cardsContainerTablet};
  }
`;
export const SectionUpload = styled.section`
  position: relative;
  ${flex}
  margin: ${({ theme }) => theme.size26} auto;
  width:calc( ${({ theme }) => theme.size100} * 3 );
  height:${({ theme }) => theme.size70};
  object-fit:cover;
  @media(max-width:${({ theme }) => theme.mobil}){
      margin: ${({ theme }) => theme.size26} auto;
  }
  img {
    width: ${({ theme }) => theme.size75};
    height: ${({ theme }) => theme.size75};
    border-radius:${({ theme }) => theme.radiusCircle};
    box-shadow: ${({ theme }) => theme.shadow1};
  }
  & input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 91px;
    height:${({ theme }) => theme.size20};
    border: none;
  }
  & .inputUpload::-webkit-file-upload-button{
    visibility: hidden; 
  }
  & .inputUpload::before{
    content: 'Select a photo';
    background: transparent;
    padding: ${({ theme }) => theme.size6} ${({ theme }) => theme.size8};
    outline: none;
    -webkit-user-select: none;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.size12};
  }
  & .inputUpload:hover::before{
    border-color: black;
  }
  & .inputUpload:active::before{
    background:red;
  }
`;
export const Form = styled.form`
  width: ${({ theme }) => theme.pct90};
  max-width: ${({ theme }) => theme.grid414};
  margin: 50px 0;
  & input:valid {
    border: 2px solid green;
  }
  & textarea:valid {
    border: 2px solid green;
  }
  & p {
    color: red;
    font-size: 16px;
    text-align: center;
    margin-top: 10px;
  }
`;
export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.size34};
  width: ${({ theme }) => theme.pct100};
  & a {
    margin-top: ${({ theme }) => theme.size10};
    font-size: ${({ theme }) => theme.size10};
    @media screen and (min-width: ${({ theme }) => theme.tablet}) {
      font-size: ${({ theme }) => theme.size12};
    }
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
  & textarea {
    padding: ${({ theme }) => theme.size10};
    font-family: ${({ theme }) => theme.font};
    margin-bottom: ${({ theme }) => theme.size34};
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    & label {
      margin-bottom: ${({ theme }) => theme.size28};
      font-size: ${({ theme }) => theme.size14};
    }
    & input,
    textarea {
      font-size: ${({ theme }) => theme.size12};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    & label {
      margin-bottom: ${({ theme }) => theme.size20};
      font-size: ${({ theme }) => theme.size24};
    }
    & input,
    textarea {
      font-size: ${({ theme }) => theme.size16};
    }
    & input {
      height: ${({ theme }) => theme.size50};
    }
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
    position: relative;
    top: 3px;
    margin-right: ${({ theme }) => theme.size4};
    content: '';
    display: inline-block;
    margin-right: ${({ theme }) => theme.size3};
    width: ${({ theme }) => theme.size14};
    height: ${({ theme }) => theme.size14};
    border: ${({ theme }) => theme.border} solid
      ${({ theme }) => theme.darkGray};
    border-radius: ${({ theme }) => theme.radiusCircle};
    background-clip: content-box;
    background-color: ${({ theme }) => theme.white};
  }
  input[type='radio']:checked + label:before {
    background-color: ${({ theme }) => theme.red};
  }
`;
export const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.size50} ${({ theme }) => theme.size0} ${({ theme }) => theme.size0};
  button {
    border: none;
    border-radius: ${({ theme }) => theme.size4};
    width: 190px;
    height: ${({ theme }) => theme.size50};
    font-size: 1.1em;
    color: ${({ theme }) => theme.black};
    cursor: pointer;
  }
  button:nth-child(2) {
    margin-left: ${({ theme }) => theme.size10};
    background-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.black};
  }
`;
