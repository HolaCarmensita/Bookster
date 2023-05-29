import { useLocation } from "react-router-dom";

function Button() {
  const location = useLocation();

  if (location.pathname === "/") {
    return <button>Sign out</button>;
  } else if (location.pathname === "/register") {
    return <button>Sign in</button>;
  }
}

export default Button;
