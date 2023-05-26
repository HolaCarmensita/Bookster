import React from "react";
import TableBodyComponet from "./TableBodyComponet";

export default function TableComponet({ data, view, dispatch }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{(view === "user" && "Username") || "Book title"}</th>
          <th>{(view === "user" && "Role") || "Book author"}</th>
          <th>{(view === "user" && "Purchases") || "Availability"}</th>
          {(view === "user" && <></>) || <th>Order</th>}
          <th>Action</th>
        </tr>
      </thead>
      {data?.map((item, i) => (
        <TableBodyComponet data={item} key={i} view={view} dispatch={dispatch} />
      ))}
    </table>
  );
}
