import React, { useState } from 'react';
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
import Badge from '../Badge';
import BackButton from '../BackButton';
import useInputValue from '../../hooks/useInputValue';
const RegisterForm = ({ disabled, onSubmit }) => {
  const [firstName, setFirstName] = useInputValue('firstName');
  const [lastName, setLastName] = useInputValue('lastName');
  const [email, setEmail] = useInputValue('email');
  const [password, setPassword] = useInputValue('password');
  const [role, setRole] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const crearInputs = (form) => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRole('');
    setErrorMessage('');
    form.reset();
  };
  const addRole = (e) => {
    setRole(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      setErrorMessage('You must select a role');
      return;
    }
    onSubmit({
      email: email.value.toLowerCase(),
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
      role,
    });
    crearInputs(e.target);
    window.history.back();
  };
  const handleCancel = () => {
    window.history.back();
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
              {...firstName}
              placeholder="Write your name *"
              required
              maxLength="40"
              disabled={disabled}
            />
          </InputContainer>
          <InputContainer>
            <MdFace />
            <input
              type="text"
              {...lastName}
              placeholder="Write your last name *"
              required
              maxLength="50"
              disabled={disabled}
            />
          </InputContainer>
          <InputContainer>
            <MdEmail />
            <input
              autoComplete="email"
              type="email"
              {...email}
              placeholder="Write your Email *"
              required
              minLength="7"
              maxLength="50"
              disabled={disabled}
            />
          </InputContainer>
          <InputContainer>
            <MdVpnKey />
            <input
              type="password"
              {...password}
              autoComplete="current-password"
              placeholder="Write your password *"
              required
              minLength="6"
              maxLength="40"
              disabled={disabled}
            />
          </InputContainer>
          <RadioInput>
            <input
              type="radio"
              name="user_rol"
              id="host"
              value="1"
              onChange={addRole}
              disabled={disabled}
            />
            <label htmlFor="host">Host</label>
            <input
              type="radio"
              name="user_rol"
              id="guess"
              value="2"
              onChange={addRole}
              disabled={disabled}
            />
            <label htmlFor="guess">Guess</label>
          </RadioInput>
          <Buttons>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="submit">Register</button>
          </Buttons>
          {errorMessage && <p>{errorMessage}</p>}
        </Form>
      </Main>
    </>
  );
};
export default RegisterForm;
