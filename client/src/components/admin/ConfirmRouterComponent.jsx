import React from 'react';
import PromoteConfirmationComponent from './PromoteConfirmationComponent';
import DeleteUserConfirmComponet from './DeleteUserConfirmComponet';
import DeleteBookConfirmComponent from './DeleteBookConfirmComponent';
import EditBookComponent from './EditBookComponent';

export default function ConfirmRouterComponent({ item, dispatch }) {
  return (
    <>
      {item.action === 'promote' ? (
        <PromoteConfirmationComponent data={item} dispatch={dispatch} />
      ) : null}
      {item.action === 'delete-user' ? (
        <DeleteUserConfirmComponet data={item} dispatch={dispatch} />
      ) : null}
      {item.action === 'delete-book' ? (
        <DeleteBookConfirmComponent data={item} dispatch={dispatch} />
      ) : null}
      {item.action === 'edit' ? (
        <EditBookComponent data={item} dispatch={dispatch} />
      ) : null}
    </>
  );
}
