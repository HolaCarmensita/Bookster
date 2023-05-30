// import { useLocation } from "react-router-dom";
// import authService from "../../service/authService";
import memoryService from "../../service/memoryService";

function Button() {}
if (memoryService.getLocalValue("JWT_TOKEN") === null) {
  console.log("No auth");
} else {
  console.log("Auth");
}

export default Button;

//knapp om man är authoriserad eller inte = olika knappar
// om knappen är tryckt kör funktion som kollar auth, beroende på auth
