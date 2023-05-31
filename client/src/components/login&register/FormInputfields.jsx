/*
* 
 * Author Niklas Nguyen
 * 
 * date 23-05-31
this input componet is for login and register form
handleInputValue uses deconstruct to fill out the propertys value in credential using useState
setUserCredentail prop is in useEffect that updates every time credential changes and sends the data to its parent
passwordType prop is for changeing the type on input field depending if it should be a text for register or password login
 */

import { useEffect, useState } from "react";

export default function FormInputfield({ setUserCredential, passwordType }) {
  const [credential, setCredential] = useState({ username: "", password: "" });

  const handleInputValue = ({ name, value }) => {
    setCredential({ ...credential, [name]: value });
  };

  useEffect(() => {
    setUserCredential(credential);
  }, [credential, setUserCredential]);

  return (
    <>
      <label>username:</label>
      <input type="text" data-testid="username" placeholder="Type your username..." name="username" onChange={(e) => handleInputValue(e.target)} />

      <label>Password:</label>
      <input type={passwordType} data-testid="password" placeholder="Type your password..." name="password" onChange={(e) => handleInputValue(e.target)} />
    </>
  );
}
