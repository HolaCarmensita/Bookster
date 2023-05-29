import React from "react";
import TableActionBtnComponet from "./TableActionBtnComponet";
import TableOrderBtnComponent from "./TableOrderBtnComponent";

export default function TableBodyComponet({ data, view, dispatch, role, setOrderMsg, index }) {
  return (
    <>
      <tbody>
        <tr>
          <td data-testid={index + "title/username"}>{(view === "user" && data.username) || data.title}</td>
          <td data-testid={index + "role"}>{(view === "user" && data.role) || data.author}</td>
          {(view === "user" && <td>{data.purchases === undefined ? 0 : data.purchases.length} Purchases</td>) || (
            <td> {data.quantity === 0 ? "Out of stock" : data.quantity + " left"}</td>
          )}
          {view === "user" || role === null ? (
            <></>
          ) : (
            <td>
              <TableOrderBtnComponent data={data} setOrderMsg={setOrderMsg} />
            </td>
          )}
          {(role === "ADMIN" && <td>{<TableActionBtnComponet view={view} dispatch={dispatch} data={data} index={index} />}</td>) || <></>}
        </tr>
      </tbody>
    </>
  );
}
