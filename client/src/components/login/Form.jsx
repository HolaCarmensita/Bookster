import { useState } from 'react';
import Button from './Button';

function Form() {
  const checkUserExist = (event) => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login form</h2>
        <Button type='submit' version='login'>
          Login
        </Button>
      </form>

      <Button version='guest'>Login as guest user</Button>
      <Button version='register'>Register new account</Button>
    </>
  );
}
export default Form;
