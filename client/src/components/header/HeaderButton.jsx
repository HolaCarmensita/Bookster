import { useNavigate } from "react-router-dom";

function HeaderButton({ username }) {
  const navigate = useNavigate();

  const signOut = () => {
    console.log("logga ut");
  };

  const signIn = () => {
    window.location.reload(false);
  };

  return (
    <>
      {(username === undefined && (
        <button onClick={() => navigate("/") + signIn()}>Sign in</button>
      )) || <button onClick={() => navigate("/") + signOut()}>Sign out</button>}
    </>
  );
}

export default HeaderButton;
