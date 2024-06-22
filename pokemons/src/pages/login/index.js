import React from "react";
import { useLoginForm } from "./hooks";
import pokeapiLogo from "../../assests/pokeapi.png";
import "./style.css";

const Login = () => {
  const {
    email,
    password,
    isFormValid,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  } = useLoginForm();

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src={pokeapiLogo} alt="PokeAPI Logo" className="pokeapi-logo" />
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          minLength={8}
        />
        <button type="submit" disabled={!isFormValid}>
          Acessar
        </button>
      </form>
    </div>
  );
};

export default Login;
