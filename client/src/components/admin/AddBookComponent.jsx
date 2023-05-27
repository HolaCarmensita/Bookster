import React, { useState } from "react";
import adminService from "../../service/adminService";

export default function AddBookComponent({ isOpen }) {
  const [book, setBook] = useState({ title: "", author: "", quantity: 0 });

  const handleInputValue = ({ name, value }) => {
    setBook({ ...book, [name]: value });
    console.log(book);
  };

  const handleClick = (e) => {
    if (e.target.value === "add") {
      if (book.title === "") return false;
      if (book.author === "") return false;

      adminService.addBook(book);
    }
    isOpen(false);
  };
  return (
    <div>
      <h4>Add a book</h4>
      <p>
        <label>Title - </label>
        <input type="text" name="title" placeholder="Insert new title...." onChange={(e) => handleInputValue(e.target)} />
      </p>
      <p>
        <label>Author - </label>
        <input type="text" name="author" placeholder="Insert new author...." onChange={(e) => handleInputValue(e.target)} />
      </p>
      <p>
        <label>Quantity - </label>
        <input type="number" name="quantity" placeholder="Insert new quantity...." onChange={(e) => handleInputValue(e.target)} />
      </p>

      <div>
        <button value="add" onClick={(e) => handleClick(e)}>
          Add
        </button>
        <button value="cancel" onClick={(e) => handleClick(e)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
