import React from "react";
import TableActionBtnComponet from "./TableActionBtnComponet";

export default function TableBodyComponet({ data, view, dispatch, role }) {
  return (
    <>
      <tbody>
        <tr>
          <td>{(view === "user" && data.username) || data.title}</td>
          <td>{(view === "user" && data.role) || data.author}</td>
          {(view === "user" && <td>{data.purchases === undefined ? 0 : data.purchases} Purchases</td>) || (
            <td> {data.quantity === 0 ? "Out of stock" : data.quantity + " left"}</td>
          )}
          {view === "user" || role === "" ? <></> : <td>unfinnished</td>}
          {(role === "ADMIN" && <td>{<TableActionBtnComponet view={view} dispatch={dispatch} data={data} />}</td>) || <></>}
        </tr>
      </tbody>
    </>
  );
}
