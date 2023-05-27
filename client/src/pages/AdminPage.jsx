import React, { useReducer, useState } from "react";
import { UseQuaryBookster } from "../hooks/useQuaryBookster";
import TableComponet from "../components/table/TableComponet";
import { useAdminReducer } from "../hooks/useAdminReducer";
import ConfirmRouterComponent from "../components/admin/ConfirmRouterComponent";
import AddBookComponent from "../components/admin/AddBookComponent";
import SearchComponent from "../components/search/SearchComponent";

export default function AdminPage() {
  const [view, setView] = useState("books");
  const [quary, setQuary] = useState("");
  const [addBook, setAddBook] = useState(false);
  const [item, dispatch] = useReducer(useAdminReducer, []);
  const { isLoading, error, data } = UseQuaryBookster(quary);
  console.log(item);

  const handleClick = (e) => {
    setQuary(e.target.value);
    setView(e.target.value);
  };

  return (
    <>
      <div>
        <SearchComponent setQuary={setQuary} />
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
        {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || (
          <TableComponet data={data} view={view} dispatch={dispatch} role="ADMIN" />
        )}
      </div>
    </>
  );
}
