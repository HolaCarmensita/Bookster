import React from 'react';
import './searchcomponent.css';

export default function SearchComponent({ setQuary }) {
  return (
    <div className='search-container'>
      <input
        className='search'
        type='text'
        placeholder='Type to search'
        onChange={(e) => setQuary(e.target.value)}
      />
    </div>
  );
}
