/*
* 
 * Author Niklas Nguyen
 * 
 * date 23-05-31
a confirmation components for deleting a user
handleClick takes the data from the prop that contains the user and making a http request to the server with the user data to delete
dispatch removes the user from an array that the reducer made
the cancel button just removes the user from the array
*/

import React from "react";
import adminService from "../../service/adminService";

export default function DeleteUserConfirmComponet({ data, dispatch }) {
  const handleClick = () => {
    adminService.deleteUser({ username: data.username });
    dispatch({ type: "clear-user", user: { ...data } });
  };
  return (
    <div className="confirm">
      <h4>Change user settings</h4>
      <p>Are you sure you with to Delete user {data.username}</p>

      <button onClick={() => handleClick()}>Proceed</button>
      <button
        onClick={() => dispatch({ type: "clear-user", user: { ...data } })}
      >
        Cancel
      </button>
    </div>
  );
}
