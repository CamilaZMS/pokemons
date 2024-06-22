import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = useCallback((email, password) => {
    if (email && password.length >= 8) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, []);

  const handleEmailChange = useCallback(
    (event) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      validateForm(newEmail, password);
    },
    [password, validateForm]
  );

  const handlePasswordChange = useCallback(
    (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
      validateForm(email, newPassword);
    },
    [email, validateForm]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!isFormValid) {
        return;
      }
      navigate("/pokemons");
    },
    [isFormValid, navigate]
  );

  return {
    email,
    password,
    isFormValid,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  };
};
