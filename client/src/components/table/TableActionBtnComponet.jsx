import React from 'react';

export default function TableActionBtnComponet({ view, dispatch, data }) {
  const hasRoleAdmin = () => {
    if (data.role === 'ADMIN') return false;
    return true;
  };

  const handleClick = (e) => {
    if (view === 'user') {
      if (e.target.value === 'delete') {
        data.action = 'delete-user';
      } else {
        data.action = 'promote';
      }

      dispatch({ type: 'user', user: { ...data } });
    } else {
      if (e.target.value === 'delete') {
        data.action = 'delete-book';
      } else {
        data.action = 'edit';
      }
      dispatch({ type: 'book', book: { ...data } });
    }
  };
  return (
    <>
      <button
        className='edit promote'
        disabled={!hasRoleAdmin()}
        onClick={(e) => handleClick(e)}
      >
        {(view === 'user' && 'Promote') || 'Edit'}
      </button>
      <button className='delete' value='delete' onClick={(e) => handleClick(e)}>
        Delete
      </button>
    </>
  );
}
