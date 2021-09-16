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
        <BackgroundModal onClick={() => changeModal(!closeModal)}>
          <Modal>
            <Profile>
              <img src={ImageHeaderModalTest} alt="Robert" />
              <p>Hello Robert!</p>
            </Profile>
            <Options>
              <Link to="/">
                <p>Home</p>
              </Link>
              <hr />
              <Link to="/favorites">
                <p>
                  {' '}
                  <BsHeartFill /> My Favorites
                </p>
              </Link>
              <hr />
              <Link to="/editprofile">
                <p>Edit Profile</p>
              </Link>
              <hr />
            </Options>
            <Footer>
              <p>Privacy Policy</p>
              <div>
                <FaWhatsapp />
                <IoLogoFacebook />
                <IoLogoInstagram />
                <FaTwitterSquare />
              </div>
            </Footer>
          </Modal>
        </BackgroundModal>
      )}
    </>
  );
};
export default HeaderModal;
