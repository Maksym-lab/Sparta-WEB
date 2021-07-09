import styled from 'styled-components';
export const Hero = styled.figure`
  position: relative;
  margin: 32px 0 75px;
  & img {
    height: 94px;
    width: 100%;
    object-fit: cover;
  }
  & span {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -40px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 47px;
  }
`;
export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  max-width: 912px;
  @media (min-width: 768px) {
    border: 0.25px solid #404040;
    border-radius: 8px;
    margin: 0 4%;
    max-width: 714px;
  }
  @media (min-width: 1024px) {
    margin: auto;
    max-width: 912px;
  }
`;
export const SectionUpload = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 165px;
  img {
    width: 90px;
  }
  input {
    width: 0.1px;
    height: 0.1px;
    border: none;
    background-color: #f6f6f6;
    outline: none;
    &:before {
      content: attr(data-title);
      position: absolute;
      left: -25px;
      right: 0;
      width: 100%;
      height: 20px;
      font-size: 1.8em;
      font-weight: 400;
      white-space: nowrap;
      cursor: pointer;
    }
  }
`;
export const Form = styled.form`
  width: 90%;
  max-width: 444px;
  div {
    display: grid;
    grid-template-columns: 5% 32% 1fr;
    grid-row-gap: 20px;
    align-items: center;
    margin: 20px 0;
    border: 0.25px solid #404040;
    height: 30px;
    padding: 0 2%;
    svg {
      font-size: 18px;
    }
    input {
      border: none;
      height: 90%;
    }
    label {
      white-space: nowrap;
    }
    label:nth-child(2) {
      margin-left: 10px;
    }
  }
`;
export const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  button {
    border: 0.25px solid #404040;
    border-radius: 3px;
    width: 140px;
    height: 45px;
    font-size: 1.1em;
    color: black;
  }
  button:nth-child(1) {
    margin-right: 10px;
    background-color: #eb5757;
    color: white;
  }
`;
export const RadioInput = styled.section`
  display: flex;
  align-items: center;
  input {
    margin-right: 3px;
  }
  label {
    margin-right: 10px;
  }
  input[type='radio'] {
    display: none;
  }
  input[type='radio'] + label:before {
    content: '';
    display: inline-block;
    margin-right: 3px;
    width: 14px;
    height: 14px;
    border: 1px solid #bbbbbb;
    border-radius: 50%;
    background-clip: content-box;
    background-color: #fafafa;
  }
  input[type='radio']:checked + label:before {
    background-color: #eb5757;
  }
`;
