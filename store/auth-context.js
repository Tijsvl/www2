import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  userName: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  let storedToken = null;
  let storedUserName = null;
  let storedExpirationDate = null;

  if (typeof window !== 'undefined') {
    storedToken = localStorage.getItem('token');
    storedUserName = localStorage.getItem('UserName');
    storedExpirationDate = localStorage.getItem('expirationTime');
  }

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('expirationTime');
    }
    return null;
  }

  return {
    token: storedToken,
    userName: storedUserName,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) initialToken = tokenData.token;

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('expirationTime');
    logoutTimer && clearTimeout(logoutTimer);
  }, []);

  const loginHandler = (token, userName = 'Welcome', expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('userName', userName);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userName: 'info@tijsvl.net',
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
