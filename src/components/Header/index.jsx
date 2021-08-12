import React from 'react';
import { HeaderBar, TextLogin, Container, UserPhoto, Heart, BurguerMenu, Section } from './styles';
import logo from '../../assets/images/Logo.svg';
import menu from '../../assets/images/Menu.svg';
import userPhoto from '../../assets/images/UserPhoto.png';
import heart from '../../assets/images/Heart.svg';
const Header = () => {
  return (
    <HeaderBar>
      <Container>
        <img src={logo} alt="Kumpel logo" />
        <Section>
          <Heart src={heart} alt="Menu" />
          <TextLogin>User name!</TextLogin>
          <UserPhoto src={userPhoto} alt="Menu" />
          <BurguerMenu src={menu} alt="Menu" />
        </Section>
      </Container>
    </HeaderBar>
  );
};
export default Header;
