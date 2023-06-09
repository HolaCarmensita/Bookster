import React, { useReducer, useState } from "react";
import { UseQuaryBookster } from "../hooks/useQuaryBookster";
import TableComponet from "../components/table/TableComponet";
import { useAdminReducer } from "../hooks/useAdminReducer";
import ConfirmRouterComponent from "../components/admin/ConfirmRouterComponent";
import AddBookComponent from "../components/admin/AddBookComponent";
import SearchComponent from "../components/search/SearchComponent";
import authService from "../service/authService";
import { Navigate } from "react-router-dom";
import "./navbar.css";

export default function AdminPage({ test }) {
  const [view, setView] = useState("books");
  const [quary, setQuary] = useState("");
  const [addBook, setAddBook] = useState(false);
  const [item, dispatch] = useReducer(useAdminReducer, []);
  const { isLoading, error, data } = UseQuaryBookster(quary);
  const [role] = useState(authService.getRole);

  if (role !== "ADMIN" && test === undefined) {
    return <Navigate to="/" />;
  }

  const handleClick = (e) => {
    setQuary(e.target.value);
    setView(e.target.value);
  };

  return (
    <>
      <div className="navbar">
        <button className="books" value="books" data-testid="viewBookBtn" onClick={(e) => handleClick(e)}>
          Books
        </button>

        <button className="user" data-testid="viewUserBtn" value="user" onClick={(e) => handleClick(e)}>
          Users
        </button>

        {view === "books" && (
          <button className="addBook" onClick={() => setAddBook(true)}>
            Add Book
          </button>
        )}

        {(view === "books" && <SearchComponent setQuary={setQuary} view={view} />) || null}
      </div>

      <div className="card-container">
        {addBook && <AddBookComponent isOpen={setAddBook} />}
        {item?.map((data, i) => (
          <ConfirmRouterComponent item={data} key={i} dispatch={dispatch} />
        ))}
      </div>

      <div className="tableAdmin">
        {(error && <p>404 could not found</p>) || (isLoading && <p>loading...</p>) || (
          <TableComponet data={data} view={view} dispatch={dispatch} role="ADMIN" />
        )}
      </div>
    </>
  );
}
