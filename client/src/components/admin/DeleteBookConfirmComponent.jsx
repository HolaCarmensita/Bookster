/*
* 
 * Author Niklas Nguyen
 * 
 * date 23-05-31
a confirmation components for deleting a book
handleClick takes the data from the prop that contains the book and making a http request to the server with the book to delete
dispatch removes the book from an array that the reducer made
the cancel button just removes the book from the array
*/

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
