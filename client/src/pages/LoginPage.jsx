import React, { useState } from "react";
import Inputfield from "../components/login&register/Inputfield";
import Button from "../components/login&register/Button";

export default function LoginPage() {
  const [userCredentail, setUserCredential] = useState(undefined);

  return (
    <form>
      <h3>Login</h3>
      <Inputfield setUserCredential={setUserCredential} passwordType="text" />
      <Button submitTxt="Sign in" isHidding={false} />
    </form>
  );
}
