import { useState } from "react";
import BrowsingHeader from "../components/Browsing/BrowsingHeader";
import SearchComponent from "../components/search/SearchComponent";
import { UseQuaryBookster } from "../hooks/useQuaryBookster";
import TableComponet from "../components/table/TableComponet";

function BrowsingPage() {
  const [quary, setQuary] = useState("");
  const { isLoading, error, data } = UseQuaryBookster(quary);

  return (
    <div>
      <BrowsingHeader buttonChild="Browsing as a User" userName="Bertil" />
      <SearchComponent setQuary={setQuary} />
      {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || <TableComponet data={data} role="" />}
    </div>
  );
}
export default BrowsingPage;
