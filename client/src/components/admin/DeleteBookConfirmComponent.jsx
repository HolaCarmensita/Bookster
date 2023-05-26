import React from "react";

export default function DeleteBookConfirmComponent({ data, dispatch }) {
  return (
    <div>
      <h4>Delete book</h4>
      <p>Are you sure you with to Delete the book {data.title}</p>

      <button>Proceed</button>
      <button onClick={() => dispatch({ type: "clear-book", book: { ...data } })}>Cancel</button>
    </div>
  );
}
