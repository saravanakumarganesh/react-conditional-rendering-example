import React from 'react';

const AuthButton = (props) => {
  const { isLoggedIn } = props;

  switch (isLoggedIn) {
    case true:
      return <button>Logout</button>;
    case false:
      return <button>Login</button>;
    default:
      return null;
  }
};
export default AuthButton;
