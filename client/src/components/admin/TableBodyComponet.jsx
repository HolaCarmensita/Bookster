import React from "react";
import TableActionBtnComponet from "./TableActionBtnComponet";

export default function TableBodyComponet({ data, view }) {
  return (
    <>
      <tbody>
        <tr>
          <td>{(view === "user" && data.username) || data.title}</td>
          <td>{(view === "user" && data.role) || data.author}</td>
          {(view === "user" && <td>{data.purchases === undefined ? 0 : data.purchases} Purchases</td>) || (
            <td> {data.quantity === 0 ? "Out of stock" : data.quantity + " left"}</td>
          )}
          {(view === "user" && <></>) || <td>unfinnished</td>}
          <td>{<TableActionBtnComponet view={view} />}</td>
        </tr>
      </tbody>
    </>
  );
}
