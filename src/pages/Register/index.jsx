import React from 'react';
import { navigate } from '@reach/router';
import RegisterMutation from '../../containers/RegisterMutation';
import Error from '../../components/Error';
import RegisterForm from '../../components/RegisterForm';
const Register = () => {
  return (
    <RegisterMutation>
      {(register, { loading, error }) => {
        const onSubmit = (variables) => {
          register({ variables }).then(({ data }) => {
            return navigate('/login');
          });
        };
        if (error) return <Error />;
        return <RegisterForm disabled={loading} onSubmit={onSubmit} />;
      }}
    </RegisterMutation>
  );
};
export default Register;
