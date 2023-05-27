import React, { useReducer, useState } from "react";
import { UseAdminBookster } from "../hooks/useAdminBookster";
import TableComponet from "../components/admin/TableComponet";
import { useAdminReducer } from "../hooks/useAdminReducer";
import ConfirmRouterComponent from "../components/admin/ConfirmRouterComponent";
import AddBookComponent from "../components/admin/AddBookComponent";

export default function AdminPage() {
  const [view, setView] = useState("user");
  const [addBook, setAddBook] = useState(false);
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
        {view === "books" && <button onClick={() => setAddBook(true)}>Add Book</button>}
        {addBook && <AddBookComponent isOpen={setAddBook} />}
        {item?.map((data, i) => (
          <ConfirmRouterComponent item={data} key={i} dispatch={dispatch} />
        ))}
        {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || <TableComponet data={data} view={view} dispatch={dispatch} />}
      </div>
    </>
  );
}
