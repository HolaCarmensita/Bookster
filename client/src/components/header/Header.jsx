import Button from "./HeaderButton";
import "./Header.css";
import { useEffect, useState } from "react";
import authService from "../../service/authService";
import { useLocation } from "react-router-dom";

function Header() {
  const [username, setUsername] = useState(null);
  const [path, setPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
    setUsername(authService.getUsername());
  }, [location]);

  return (
    <nav className="header">
      {(path === "/" && <></>) || (path === "/register" && <></>) || <p className="header-username">Welcome {(username === null && "Guest") || username}</p>}
      <h1 className="header-title">Bookster</h1>

      {(path === "/" && <></>) || (path === "/register" && <></>) || <Button username={username} />}
    </nav>
  );
}

export default Header;
