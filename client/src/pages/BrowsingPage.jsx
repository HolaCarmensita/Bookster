import { useEffect, useState } from "react";
import BrowsingHeader from "../components/Browsing/BrowsingHeader";
import SearchComponent from "../components/search/SearchComponent";
import { UseQuaryBookster } from "../hooks/useQuaryBookster";
import TableComponet from "../components/table/TableComponet";
import authService from "../service/authService";
import { useNavigate } from "react-router-dom";

function BrowsingPage() {
  const navigate = useNavigate();
  const [quary, setQuary] = useState("");
  const [role] = useState(authService.getRole());
  const { isLoading, error, data } = UseQuaryBookster(quary);
  useEffect(() => {
    if (role === "ADMIN") {
      navigate("/admin");
    }
  }, [role, navigate]);

  return (
    <div>
      <BrowsingHeader buttonChild="Browsing as a User" userName="Bertil" />
      <SearchComponent setQuary={setQuary} />
      {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || <TableComponet data={data} role={role} />}
    </div>
  );
}
export default BrowsingPage;
