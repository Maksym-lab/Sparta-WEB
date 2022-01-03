import React, { createContext, useState } from 'react';
export const Context = createContext();
const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token');
  });
  const [userId, setUserId] = useState(window.sessionStorage.getItem('userId'));
  const [role, setRole] = useState(window.sessionStorage.getItem('role'));
  const [name, setName] = useState(window.sessionStorage.getItem('name'));
  const value = {
    isAuth,
    userId,
    role,
    name,
    activateAuth: (token, userId, role, name) => {
      setIsAuth(true);
      setUserId(userId);
      setRole(role);
      setName(name);
      window.sessionStorage.setItem('token', token);
      window.sessionStorage.setItem('userId', userId);
      window.sessionStorage.setItem('role', role);
      window.sessionStorage.setItem('name', name);
    },
    removeAuth: () => {
      setIsAuth(false);
      setUserId(false);
      setRole(false);
      setName(false);
      window.sessionStorage.removeItem('token');
      window.sessionStorage.removeItem('userId');
      window.sessionStorage.removeItem('role');
      window.sessionStorage.removeItem('name');
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
