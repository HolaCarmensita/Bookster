import React from "react";
import PromoteConfirmationComponent from "./PromoteConfirmationComponent";
import DeleteUserConfirmComponet from "./DeleteUserConfirmComponet";
import DeleteBookConfirmComponent from "./DeleteBookConfirmComponent";

export default function ConfirmationComponent({ item, dispatch }) {
  return (
    <div>
      {item.action === "promote" ? <PromoteConfirmationComponent data={item} dispatch={dispatch} /> : null}
      {item.action === "delete-user" ? <DeleteUserConfirmComponet data={item} dispatch={dispatch} /> : null}
      {item.action === "delete-book" ? <DeleteBookConfirmComponent data={item} dispatch={dispatch} /> : null}
    </div>
  );
}
