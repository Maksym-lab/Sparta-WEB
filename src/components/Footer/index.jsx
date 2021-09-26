import React from 'react';
import { Link } from '@reach/router';
import { FaWhatsapp, FaTwitterSquare } from 'react-icons/fa';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import { StyledFooter, SocialIcons, Links } from './styles';
const Footer = () => {
  return (
    <StyledFooter aria-label="Footer">
      <SocialIcons aria-label="Social Media">
        <FaWhatsapp aria-label="WhatsApp Link" tabIndex="0" />
        <IoLogoFacebook arial-label="Facebook Link" tabIndex="0" />
        <IoLogoInstagram aria-label="Instagram Link" tabIndex="0" />
        <FaTwitterSquare arial-label="Twitter Link" tabIndex="0" />
      </SocialIcons>
      <Links role="menu">
        <p><Link role="menuitem" to="/privacy" tabIndex="0">Notice of Privacy</Link></p>
        <p><Link role="menuitem" to="/about" tabIndex="0">About us</Link></p>
      </Links>
    </StyledFooter>
  );
};
export default Footer;
