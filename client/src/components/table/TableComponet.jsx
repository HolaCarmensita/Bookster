import React, { useState } from "react";
import TableBodyComponet from "./TableBodyComponet";

export default function TableComponet({ data, view, dispatch, role }) {
  const [orderMsg, setOrderMsg] = useState("");
  return (
    <div>
      <p>{orderMsg}</p>
      <table>
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
          <TableBodyComponet data={item} key={i} view={view} dispatch={dispatch} role={role} setOrderMsg={setOrderMsg} index={i} />
        ))}
      </table>
    </div>
  );
}
