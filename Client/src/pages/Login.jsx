import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/register">REgister Page</Link>
    </div>
  );
};

export default Login;