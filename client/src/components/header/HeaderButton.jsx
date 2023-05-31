// import { useLocation } from "react-router-dom";
// import authService from "../../service/authService";
// import memoryService from "../../service/memoryService";
// import FormButtons from "./FormButtons";

function headerButton({ username }) {
  return <>{(username === undefined && <button>Sign in</button>) || <button>Sign out</button>}</>;
}
// if (memoryService.getLocalValue("JWT_TOKEN") === null) {
//   console.log("No auth");
// } else {
//   console.log("Auth");
// }

export default headerButton;

//knapp om man är authoriserad eller inte = olika knappar
// om knappen är tryckt kör funktion som kollar auth, beroende på auth
