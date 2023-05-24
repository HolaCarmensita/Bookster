import React, { useState } from "react";
import FormInputfields from "../components/login&register/FormInputfields";
import FormButtons from "../components/login&register/FormButtons";
export default function LoginPage() {
  const [userCredentail, setUserCredential] = useState(undefined);

  console.log(userCredentail);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <FormInputfields setUserCredential={setUserCredential} passwordType="text" />
      <FormButtons submitTxt="Sign in" isHidding={false} navigateTo="/register" />
    </form>
  );
}
