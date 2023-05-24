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
      <input type="text" placeholder="Type your username..." onChange={(e) => handleInputValue(e.target)} />

      <label>Password:</label>
      <input type={passwordType} placeholder="Type your password..." name="password" onChange={(e) => handleInputValue(e.target)} />
    </>
  );
}
