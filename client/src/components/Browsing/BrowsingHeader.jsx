import SignInOutButton from "./SignInOutButton";

function BrowsingHeader({ buttonChild }, { userName }) {
  const borderStyle = {
    border: "2px solid green",
    width: "40%",
    listStyleType: "none",
  };

  return (
    <div style={borderStyle}>
      <h2>{buttonChild}</h2>
      <h3>Browsin as {userName}</h3>
      <SignInOutButton />
    </div>
  );
}
export default BrowsingHeader;
