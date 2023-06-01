/*
* 
 * Author Niklas Nguyen
 * 
 * date 23-05-31
tableComponent is meant to be for to see users and book depending if you are admin you see some more buttons to press
this component takes in 4 diffrents props 
data is an array that maps out thru TableBodyComponent
if view prop value is user the table head changes to username exc insted of book title
role does the same if the role is admin it shows the action table head but if the role is null the order in the table head doesnt show
dispatch is for reducer hooks to save data in an array
this component shows server message when the user order something with useState and sends it down to its child
 */

import React, { useState } from "react";
import TableBodyComponet from "./TableBodyComponet";
import "./table.css";

export default function TableComponet({
  data,
  view,
  dispatch,
  role,
  location,
}) {
  const [orderMsg, setOrderMsg] = useState("");
  return (
    <div>
      <p>{orderMsg}</p>
      <table data-cell="table_wrapper">
        {/* <caption>Books</caption> */}
        <thead>
          <tr>
            <th>{(view === "user" && "Username") || "Book title"}</th>
            <th>{(view === "user" && "Role") || "Book author"}</th>
            <th>{(view === "user" && "Purchases") || "Availability"}</th>
            {view === "user" || role === null ? <></> : <th>Order</th>}
            {(role === "ADMIN" && <th>Action</th>) || <></>}
          </tr>
        </thead>
        {data?.map((item, i) => (
          <TableBodyComponet
            data={item}
            key={i}
            view={view}
            dispatch={dispatch}
            role={role}
            setOrderMsg={setOrderMsg}
            index={i}
          />
        ))}
      </table>
    </div>
  );
}
