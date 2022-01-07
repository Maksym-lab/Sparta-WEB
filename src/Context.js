import React, { createContext, useState } from 'react';
export const Context = createContext();
const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });
  const [userId, setUserId] = useState(window.sessionStorage.getItem('userId'));
  const [role, setRole] = useState(window.sessionStorage.getItem('role'));
  const value = {
    isAuth,
    userId,
    role,
    activateAuth: (token, userId, role) => {
      setIsAuth(true);
      setUserId(userId);
      setRole(role);
      window.sessionStorage.setItem('token', token);
      window.sessionStorage.setItem('userId', userId);
      window.sessionStorage.setItem('role', role);
    },
    removeAuth: () => {
      setIsAuth(false);
      setUserId(false);
      setRole(false);
      window.sessionStorage.removeItem('token');
      window.sessionStorage.removeItem('userId');
      window.sessionStorage.removeItem('role');
    },
  };
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};
export default {
  Provider,
  Consumer: Context.Consumer,
};
