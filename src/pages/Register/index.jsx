import React from 'react';
import { Hero, RedPhoto, Main, SectionUpload, Form, Buttons } from './styles';
import backgroundHero from '../../assets/images/BackgroundRegister.png';
import pictureRed from '../../assets/images/RedPhoto.png';
import whiteCircle from '../../assets/images/whiteCircle.png';
import FormFaceIcon from '../../assets/images/FormFace.svg';
import FormEmailIcon from '../../assets/images/FormEmail.svg';
import FormPassIcon from '../../assets/images/FormPass.svg';
const Register = () => {
  return (
    <>
      <Hero>
        <img src={backgroundHero} alt="Register form" />
      </Hero>
      <RedPhoto>
        <img src={pictureRed} alt="Register form" />
        <h1>Register</h1>
      </RedPhoto>
      <Main>
        <SectionUpload>
          <img src={whiteCircle} alt="User" />
          <input type="file" data-title="Upload photo" />
        </SectionUpload>
        <Form>
          <div>
            <img src={FormFaceIcon} alt="Name form" />
            <label htmlFor="fname">Name:</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div>
            <img src={FormFaceIcon} alt="Last Name form" />
            <label htmlFor="flastname">Last Name:</label>
            <input type="text" id="flastname" name="flastname" />
          </div>
          <div>
            <img src={FormEmailIcon} alt="Last Name form" />
            <label htmlFor="email">Email:</label>
            <input autoComplete="email" type="email" id="email" name="email" />
          </div>
          <div>
            <img src={FormPassIcon} alt="Last Name form" />
            <label htmlFor="password">Password:</label>
            <input
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <input type="radio" name="host" id="host" />
          <label htmlFor="host">Host</label>
          <input type="radio" name="guess" id="guess" />
          <label htmlFor="guess">Guess</label>
          <Buttons>
            <button type="button">Cancel</button>
            <button type="submit">Register</button>
          </Buttons>
        </Form>
      </Main>
    </>
  );
};
export default Register;
