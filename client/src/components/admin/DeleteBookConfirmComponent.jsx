import React from "react";
import adminService from "../../service/adminService";

export default function DeleteBookConfirmComponent({ data, dispatch }) {
  const handleClick = () => {
    adminService.deleteBook(data);
    dispatch({ type: "clear-book", book: { ...data } });
  };
  return (
    <div>
      <h4>Delete book</h4>
      <p>Are you sure you with to Delete the book {data.title}</p>

      <button onClick={() => handleClick()}>Proceed</button>
      <button onClick={() => dispatch({ type: "clear-book", book: { ...data } })}>Cancel</button>
    </div>
  );
}
