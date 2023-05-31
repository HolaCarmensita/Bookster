/*
* 
 * Author Niklas Nguyen
 * 
 * date 23-05-31
table body component renders the data dynamic
if view prop value is user it picks out data from a diffrent object example it pick data.username insted of data.title
role does the same if the role is admin it shows the admin buttons but if the role is null the order buttons dispairs aswell if the vies is user
to see the quantity of a book if the quantity is 0 it show out of stock or else it shows the quantity
and component send down a setfunction from its parent that uses useState thru props and keeps sending it down to its child
 */

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
