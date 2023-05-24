import React, { useState } from "react";
import Inputfield from "../components/login/Inputfield";
import Button from "../components/login/Button";

export default function LoginPage() {
  const [userCredentail, setUserCredential] = useState(undefined);

  console.log(userCredentail);

  return (
    <form>
      <h3>Login</h3>
      <Inputfield setUserCredential={setUserCredential} passwordType="text" />
      <Button submitTxt="Sign in" isHidding={false} />
    </form>
  );
}
