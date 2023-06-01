import React from 'react';
import TableActionBtnComponet from './TableActionBtnComponet';
import TableOrderBtnComponent from './TableOrderBtnComponent';

export default function TableBodyComponet({
  data,
  view,
  dispatch,
  role,
  setOrderMsg,
}) {
  return (
    <>
      <tr>
        <td data_cell='title'>
          {(view === 'user' && data.username) || data.title}
        </td>
        <td data_cell='author'>
          {(view === 'user' && data.role) || data.author}
        </td>
        {(view === 'user' && (
          <td data_cell='purchases'>
            {data.purchases === undefined ? 0 : data.purchases.length} Purchases
          </td>
        )) || (
          <td data_cell='quantity'>
            {' '}
            {data.quantity === 0 ? 'Out of stock' : data.quantity + ' left'}
          </td>
        )}
        {view === 'user' || role === null ? (
          <></>
        ) : (
          <td data_cell='order' className='order'>
            <TableOrderBtnComponent data={data} setOrderMsg={setOrderMsg} />
          </td>
        )}
        {(role === 'ADMIN' && (
          <td data_cell='action' className='action'>
            {
              <TableActionBtnComponet
                view={view}
                dispatch={dispatch}
                data={data}
              />
            }
          </td>
        )) || <></>}
      </tr>
    </>
  );
}
