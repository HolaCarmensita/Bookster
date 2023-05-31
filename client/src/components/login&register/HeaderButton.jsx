// import { useLocation } from "react-router-dom";
// import authService from "../../service/authService";
// import memoryService from "../../service/memoryService";
// import FormButtons from "./FormButtons";

function headerButton() {
  console.log("hej");

  return (
    <>
      <button>Sign out</button>
      <button>Sign in</button>
    </>
  );
}
// if (memoryService.getLocalValue("JWT_TOKEN") === null) {
//   console.log("No auth");
// } else {
//   console.log("Auth");
// }

export default headerButton;

//knapp om man är authoriserad eller inte = olika knappar
// om knappen är tryckt kör funktion som kollar auth, beroende på auth
