/**
 *
 * author Madelene Fasth
 *
 * date 23-06-01
 *
 * knapp om man är authoriserad eller inte = olika knappar, om knappen är tryckt kör funktion som kollar auth, beroende på auth
 *
 */

import { useState } from "react";
import memoryService from "../../service/memoryService";
import { useNavigate } from "react-router-dom";

function HeaderButton({ username }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const handleClick = (e) => {
    if (e.target.value === "logOut") {
      const msg = memoryService.removeLocalValue("JWT_TOKEN");
      setMessage(msg);
    } else {
      setMessage("you will be redirected");
    }

    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <>
      <p className="header-info">{message}</p>
      {(username === null && (
        <button className="headerBtn" value="logIn" onClick={(e) => handleClick(e)}>
          Sign in
        </button>
      )) || (
        <button className="headerBtn" value="logOut" onClick={(e) => handleClick(e)}>
          Sign out
        </button>
      )}
    </>
  );
}

export default HeaderButton;
