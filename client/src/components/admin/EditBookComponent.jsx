import React, { useState } from "react";
import adminService from "../../service/adminService";

export default function EditBookComponent({ data, dispatch }) {
  const [book, setBook] = useState({ title: "", author: "", quantity: "" });

  const handleInputValue = ({ name, value }) => {
    setBook({ ...book, [name]: value });
  };

  const handleClick = () => {
    if (book.title === "") {
      book.title = data.title;
    }
    if (book.author === "") {
      book.author = data.author;
    }
    if (book.quantity === "") {
      book.quantity = data.quantity;
    }

    adminService.updateBook({ previous: data, current: book });
    return dispatch({ type: "clear-book", book: { ...data } });
  };
  return (
    <div>
      <h4>Edit {data.title}</h4>
      <p>
        <label>Title - {data.title}</label>
        <input type="text" name="title" placeholder="Insert new title...." onChange={(e) => handleInputValue(e.target)} />
      </p>
      <p>
        <label>Author - {data.author}</label>
        <input type="text" name="author" placeholder="Insert new author...." onChange={(e) => handleInputValue(e.target)} />
      </p>
      <p>
        <label>Quantity - {data.quantity}</label>
        <input type="number" name="quantity" placeholder="Insert new quantity...." onChange={(e) => handleInputValue(e.target)} />
      </p>

      <div>
        <button onClick={() => handleClick()}>Save changes</button>
        <button onClick={() => dispatch({ type: "clear-book", book: { ...data } })}>Discard changes</button>
      </div>
    </div>
  );
}
