import React from 'react';
import { Link } from '@reach/router';
import { FaWhatsapp, FaTwitterSquare } from 'react-icons/fa';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import { StyledFooter, SocialIcons, Links } from './styles';
const Footer = () => {
  return (
    <StyledFooter>
      <SocialIcons>
        <FaWhatsapp />
        <IoLogoFacebook />
        <IoLogoInstagram />
        <FaTwitterSquare />
      </SocialIcons>
      <Links>
        <p><Link to="/privacy">Notice of Privacy</Link></p>
        <p><Link to="/about">About us</Link></p>
      </Links>
    </StyledFooter>
  );
};
export default Footer;
