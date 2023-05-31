import React, { useState } from 'react';
import adminService from '../../service/adminService';
import './EditBook.css';

export default function EditBookComponent({ data, dispatch }) {
  const [book, setBook] = useState({ title: '', author: '', quantity: '' });

  const handleInputValue = ({ name, value }) => {
    setBook({ ...book, [name]: value });
  };

  const handleClick = () => {
    if (book.title === '') {
      book.title = data.title;
    }
    if (book.author === '') {
      book.author = data.author;
    }
    if (book.quantity === '') {
      book.quantity = data.quantity;
    }

    adminService.updateBook({ previous: data, current: book });
    return dispatch({ type: 'clear-book', book: { ...data } });
  };
  return (
    <div className='editBook'>
      <h4>Edit the book {data.title}</h4>
      <div className='editBook-field'>
        <label className='editBookLabel'>Title: {data.title}</label>
        <input
          type='text'
          name='title'
          placeholder='Insert new title'
          onChange={(e) => handleInputValue(e.target)}
        />
      </div>
      <div className='editBook-field'>
        <label>Author: {data.author}</label>
        <input
          type='text'
          name='author'
          placeholder='Insert author'
          onChange={(e) => handleInputValue(e.target)}
        />
      </div>
      <div className='editBook-field'>
        <label>Quantity: {data.quantity}</label>
        <input
          type='number'
          name='quantity'
          placeholder='Insert quantity'
          onChange={(e) => handleInputValue(e.target)}
        />
      </div>

      <div className='editBook-buttons'>
        <button onClick={() => handleClick()}>Save changes</button>
        <button
          onClick={() => dispatch({ type: 'clear-book', book: { ...data } })}
        >
          Discard changes
        </button>
      </div>
    </div>
  );
}
