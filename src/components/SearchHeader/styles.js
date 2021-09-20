import styled from 'styled-components';
export const Container = styled.div`
  margin:auto;
  margin-right:${({ theme }) => theme.size8};;
  text-align:center;
`;
export const Form = styled.form`
  display:inline;
  border-radius: 8em;
  border: ${({ theme }) => theme.border} solid rgba(255, 255, 255, 0.1);;
  padding:0.3em;
  font-size:1em;
  @media(max-width:425px){
    padding:2px;
  }
#search{
  border:${({ theme }) => theme.size0};
  width:${({ theme }) => theme.size0};
  opacity:${({ theme }) => theme.size0};
  outline:none;
  background-color: transparent;
  transition:all 0.2s ease-out;
}
#search:focus{
  width:200px;
  padding-left: ${({ theme }) => theme.size8};;
  opacity:1;
  color: ${({ theme }) => theme.white};
}
label{
  display:inline-block;
  position: relative;
  top:${({ theme }) => theme.size4};;
  & svg{
    color:white;
    font-size:${({ theme }) => theme.fontSize18};;
  }
}
`;
