import React from "react";
import adminService from "../../service/adminService";

export default function PromoteConfirmationComponent({ data, dispatch }) {
  const handleClick = () => {
    adminService.putUserToAdmin({ username: data.username });
    dispatch({ type: "clear-user", user: { ...data } });
  };
  return (
    <div>
      <h4>Change user settings</h4>
      <p>Are you sure you with to Promote user {data.username}</p>

      <button onClick={() => handleClick()}>Proceed</button>
      <button onClick={() => dispatch({ type: "clear-user", user: { ...data } })}>Cancel</button>
    </div>
  );
}
