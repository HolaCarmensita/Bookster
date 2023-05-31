import React from 'react';
import adminService from '../../service/adminService';

export default function DeleteBookConfirmComponent({ data, dispatch }) {
  const handleClick = () => {
    adminService.deleteBook(data);
    dispatch({ type: 'clear-book', book: { ...data } });
  };
  return (
    <div className='confirm'>
      <h4>You are about to delete a book</h4>
      <p>Are you sure you want to delete the book "{data.title}"?</p>
      <div className='confirm-buttons'>
        <button onClick={() => handleClick()}>Proceed</button>
        <button
          onClick={() => dispatch({ type: 'clear-book', book: { ...data } })}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
