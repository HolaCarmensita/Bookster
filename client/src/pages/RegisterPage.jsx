import React, { useState } from "react";
import FormInputfields from "../components/login&register/FormInputfields";
import FormButtons from "../components/login&register/FormButtons";
import authService from "../service/authService";
import { Navigate } from "react-router-dom";

export default function RegisterPage() {
  const [userCredentail, setUserCredential] = useState(undefined);
  const [serverMsg, setServerMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userCredentail);

    const response = await authService.register(userCredentail);

    if (response.status >= 400) {
      const errorMsg = await response.json();
      setServerMsg(errorMsg.error);
    } else {
      const serverMsg = await response.json();
      setServerMsg(serverMsg.message);
      setTimeout(() => <Navigate to="/" />, 1000);
    }
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <h3>Register</h3>
      <FormInputfields
        setUserCredential={setUserCredential}
        passwordType="text"
      />
      <p>{serverMsg}</p>
      <FormButtons submitTxt="Register" isHidding={true} navigateTo="/" />
    </form>
  );
}
