import React from 'react';
import { MdVpnKey, MdEmail } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Hero, Main, Form, InputContainer, Buttons } from './styles';
import backgroundHero from '../../assets/images/BackgroundRegister.png';
import Badge from '../../components/Badge';
import BackButton from '../../components/BackButton';
const Login = () => {
  return (
    <>
      <Hero>
        <img src={backgroundHero} alt="Login" />
        <Badge icon={FaUserCircle} message="Login" />
      </Hero>
      <BackButton />
      <Main>
        <Form>
          <InputContainer>
            <MdEmail />
            <input
              autoComplete="email"
              type="email"
              id="email"
              name="email"
              placeholder="Write your Email"
            />
          </InputContainer>
          <InputContainer>
            <MdVpnKey />
            <input
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
              placeholder="Write a password"
            />
          </InputContainer>
          <Buttons>
            <button type="button">Cancel</button>
            <button type="submit">Register</button>
          </Buttons>
        </Form>
      </Main>
    </>
  );
};
export default Login;
