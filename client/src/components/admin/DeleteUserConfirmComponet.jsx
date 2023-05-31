import React from 'react';
import adminService from '../../service/adminService';

export default function DeleteUserConfirmComponet({ data, dispatch }) {
  const handleClick = () => {
    adminService.deleteUser({ username: data.username });
    dispatch({ type: 'clear-user', user: { ...data } });
  };
  return (
    <div className='confirm'>
      <h4>Change user settings</h4>
      <p>Are you sure you with to Delete user {data.username}</p>

      <button onClick={() => handleClick()}>Proceed</button>
      <button
        onClick={() => dispatch({ type: 'clear-user', user: { ...data } })}
      >
        Cancel
      </button>
    </div>
  );
}
