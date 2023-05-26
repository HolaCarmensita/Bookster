import React, { useReducer, useState } from "react";
import { UseAdminBookster } from "../hooks/useAdminBookster";
import TableComponet from "../components/admin/TableComponet";
import { useAdminReducer } from "../hooks/useAdminReducer";
import ConfirmationComponent from "../components/admin/ConfirmationComponent";

export default function AdminPage() {
  const [view, setView] = useState("user");
  const [item, dispatch] = useReducer(useAdminReducer, []);
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
        {item?.map((data, i) => (
          <ConfirmationComponent item={data} key={i} dispatch={dispatch} />
        ))}
        {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || <TableComponet data={data} view={view} dispatch={dispatch} />}
      </div>
    </>
  );
}
