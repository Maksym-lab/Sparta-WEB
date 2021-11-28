import React from 'react';
import { Link } from '@reach/router';
import { BsHeartFill } from 'react-icons/bs';
import { FaWhatsapp, FaTwitterSquare } from 'react-icons/fa';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import { BackgroundModal, Modal, Profile, Options, Footer } from './styles';
import ImageHeaderModalTest from '../../assets/images/ImageHeaderModalTest.png';
const HeaderModal = ({ closeModal, changeModal }) => {
  return (
    <>
      {closeModal && (
        <BackgroundModal
          onClick={() => changeModal(!closeModal)}
          aria-label="Background"
          tabIndex="0"
        >
          <Modal role="navigation">
            <Profile role="group">
              <img src={ImageHeaderModalTest} alt="Robert" />
              <p title="User profile name">Hello Robert!</p>
            </Profile>
            <Options role="menu">
              <Link role="menuitem" aria-label="Home" tabIndex="0" to="/">
                <p title="home">Home</p>
              </Link>
              <hr title="Home" />
              <Link
                role="menuitem"
                aria-label="My favorites"
                tabIndex="0"
                to="/myfavorites"
              >
                <p title="My favorites">
                  <BsHeartFill aria-label="Heart icon" /> My Favorites
                </p>
              </Link>
              <hr title="My favorites" />
              <Link
                role="menuitem"
                aria-label="Edit profile"
                tabIndex="0"
                to="/editprofile"
              >
                <p title="Edit profile">Edit Profile</p>
              </Link>
              <hr title="Edit profile" />
            </Options>
            <Footer role="group">
              <p title="Privacy Policy">Privacy Policy</p>
              <div role="group" aria-label="Social Media">
                <a
                  href="http:
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <IoLogoFacebook aria-label="Facebook" />
                <IoLogoInstagram aria-label="Instagram" />
                <FaTwitterSquare aria-label="Twitter" />
              </div>
            </Footer>
          </Modal>
        </BackgroundModal>
      )}
    </>
  );
};
export default HeaderModal;
