import styled from 'styled-components';
export const Main = styled.main`
  max-width: 1282px;
  margin: 0 auto;
  background: #fbfbfb;
`;
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
export const Section = styled.section`
  @media screen and (min-width: 768px) {
    margin: 0 26px;
    border: 1px solid lightgrey;
    border-radius: 8px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 912px;
    margin: 0 auto;
  }
`;
export const FileUploader = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 185px;
  background: #404040;
  color: #f6f6f6;
  & h5 {
    margin: 25px 0 17px;
    font-weight: 500;
  }
  & svg {
    display: block;
    font-size: 1.8rem;
  }
  & input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    outline: none;
    visibility: hidden;
    cursor: pointer;
    background-color: #c61c23;
    &:before {
      content: attr(data-title);
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-top: 1.3rem;
      visibility: visible;
      text-align: center;
    }
  }
  @media screen and (min-width: 768px) {
    height: 274px;
    border-radius: 6px 6px 0 0;
    font-size: 18px;
    & h5 {
      margin-bottom: 40px;
      font-size: 18px;
    }
    & svg {
      font-size: 2.5rem;
    }
    & input:before {
      padding-top: 0px;
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 405px;
    & h5 {
      margin-top: 50px;
      font-size: 26px;
    }
    & svg {
      font-size: 3.7rem;
    }
    & input:before {
      font-size: 26px;
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 15px 19px 35px;
  & label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 12px;
    font-weight: 700;
  }
  & input {
    height: 30px;
    margin-bottom: 35px;
    padding-left: 10px;
    border: 1px solid darkgray;
    font-size: 10px;
    outline: none;
  }
  & #availability {
    width: 102px;
    padding-left: 10px;
  }
  & textarea {
    margin-bottom: 35px;
    padding: 10px;
    border: 1px solid darkgray;
    font-family: Arial;
    font-size: 10px;
    outline: none;
  }
  @media screen and (min-width: 768px) {
    margin-top: 4rem;
    & label {
      font-size: 15px;
      margin-bottom: 10px;
    }
    & input,
    textarea {
      font-size: 13px;
    }
    & #availability {
      width: 130px;
    }
  }
  @media screen and (min-width: 1024px) {
    & label {
      font-size: 24px;
      margin-bottom: 20px;
    }
    & input,
    textarea {
      font-size: 16px;
    }
    & input {
      height: 50px;
    }
    & #availability {
      width: 170px;
    }
  }
`;
export const Reference = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
  margin-bottom: 35px;
  font-size: 10px;
  & select {
    height: inherit;
    width: 93px;
    border: 1px solid darkgray;
    outline: none;
    & option {
      font-size: 12px;
      outline: none;
    }
  }
  & input {
    margin: 0;
    width: 100%;
  }
  & svg {
    font-size: 30px;
    color: gray;
    margin-left: 5px;
    cursor: pointer;
  }
  @media screen and (min-width: 1024px) {
    height: fit-content;
    & select {
      height: 54px;
      width: 200px;
      padding-left: 10px;
      font-size: 15px;
      & option {
        font-size: 15px;
      }
    }
  }
`;
export const Characteristics = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 65px);
  grid-column-gap: 7px;
  grid-row-gap: 14px;
  margin-bottom: 35px;
  padding: 0;
  list-style: none;
  font-size: 10px;
  & li {
    display: flex;
    align-items: center;
    & input {
      height: auto;
      margin: 0 3px 0 0;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
    grid-template-columns: repeat(auto-fill, 105px);
    grid-column-gap: 85px;
    & li input {
      margin: 0 8px 0 0;
    }
  }
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 32px;
  border: none;
  border-radius: 4px;
  background: #eb5757;
  color: #f6f6f6;
  @media screen and (min-width: 768px) {
    width: 191px;
    height: 50px;
    margin: 0 auto;
    font-size: 15px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;
