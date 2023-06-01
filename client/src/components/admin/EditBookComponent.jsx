/*
* 
 * Author Niklas Nguyen
 * 
 * date 23-05-31
EditBookComponent is component for editing an exting book
all inputs uses handleInputValue onChange and uses useState to set value on exting property with in book with help of a decon sctuctor 
handleClick checks if the title,author or quantity is empty it takes the data from the prop data to add to the empty property
then send a http request with an object that contains previous data and the current data
then the dispatch removes the item from the array
 */

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
    <div className="card">
      <h4>Edit the book {data.title}</h4>
      <div className="card-inputfield">
        <label className="editBookLabel">Title: {data.title}</label>
        <input type="text" name="title" placeholder="Insert new title" onChange={(e) => handleInputValue(e.target)} />
      </div>
      <div className="card-inputfield">
        <label>Author: {data.author}</label>
        <input type="text" name="author" placeholder="Insert author" onChange={(e) => handleInputValue(e.target)} />
      </div>
      <div className="card-inputfield">
        <label>Quantity: {data.quantity}</label>
        <input type="number" name="quantity" placeholder="Insert quantity" onChange={(e) => handleInputValue(e.target)} />
      </div>

      <div className="card-buttons">
        <button onClick={() => handleClick()}>Save changes</button>
        <button onClick={() => dispatch({ type: "clear-book", book: { ...data } })}>Discard changes</button>
      </div>
    </div>
  );
}
