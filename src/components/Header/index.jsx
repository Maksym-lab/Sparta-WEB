import React, { useState } from 'react';
import { Link } from '@reach/router';
import { FiMenu, FiX } from 'react-icons/fi';
import {
  HeaderBar,
  TextLogin,
  Container,
  UserPhoto,
  Heart,
  BurguerMenu,
  Section,
} from './styles';
import logo from '../../assets/images/Logo.svg';
import userPhoto from '../../assets/images/UserPhoto.png';
import heart from '../../assets/images/Heart.svg';
import HeaderModal from '../HeaderModal';
const Header = () => {
  const [headerModal, setHeaderModal] = useState(false);
  return (
    <>
      <HeaderModal closeModal={headerModal} changeModal={setHeaderModal} />
      <HeaderBar>
        <Container>
          <Link to="/">
            <img src={logo} alt="Kumpel logo" />
          </Link>
          <Section>
            <Heart src={heart} alt="Menu" />
            <TextLogin>User name!</TextLogin>
            <UserPhoto src={userPhoto} alt="Menu" />
            <BurguerMenu onClick={() => setHeaderModal(!headerModal)}>
              {headerModal ? <FiX /> : <FiMenu />}
            </BurguerMenu>
          </Section>
        </Container>
      </HeaderBar>
    </>
  );
};
export default Header;
