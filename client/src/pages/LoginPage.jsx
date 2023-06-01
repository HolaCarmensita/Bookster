import React, { useState } from "react";
import FormInputfields from "../components/login&register/FormInputfields";
import FormButtons from "../components/login&register/FormButtons";
import { useNavigate } from "react-router";
import memoryService from "../service/memoryService";
import authService from "../service/authService";
import React, { useState } from "react";
import FormInputfields from "../components/login&register/FormInputfields";
import FormButtons from "../components/login&register/FormButtons";
import { useNavigate } from "react-router";
import memoryService from "../service/memoryService";
import authService from "../service/authService";

export default function LoginPage() {
  const navigate = useNavigate();
  const [userCredentail, setUserCredential] = useState(undefined);
  const [serverMsg, setServerMsg] = useState("");
  const [serverMsg, setServerMsg] = useState("");

  const handleSubmit = async (event, userCredentail, setServerMsg) => {
    event.preventDefault();

    const response = await authService.login(userCredentail);

    if (response.status >= 400) {
      const errorMsg = await response.json();
      setServerMsg(errorMsg.error);
      return false;
    } else {
      const data = await response.json();
      memoryService.saveLocalValue("JWT_TOKEN", data.accessToken);
      memoryService.saveLocalValue("JWT_TOKEN", data.accessToken);
      setServerMsg(data.message);
      setTimeout(() => navigate("/browser"), 1000);
      setTimeout(() => navigate("/browser"), 1000);
    }
  };

  // const headerBtn = () => {
  //   return <button>sign out</button>;
  // };

  return (
    <div className="formContainer">
      <form onSubmit={(event) => handleSubmit(event, userCredentail, setServerMsg, navigate)}>
        <h3 className="form-title">Login to Bookster</h3>
        <FormInputfields setUserCredential={setUserCredential} passwordType="password" />
        <p className="form-msg" data-testid="serverMsg">
          {serverMsg}
        </p>
        <FormButtons submitTxt="Log in" isHidding={false} navigateTo="/register" />
      </form>
    </div>
  );
}
