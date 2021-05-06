import styled from 'styled-components';
export const HeaderBar = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(38, 37, 38, 1);
  -moz-box-shadow: 0px 0px 8px 0px rgba(38, 37, 38, 1);
  box-shadow: 0px 0px 8px 0px rgba(38, 37, 38, 1);
  width: 100%;
  max-width: 1920px;
  height: 32px;
  background: #262526;
  img {
    margin-left: 15px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
`;
export const Heart = styled.img`
  margin-right: 8px;
  width: 12px;
  height: 12px;
`;
export const TextLogin = styled.p`
  margin-right: 8px;
  font-size: 12px;
  color: white;
`;
export const UserPhoto = styled.img`
  margin-right: 8px;
  width: 27px;
  height: 27px;
`;
