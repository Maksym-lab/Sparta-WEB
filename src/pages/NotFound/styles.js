import styled, { css } from 'styled-components';
const flex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Hero = styled.section`
  position: relative;
  margin-top: ${({ theme }) => theme.pct20};
  margin-left: auto;
  margin-right: auto;
  width: ${({ theme }) => theme.pct80};
  box-sizing:border-box;
  max-width:355px;
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}){
    margin-top: calc(${({ theme }) => theme.pct10} / 1.5);
  } 
`;
export const Illustration = styled.div`
  position:relative;
  display:flex;
  justify-content:flex-end;
  & img{
    right: ${({ theme }) => theme.size0};
    width: ${({ theme }) => theme.pct70};
  }
`;
export const Page = styled.div`
  position: absolute;
  z-index: -1;
  left: ${({ theme }) => theme.size0};
  bottom: ${({ theme }) => theme.size16};
  box-shadow: ${({ theme }) => theme.shadow1};
  border: none;
  border-radius: ${({ theme }) => theme.size16};
  width: 90%;
  height: ${({ theme }) => theme.pct40};
  width: ${({ theme }) => theme.pct90};
  height: ${({ theme }) => theme.pct80};
  background: #4080FE;
& div{
  position:relative;
  top:6%;
  left:6%;
  color: ${({ theme }) => theme.white};
  font-size:${({ theme }) => theme.size12};
}
& hr{
  position:relative;
  top:${({ theme }) => theme.pct10};
  border: ${({ theme }) => theme.borderB} solid ${({ theme }) => theme.white};
}
& h1{
  position: absolute;
  bottom:${({ theme }) => theme.pct10};
  left:6%;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.size75};;
}
`;
export const Description = styled.div`
  ${flex}
  margin-top: ${({ theme }) => theme.size50};
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
    font-size:16px;
  }
`;
export const Button = styled.button`
  ${flex}
  margin-top: ${({ theme }) => theme.size24};
  border: none;
  border-radius: ${({ theme }) => theme.size4};
  width: ${({ theme }) => theme.pct100};
  height: ${({ theme }) => theme.size32};
  background: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.white};
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    margin: ${({ theme }) => theme.size50} auto;
    width: ${({ theme }) => theme.BtnM};
    height: ${({ theme }) => theme.size50};
    font-size: ${({ theme }) => theme.size14};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size18};
  }
`;
