import React, { useContext } from 'react';
import { navigate } from '@reach/router';
import { Context } from '../../Context';
import LoginMutation from '../../containers/LoginMutation';
import LoginForm from '../../components/LoginForm';
const Login = () => {
  const { activateAuth } = useContext(Context);
  return (
    <LoginMutation>
      {(login, { loading, error }) => {
        const onSubmit = (variables) => {
          login({ variables }).then(({ data }) => {
            const { token } = data.kumpelLogin;
            activateAuth(token);
            navigate('/');
          });
        };
        return <LoginForm disabled={loading} onSubmit={onSubmit} error={error} />;
      }}
    </LoginMutation>
  );
};
export default Login;
