/**
 * Author Niklas Nguyen
 *
 * date 23-05-31
 *
 *TableActionBtnComponet can either promote/edit or delete a user/book
 *it checks the view prop what value it has to visualy see if it should edit or promote and hasRoleAdmin checks data has a property called role and if the role is ADMIN it will return false and the button will be disabled
 *when the function handleClick is called by the buttons it first check if the view is user then it checks the buttons value to a add a new property in data with a value 'delete-user','promote','delete-book' or 'edit' and uses a dispatch prop that is send from a reducer hook to save the data in a array
 */

import React from "react";

export default function TableActionBtnComponet({ view, dispatch, data, index }) {
  const hasRoleAdmin = () => {
    if (data.role === "ADMIN") return false;
    return true;
  };

  const handleClick = (e) => {
    if (view === "user") {
      if (e.target.value === "delete") {
        data.action = "delete-user";
      } else {
        data.action = "promote";
      }

      dispatch({ type: "user", user: { ...data } });
    } else {
      if (e.target.value === "delete") {
        data.action = "delete-book";
      } else {
        data.action = "edit";
      }
      dispatch({ type: "book", book: { ...data } });
    }
  };
  return (
    <>
      <button data-testid={index + "action"} className="edit promote" disabled={!hasRoleAdmin()} onClick={(e) => handleClick(e)}>
        {(view === "user" && "Promote") || "Edit"}
      </button>
      <button className="delete" value="delete" onClick={(e) => handleClick(e)}>
        Delete
      </button>
    </>
  );
}
