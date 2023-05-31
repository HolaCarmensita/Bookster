import React, { useState } from 'react';
import adminService from '../../service/adminService';
import './card.css';

export default function AddBookComponent({ isOpen }) {
  const [book, setBook] = useState({ title: '', author: '', quantity: 0 });

  const handleInputValue = ({ name, value }) => {
    setBook({ ...book, [name]: value });
  };

  const handleClick = (e) => {
    if (e.target.value === 'add') {
      if (book.title === '') return false;
      if (book.author === '') return false;

      adminService.addBook(book);
    }
    isOpen(false);
  };
  return (
    <div className='card'>
      <h4>Add a new book</h4>
      <div className='card-inputfield'>
        <label>Title </label>
        <input
          type='text'
          name='title'
          placeholder='Insert new title....'
          onChange={(e) => handleInputValue(e.target)}
        />
      </div>
      <div className='card-inputfield'>
        <label>Author</label>
        <input
          type='text'
          name='author'
          placeholder='Insert new author....'
          onChange={(e) => handleInputValue(e.target)}
        />
      </div>
      <div className='card-inputfield'>
        <label>Quantity</label>
        <input
          type='number'
          name='quantity'
          placeholder='Insert new quantity....'
          onChange={(e) => handleInputValue(e.target)}
        />
      </div>

      <div className='card-buttons'>
        <button value='add' onClick={(e) => handleClick(e)}>
          Add
        </button>
        <button value='cancel' onClick={(e) => handleClick(e)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
