import React, { useState } from "react";
import Inputfield from "../components/login/Inputfield";

export default function LoginPage() {
  const [userCredentail, setUserCredential] = useState(undefined);

  console.log(userCredentail);

  return (
    <form>
      <h3>Login</h3>
      <Inputfield setUserCredential={setUserCredential} passwordType="text" />
    </form>
  );
}
