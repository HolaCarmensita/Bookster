import React, { useState } from 'react';
import userService from '../../service/userService';

export default function TableOrderBtnComponent({ data, setOrderMsg }) {
  const [amount, setAmount] = useState(0);

  const handleClick = (e) => {
    if (e.target.value === 'minus') {
      if (amount === 0) return false;
      setAmount(amount - 1);
    } else {
      if (amount >= data.quantity) return false;
      setAmount(amount + 1);
    }
  };

  const buyBook = async () => {
    if (amount === 0) return false;
    const resp = await userService.buyBook({
      title: data.title,
      quantity: amount,
    });
    const result = await resp.json();
    setOrderMsg(result.message);
    setTimeout(() => setOrderMsg(''), 5000);
  };
  return (
    <>
      <div className='changeAmount'>
        <button
          className='minusBtn'
          disabled={data.quantity === 0}
          value='minus'
          onClick={(e) => handleClick(e)}
        >
          -
        </button>
        <span>{amount}</span>
        <button
          className='plusBtn'
          disabled={data.quantity === 0}
          value='plus'
          onClick={(e) => handleClick(e)}
        >
          +
        </button>
      </div>

      <button
        className='orderBtn'
        disabled={data.quantity === 0}
        onClick={() => buyBook()}
      >
        Order
      </button>
    </>
  );
}
