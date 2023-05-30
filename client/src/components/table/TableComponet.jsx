import React, { useState } from 'react';
import TableBodyComponet from './TableBodyComponet';
import './table.css';

export default function TableComponet({
  data,
  view,
  dispatch,
  role,
  location,
}) {
  const [orderMsg, setOrderMsg] = useState('');
  return (
    <div>
      <p>{orderMsg}</p>
      <table data-cell='table_wrapper'>
        <thead>
          <tr>
            <th>{(view === 'user' && 'Username') || 'Book title'}</th>
            <th>{(view === 'user' && 'Role') || 'Book author'}</th>
            <th>{(view === 'user' && 'Purchases') || 'Availability'}</th>
            {view === 'user' || role === null ? <></> : <th>Order</th>}
            {(role === 'ADMIN' && <th>Action</th>) || <></>}
          </tr>
        </thead>

        <tbody>
          {data?.map((item, i) => (
            <TableBodyComponet
              data={item}
              key={i}
              view={view}
              dispatch={dispatch}
              role={role}
              setOrderMsg={setOrderMsg}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
