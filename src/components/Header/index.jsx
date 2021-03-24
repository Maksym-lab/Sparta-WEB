import React from 'react';
import { HeaderBar, TextLogin, Container, UserPhoto, Heart } from './styles';
import logo from '../../assets/images/Logo.svg';
import menu from '../../assets/images/Menu.svg';
import userPhoto from '../../assets/images/UserPhoto.png';
import heart from '../../assets/images/Heart.svg';
const Header = () => {
  return (
    <HeaderBar>
      <img src={logo} alt="Kumpel logo" />
      <Container>
        <Heart src={heart} alt="Menu" />
        <TextLogin>User name!</TextLogin>
        <UserPhoto src={userPhoto} alt="Menu" />
        <img src={menu} alt="Menu" />
      </Container>
    </HeaderBar>
  );
};
export default Header;
