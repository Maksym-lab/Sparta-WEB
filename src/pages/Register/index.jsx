import React from 'react';
import { MdFace, MdVpnKey, MdEmail } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import {
  Hero,
  Main,
  Form,
  InputContainer,
  Buttons,
  RadioInput,
} from './styles';
import backgroundHero from '../../assets/images/BackgroundRegister.png';
import Badge from '../../components/Badge';
import BackButton from '../../components/BackButton';
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Hero>
        <img src={backgroundHero} alt="Register form" />
        <Badge icon={FaUserCircle} message="Register" />
      </Hero>
      <BackButton />
      <Main>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <MdFace />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Write your name *"
              required
              maxLength="40"
            />
          </InputContainer>
          <InputContainer>
            <MdFace />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Write your last name *"
              required
              maxLength="50"
            />
          </InputContainer>
          <InputContainer>
            <MdEmail />
            <input
              autoComplete="email"
              type="email"
              id="email"
              name="email"
              placeholder="Write your Email *"
              required
              minLength="7"
              maxLength="50"
            />
          </InputContainer>
          <InputContainer>
            <MdVpnKey />
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="Write your password *"
              required
              minLength="6"
              maxLength="40"
            />
          </InputContainer>
          <RadioInput>
            <input type="radio" name="user_rol" id="host" defaultChecked />
            <label htmlFor="host">Host</label>
            <input type="radio" name="user_rol" id="guess" />
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
