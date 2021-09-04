import React from 'react';
import { Link } from '@reach/router';
import { MdLocalPhone, MdEdit, MdSearch, MdClose } from 'react-icons/md';
import {
  Section,
  Logo,
  CloseModal,
  Content,
  Grid,
  BlackBackground,
  Circle,
} from './styles';
import background from '../../assets/images/BGModal.png';
import logoKumpel from '../../assets/images/Logo.svg';
const Modal = () => {
  const imageBackgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
  };
  return (
    <BlackBackground>
      <Section style={imageBackgroundStyle}>
        <Logo src={logoKumpel} alt="Kumpel" />
        <CloseModal>
          <MdClose />
        </CloseModal>
        <Content>
          <h2>Do you want to find a roomie or offer accommodation?</h2>
          <Grid>
            <Link to="/register">
              <div>
                <Circle>
                  <MdEdit />
                </Circle>
                <p>Sign up</p>
              </div>
            </Link>
            <div>
              <Circle>
                <MdSearch />
              </Circle>
              <p>Search</p>
            </div>
            <div>
              <Circle>
                <MdLocalPhone />
              </Circle>
              <p>Contact</p>
            </div>
          </Grid>
          <Link to="/register">
            <button type="button">Register</button>
          </Link>
        </Content>
      </Section>
    </BlackBackground>
  );
};
export default Modal;
