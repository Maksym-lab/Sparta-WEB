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
            const { token, user } = data.kumpelLogin;
            const { id, group } = user;
            const roleId = group[0].id;
            activateAuth(token, id, roleId);
            navigate('/');
          });
        };
        return <LoginForm disabled={loading} onSubmit={onSubmit} error={error} />;
      }}
    </LoginMutation>
  );
};
export default Login;
