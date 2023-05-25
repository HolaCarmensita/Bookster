import React, { useState } from "react";
import FormInputfields from "../components/login&register/FormInputfields";
import FormButtons from "../components/login&register/FormButtons";
import authService from "../service/authService";
import memoryService from "../service/memoryService";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [userCredentail, setUserCredential] = useState(undefined);
  const [serverMsg, setServerMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await authService.login(userCredentail);

    if (response.status >= 400) {
      const errorMsg = await response.json();
      setServerMsg(errorMsg.error);
    } else {
      const data = await response.json();
      memoryService.saveLocalValue("JWT_TOKEN", data.accessToken);
      setServerMsg(data.message);
      setTimeout(() => <Navigate to="/browser" />, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <FormInputfields setUserCredential={setUserCredential} passwordType="text" />
      <p>{serverMsg}</p>
      <FormButtons submitTxt="Sign in" isHidding={false} navigateTo="/register" />
    </form>
  );
}
