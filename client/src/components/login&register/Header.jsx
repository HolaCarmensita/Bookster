import Button from "./HeaderButton";

const webbAppName = "Bookster";

function Header({ username }) {
  return (
    <nav>
      <h1 className="bookster-header">{webbAppName}</h1>
      <p className="header-username">{username}</p>
      <Button />
    </nav>
  );
}

export default Header;
