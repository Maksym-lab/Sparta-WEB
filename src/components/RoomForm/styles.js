import styled, { css } from 'styled-components';
const input = css`
  background: ${({ theme }) => theme.absoluteWhite};
  color: ${({ theme }) => theme.black};
  border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.size12};
  outline: none;
  margin-bottom: ${({ theme }) => theme.size34};
  height: ${({ theme }) => theme.size36};
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.size16};
    height: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size6});
  }
`;
export const Main = styled.main`
  max-width: ${({ theme }) => theme.maxWidthPublicationDesktop};;
  margin: ${({ theme }) => theme.size0} auto;
  background: ${({ theme }) => theme.white};
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
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    margin-top: ${({ theme }) => theme.size46};
  }
`;
export const Section = styled.section`
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    margin: ${({ theme }) => theme.size0} ${({ theme }) => theme.size26};
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.lightGray};
    border-radius: ${({ theme }) => theme.size8};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    max-width: ${({ theme }) => theme.maxWidthBorderDesktop};
    margin: ${({ theme }) => theme.size0} auto;
  }
`;
export const FileUploader = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  background: ${({ theme }) => theme.darkGray};
  color: ${({ theme }) => theme.white};
  & h5 {
    margin: ${({ theme }) => theme.size26} ${({ theme }) => theme.size0} ${({ theme }) => theme.size18};
    font-weight: ${({ theme }) => theme.regular};
    color: ${({ theme }) => theme.white};
  }
  & svg {
    display: block;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.lightGray};
  }
  & input {
    position: absolute;
    top: ${({ theme }) => theme.size0};
    width: ${({ theme }) => theme.pct100};
    height: ${({ theme }) => theme.pct100};
    outline: none;
    visibility: hidden;
    cursor: pointer;
    background-color: ${({ theme }) => theme.red};
    &:before {
      content: attr(data-title);
      position: absolute;
      top: ${({ theme }) => theme.size0};
      left: ${({ theme }) => theme.size0};
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: ${({ theme }) => theme.pct100};
      height: ${({ theme }) => theme.pct100};
      padding-top: 1.3rem;
      padding-bottom: 65px;
      visibility: visible;
    }
  }
  & p {
    margin-top: 90px;
    margin-bottom: 35px;
    font-size: 1.2rem;
    color: white;
  }
  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 140px);
    grid-column-gap: 10px;
    grid-row-gap: ${({ theme }) => theme.size8};
    justify-content: center;
    width: 100%;
    margin-top: 48px;
    margin-bottom: 20px;
    font-size: 12px;
    text-align: center;
    list-style: none;
    & li {
      display: flex;
      & svg {
        font-size: 20px;
        margin-right: 5px;
      }
    }
  }
  @media screen and (min-width: 590px) {
    & input:before {
      padding-bottom: 0;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    height: ${({ theme }) => theme.inputHeightTablet};
    border-radius: ${({ theme }) => theme.size6} ${({ theme }) => theme.size6} ${({ theme }) => theme.size0} ${({ theme }) => theme.size0};
    font-size: ${({ theme }) => theme.size18};
    & h5 {
      margin-bottom: ${({ theme }) => theme.size40};
      font-size: ${({ theme }) => theme.size18};
    }
    & svg {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.white};
    }
    & input:before {
      padding-top: ${({ theme }) => theme.size0};
      font-size: ${({ theme }) => theme.size18};
    }
    & ul {
      grid-template-columns: repeat(auto-fill,180px);
      width: 80%;
      margin-top: 40px;
      font-size: 16px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    height: ${({ theme }) => theme.inputHeightDesktop};
    margin-bottom: 4rem;
    & h5 {
      margin-top: ${({ theme }) => theme.size50};
      font-size: ${({ theme }) => theme.size26};
    }
    & svg {
      font-size: 3.7rem;
      color: ${({ theme }) => theme.lightGray};
    }
    & input:before {
      font-size: ${({ theme }) => theme.size26};
    }
    & ul {
      grid-template-columns: repeat(auto-fill, 200px);
      grid-column-gap: 115px;
      width: ${({ theme }) => theme.pct60};
      margin-top: 68px;
      font-size: 18px;
      & li {
        & svg {
          font-size: 27px;
        }
      }
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.size14} 19px ${({ theme }) => theme.size36};
  & label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${({ theme }) => theme.pct100};
    font-size: ${({ theme }) => theme.size12};
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.darkGray};
    margin-bottom: ${({ theme }) => theme.size18};
    & svg{
      color: ${({ theme }) => theme.lightGray};
    }
  }
  & input {
    height: ${({ theme }) => theme.size30};
    padding-left: ${({ theme }) => theme.size10};
    ${input}
  }
  & #availability {
    width: ${({ theme }) => theme.availabilityMobil};
    padding-left: ${({ theme }) => theme.size10};
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
  }
  & textarea {
    padding: ${({ theme }) => theme.size10};
    margin-bottom: ${({ theme }) => theme.size34};
    border-radius: 5px;
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    & label {
      font-size: ${({ theme }) => theme.size14};
      margin-bottom: ${({ theme }) => theme.size28};
    }
    & input, textarea {
      font-size: ${({ theme }) => theme.size12};
    }
    & #availability {
      width: ${({ theme }) => theme.availabilityTablet};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    & label {
      font-size: ${({ theme }) => theme.size24};
      margin-bottom: ${({ theme }) => theme.size20};
    }
    & input, textarea {
      font-size: ${({ theme }) => theme.size16};
    }
    & input {
      height: ${({ theme }) => theme.size50};
    }
    & #availability {
      width: ${({ theme }) => theme.availabilityDesktop};
    }
  }
`;
export const Reference = styled.div`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.size34};
  margin-bottom: ${({ theme }) => theme.size36};
  font-size: ${({ theme }) => theme.size10};
  & select {
    height: ${({ theme }) => theme.size36};
    width: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size42});
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
    border-radius: 5px 0 0 5px;
    outline: none;
    & option {
      font-size: ${({ theme }) => theme.size12};
      outline: none;
    }
  }
  & input {
    width: ${({ theme }) => theme.pct100};
    margin: ${({ theme }) => theme.size0};
    border-radius: 0 5px 5px 0;
  }
  & svg {
    font-size: ${({ theme }) => theme.size30};
    color: ${({ theme }) => theme.lightGray};
    margin-left: ${({ theme }) => theme.size6};;
    cursor: pointer;
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    height: fit-content;
    & select {
      height: calc(${({ theme }) => theme.size50} + 6px);
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    & select {
      height: ${({ theme }) => theme.size50};
      width: calc(${({ theme }) => theme.size100}* 2);
      padding-left: ${({ theme }) => theme.size10};
      font-size: ${({ theme }) => theme.size14};
      & option {
        font-size: ${({ theme }) => theme.size14};
      }
    }
  }
`;
export const ReferencesList = styled.ul`
  display: grid;
  grid-row-gap: 10px;
  margin-bottom: 30px;
  list-style: none;
  font-size: 13px;
 & li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34px;
  border-radius: 5px;
  padding: 0 5px;
  background: white;
  box-shadow: ${({ theme }) => theme.shadow1};
  & svg {
    margin: 5px;
    font-size: 16px;
  }
 }
 @media screen and (min-width: ${({ theme }) => theme.tablet}) {
  font-size: 14px;
    & li {
      height: 50px;
      padding: 0 10px;
      & svg {
        font-size: 18px;
      }
    }
 }
 @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: 15px;
    & li {
      & svg {
        margin: 9px;
        font-size: 20px;
      }
    }
 }
`;
export const Characteristics = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 65px);
    grid-column-gap: ${({ theme }) => theme.size8};
    grid-row-gap: ${({ theme }) => theme.size14};
    margin-bottom: ${({ theme }) => theme.size36};
    padding: ${({ theme }) => theme.size0};
    list-style: none;
    font-size: ${({ theme }) => theme.size10};
  & li {
    display: flex;
    align-items: center;
    & input {
      height: auto;
      margin: ${({ theme }) => theme.size0} 3px ${({ theme }) => theme.size0} ${({ theme }) => theme.size0};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.size14};
    grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.size100});
    grid-column-gap: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size36});
    & li input {
      margin: ${({ theme }) => theme.size0} ${({ theme }) => theme.size8} ${({ theme }) => theme.size0} ${({ theme }) => theme.size0};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size18};
  }
`;
export const Button = styled.button`
  width: ${({ theme }) => theme.pct100};
  height: ${({ theme }) => theme.size32};
  border: none;
  border-radius: ${({ theme }) => theme.size4};
  background: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    width: ${({ theme }) => theme.BtnM};
    height: ${({ theme }) => theme.size50};
    margin: ${({ theme }) => theme.size0} auto;
    font-size: ${({ theme }) => theme.size14};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size18};
  }
`;
