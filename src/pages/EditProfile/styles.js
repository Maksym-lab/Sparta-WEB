import styled, { css } from 'styled-components';
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
export const Main = styled.main`
  margin: ${({ theme }) => theme.size0} auto;
  max-width: ${({ theme }) => theme.maxWidthPublicationDesktop};
  background: ${({ theme }) => theme.white};
`;
export const Hero = styled.figure`
  position: relative;
  margin: ${({ theme }) => theme.size32} ${({ theme }) => theme.size0} ${({ theme }) => theme.size75};
  & img {
    width: ${({ theme }) => theme.pct100};
    height: ${({ theme }) => theme.size100};
    object-fit: cover;
  }
  & span {
    position: absolute;
    bottom: -40px;
    right: ${({ theme }) => theme.size0};
    left: ${({ theme }) => theme.size0};
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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.size14} 19px ${({ theme }) => theme.size36};
  & textarea{
    margin-bottom:${({ theme }) => theme.size36};
    padding: ${({ theme }) => theme.size14};
  }
  & label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ theme }) => theme.size18};
    width: ${({ theme }) => theme.pct100};
    color: ${({ theme }) => theme.darkGray};
    font-size: ${({ theme }) => theme.size12};
    font-weight: ${({ theme }) => theme.bold};
    & svg {
      color: ${({ theme }) => theme.lightGray};
    }
  }
  & input#search{
    height: ${({ theme }) => theme.size50};
    margin-bottom: ${({ theme }) => theme.size50};
    padding-left: ${({ theme }) => theme.size14};
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    margin-top: 4rem;
    & label {
      margin-bottom: ${({ theme }) => theme.size28};
      font-size: ${({ theme }) => theme.size14};
    }
    & input, textarea {
      font-size: ${({ theme }) => theme.size12};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    & label {
      margin-bottom: ${({ theme }) => theme.size20};
      font-size: ${({ theme }) => theme.size24};
    }
    & input, textarea {
      font-size: ${({ theme }) => theme.size16};
    }
    & input {
      height: ${({ theme }) => theme.size50};
    }
  }
`;
export const InputContainer = styled.div`
position:relative;
display: flex;
flex-direction:column;
margin-bottom: ${({ theme }) => theme.size34};
width:${({ theme }) => theme.pct100};
& a{
  margin-top: ${({ theme }) => theme.size10};
  font-size: ${({ theme }) => theme.size10};
  @media screen and (min-width: ${({ theme }) => theme.tablet}){
    font-size: ${({ theme }) => theme.size12};
  }
}
& .password{
  margin-bottom:0px;
}
& svg{
  position: absolute;
  top: ${({ theme }) => theme.size10};
  left: ${({ theme }) => theme.size8};
  font-size: ${({ theme }) => theme.size16};
  color: ${({ theme }) => theme.darkGray};
  @media screen and (min-width: ${({ theme }) => theme.tablet}){
  top: ${({ theme }) => theme.size18};
  font-size: ${({ theme }) => theme.size20};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}){
  top: ${({ theme }) => theme.size16};
  }
}
& input {
    padding-left: ${({ theme }) => theme.size30};
    width:${({ theme }) => theme.pct100};
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
export const HalfSection = styled.div`
  display: grid;
  grid-template-columns:60% 40%;
`;
export const Phone = styled.div`
  display:flex;
  flex-direction:column;
`;
export const Birth = styled.div`
  display:flex;
  flex-direction:column;
`;
export const Button = styled.button`
  margin-top: ${({ theme }) => theme.size50};
  margin-bottom: ${({ theme }) => theme.size100};
  border: none;
  border-radius: ${({ theme }) => theme.size4};
  width: ${({ theme }) => theme.pct100};
  height: ${({ theme }) => theme.size32};
  background: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    margin: ${({ theme }) => theme.size0} auto;
    width: ${({ theme }) => theme.BtnM};
    height: ${({ theme }) => theme.size50};
    font-size: ${({ theme }) => theme.size14};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size18};
  }
`;
