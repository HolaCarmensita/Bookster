import { useState } from "react";
import Button from "./HeaderButton";

const webbAppName = "Bookster";

function Header({ username }) {
  // const [location,setLocation] = useState(global.window.location.pathname);
  const location = global.window.location.pathname;
  return (
    <nav>
      <h1 className="bookster-header">{webbAppName}</h1>
      {(location === "/" && <></>) || (location === "/register" && <></>) || (username === undefined && <p>Guest</p>) || (
        <p className="header-username">{username}</p>
      )}

      {(location === "/" && <></>) || (location === "/register" && <></>) || <Button username={username} />}
    </nav>
  );
}

export default Header;
