import { useState } from "react";
import SearchComponent from "../components/search/SearchComponent";
import { UseQuaryBookster } from "../hooks/useQuaryBookster";
import TableComponet from "../components/table/TableComponet";
import authService from "../service/authService";
import { Navigate } from "react-router-dom";
import "../components/login&register/form.css";

function BrowsingPage() {
  const [quary, setQuary] = useState("");
  const [role] = useState(authService.getRole());
  const { isLoading, error, data } = UseQuaryBookster(quary);

  if (role === "ADMIN") {
    return <Navigate to="/admin" />;
  }

  return (
    <div>
      <SearchComponent setQuary={setQuary} />
      {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || <TableComponet data={data} role={role} />}
    </div>
  );
}
export default BrowsingPage;
