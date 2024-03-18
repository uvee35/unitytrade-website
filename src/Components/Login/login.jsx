// In login.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogIn = () => {
  // Component logic and JSX here
};

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LogIn; // Export LogIn as the default export
