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
      <HeaderModal
        role="menu"
        closeModal={headerModal}
        changeModal={setHeaderModal}
      />
      <HeaderBar aria-label="Header">
        <Container role="banner">
          <Link to="/" tabIndex="0">
            <img src={logo} alt="Kumpel logo" className="logo" />
          </Link>
          <Section role="menu" tabIndex="-1">
            <Link to="/myFavorites" tabIndex="0">
              <Heart role="menuitem" src={heart} alt="Menu" />
            </Link>
            <TextLogin role="menuitem" aria-label="User Name" tabIndex="0">
              User name!
            </TextLogin>
            <UserPhoto role="img" src={userPhoto} alt="Menu for Mobil" />
            <BurguerMenu
              aria-modal="true"
              onClick={() => setHeaderModal(!headerModal)}
              tabIndex="0"
            >
              {headerModal ? <FiX /> : <FiMenu />}
            </BurguerMenu>
          </Section>
        </Container>
      </HeaderBar>
    </>
  );
};
export default Header;
