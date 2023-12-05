/*
* 
 * Author Niklas Nguyen
 * 
 * date 23-05-31
PromoteConfirmComponent takes in the a users data thru props and ask the admin if the admin is sure to promote the user to admin
handleClick makes a http request with an object username and the username comes from the data from the prop and removes the item from an array
 */

import React from "react";
import adminService from "../../service/adminService";

export default function PromoteConfirmationComponent({ data, dispatch }) {
  const handleClick = async () => {
    const serverMsg = adminService.putUserToAdmin({ username: data.username });
    console.log(await serverMsg);
    dispatch({ type: "clear-user", user: { ...data } });
  };
  return (
    <div className="confirm">
      <h4>Change user settings</h4>
      <p>Are you sure you want to Promote user {data.username}</p>
      <div className="button-container">
        <button
          className="proceed-btn"
          data-testid="confirmPromote"
          onClick={() => handleClick()}
        >
          Proceed
        </button>
        <button
          className="cancel-btn"
          onClick={() => dispatch({ type: "clear-user", user: { ...data } })}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
