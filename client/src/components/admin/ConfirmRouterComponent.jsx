/** 
 * 
 * Author Niklas Nguyen
 * 
 * date 23-05-31
this is a router component for diffrent confirmation like a pop-up
props takes in data thru item
item has a value in item.action that the componet checks do choose which component to show
dispatch is a function from the custom hook that uses reducer
*/

import React from "react";
import PromoteConfirmationComponent from "./PromoteConfirmationComponent";
import DeleteUserConfirmComponet from "./DeleteUserConfirmComponet";
import DeleteBookConfirmComponent from "./DeleteBookConfirmComponent";
import EditBookComponent from "./EditBookComponent";

export default function ConfirmRouterComponent({ item, dispatch }) {
  return (
    <div>
      {item.action === "promote" ? <PromoteConfirmationComponent data={item} dispatch={dispatch} /> : null}
      {item.action === "delete-user" ? <DeleteUserConfirmComponet data={item} dispatch={dispatch} /> : null}
      {item.action === "delete-book" ? <DeleteBookConfirmComponent data={item} dispatch={dispatch} /> : null}
      {item.action === "edit" ? <EditBookComponent data={item} dispatch={dispatch} /> : null}
    </div>
  );
}
