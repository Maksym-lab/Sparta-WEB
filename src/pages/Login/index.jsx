import React, { useContext, useState } from 'react';
import { navigate } from '@reach/router';
import { Context } from '../../Context';
import LoginMutation from '../../containers/LoginMutation';
import LoginForm from '../../components/LoginForm';
import ErrorComponent from '../../components/Error';
const Login = () => {
  const { activateAuth } = useContext(Context);
  const [handleError, setHandleError] = useState(false);
  return (
    <LoginMutation>
      {(login, { loading, error }) => {
        const onSubmit = (variables) => {
          login({ variables }).then(({ data }) => {
            const { token, user } = data.kumpelLogin;
            const { id, group } = user;
            if (group.length === 0) {
              setHandleError(true);
              return;
            }
            const roleId = group[0].id;
            activateAuth(token, id, roleId);
            window.history.pushState(null, null, '/');
            window.location.reload();
            navigate('/');
          });
        };
        if (handleError) {
          return <ErrorComponent />;
        }
        return <LoginForm disabled={loading} onSubmit={onSubmit} error={error} />;
      }}
    </LoginMutation>
  );
};
export default Login;
