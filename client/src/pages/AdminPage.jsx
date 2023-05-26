import React, { useState } from "react";
import { UseAdminBookster } from "../hooks/useAdminBookster";
import TableComponet from "../components/admin/TableComponet";

export default function AdminPage() {
  const [view, setView] = useState("user");
  const { isLoading, error, data } = UseAdminBookster(view);

  const handleClick = (e) => {
    setView(e.target.value);
  };

  return (
    <>
      <div>
        <button value="books" onClick={(e) => handleClick(e)}>
          Books
        </button>
        <button value="user" onClick={(e) => handleClick(e)}>
          Users
        </button>
        {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || <TableComponet data={data} view={view} />}
      </div>
    </>
  );
}
