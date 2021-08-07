import React from 'react';
import { MdFace, MdVpnKey, MdEmail } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Hero, Main, SectionUpload, Form, Buttons, RadioInput } from './styles';
import backgroundHero from '../../assets/images/BackgroundRegister.png';
import whiteCircle from '../../assets/images/whiteCircle.png';
import Badge from '../../components/Badge';
import BackButton from '../../components/BackButton';
const Register = () => {
  return (
    <>
      <Hero>
        <img src={backgroundHero} alt="Register form" />
        <Badge icon={FaUserCircle} message="Register" />
      </Hero>
      <BackButton />
      <Main>
        <SectionUpload>
          <img src={whiteCircle} alt="User" />
          <input type="file" data-title="Upload photo" />
        </SectionUpload>
        <Form>
          <div>
            <MdFace />
            <label htmlFor="fname">Name:</label>
            <input type="text" id="fname" name="fname" />
          </div>
          <div>
            <MdFace />
            <label htmlFor="flastname">Last Name:</label>
            <input type="text" id="flastname" name="flastname" />
          </div>
          <div>
            <MdEmail />
            <label htmlFor="email">Email:</label>
            <input autoComplete="email" type="email" id="email" name="email" />
          </div>
          <div>
            <MdVpnKey />
            <label htmlFor="password">Password:</label>
            <input
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <RadioInput>
            <input type="radio" name="host" id="host" />
            <label htmlFor="host">Host</label>
            <input type="radio" name="guess" id="guess" />
            <label htmlFor="guess">Guess</label>
          </RadioInput>
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
