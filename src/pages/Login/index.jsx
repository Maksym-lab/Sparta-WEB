import React from 'react';
import { navigate } from '@reach/router';
import LoginMutation from '../../containers/LoginMutation';
import LoginForm from '../../components/LoginForm';
const Login = () => {
  return (
    <LoginMutation>
      {(login, { loading, error }) => {
        const onSubmit = (variables) => {
          login({ variables }).then(({ data }) => {
            navigate('/');
          });
        };
        return <LoginForm disabled={loading} onSubmit={onSubmit} error={error} />;
      }}
    </LoginMutation>
  );
};
export default Login;
