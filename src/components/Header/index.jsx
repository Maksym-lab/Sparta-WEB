import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import { FiMenu, FiX } from 'react-icons/fi';
import { MdHome } from 'react-icons/md';
import {
  HeaderBar,
  TextLogin,
  Container,
  Heart,
  BurguerMenu,
  Section,
} from './styles';
import logo from '../../assets/images/Logo.svg';
import heart from '../../assets/images/Heart.svg';
import HeaderModal from '../HeaderModal';
import SearchBarHeader from '../SearchHeader';
import { Context } from '../../Context';
const Header = () => {
  const [headerModal, setHeaderModal] = useState(false);
  const { isAuth, removeAuth, role } = useContext(Context);
  const handleLogout = () => {
    removeAuth();
  };
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
            <SearchBarHeader />
            <Link to="/myfavorites" tabIndex="0">
              <Heart role="menuitem" src={heart} alt="Menu" />
            </Link>
            {
              !isAuth && (
                <Link to="/login">
                  <TextLogin role="menuitem" aria-label="Login" tabIndex="0">
                    Login
                  </TextLogin>
                </Link>
              )
            }
            {
              !isAuth && (
                <Link to="/register">
                  <TextLogin role="menuitem" aria-label="Register" tabIndex="0">
                    Register
                  </TextLogin>
                </Link>
              )
            }
            {
              isAuth && role === '1' && (
                <Link to="/addoffer">
                  <TextLogin role="menuitem" aria-label="Add Offer" tabIndex="0">
                    <MdHome />
                  </TextLogin>
                </Link>
              )
            }
            {
              isAuth && (
                <Link to="/">
                  <TextLogin role="menuitem" aria-label="Logout" tabIndex="0" onClick={handleLogout}>
                    Logout
                  </TextLogin>
                </Link>
              )
            }
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
