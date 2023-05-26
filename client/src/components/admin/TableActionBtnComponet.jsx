import React from "react";

export default function TableActionBtnComponet({ view }) {
  return (
    <>
      <button>{(view === "user" && "Promote") || "Edit"}</button>
      <button>{(view === "user" && "Delete") || "Delete"}</button>
    </>
  );
}
