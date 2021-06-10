import styled from 'styled-components';
export const Hero = styled.figure`
  max-width: 1282px;
  margin: auto;
  margin-top: 30px;
  img {
    width: 100%;
    height: 132px;
    object-fit: cover;
  }
`;
export const RedPhoto = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -50px;
  img {
    width: 90px;
  }
  h1 {
    font-size: 1.5em;
    font-weight: 400;
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
    grid-template-columns: 10% 30% 60%;
    grid-row-gap: 20px;
    align-items: center;
    margin: 20px 0;
    border: 0.25px solid #404040;
    height: 30px;
    padding: 2%;
    input {
      border: none;
      height: 100%;
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
