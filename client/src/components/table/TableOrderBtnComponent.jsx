/**
 * Author Niklas Nguyen
 *
 * date 23-05-31
 *
 * this component handles the amount of books the user order and sending a http request to the server
 * two buttons has value minus and plus, there onClick function handleClick checks the value from the buttons to increase the amount value from useState or decrease, it checks so it cant go below 0 or that amount cant go above the data's quantity
 * when the user presses on order button it calls the function buy book if the amount is 0 then the function return false and does nothing but if its more it makes a http request to the server with an object that contains the title from the book and the amount property, when it all goes well its send back a message from the server and the functions send it back to its parent using setOrderMsg prop
 * if the quantity from the data prop is 0 then all the buttons gets disabled
 */

import React, { useState } from "react";
import userService from "../../service/userService";

export default function TableOrderBtnComponent({ data, setOrderMsg }) {
  const [amount, setAmount] = useState(0);

  const handleClick = (e) => {
    if (e.target.value === "minus") {
      if (amount === 0) return false;
      setAmount(amount - 1);
    } else {
      if (amount >= data.quantity) return false;
      setAmount(amount + 1);
    }
  };

  const buyBook = async () => {
    if (amount === 0) return false;
    const resp = await userService.buyBook({ title: data.title, quantity: amount });
    const result = await resp.json();
    setOrderMsg(result.message);
    setTimeout(() => setOrderMsg(""), 5000);
  };
  return (
    <>
      <button disabled={data.quantity === 0} value="minus" onClick={(e) => handleClick(e)}>
        -
      </button>
      <span>{amount}</span>
      <button disabled={data.quantity === 0} value="plus" onClick={(e) => handleClick(e)}>
        +
      </button>

      <button data-testid="orderBtn" disabled={data.quantity === 0} onClick={() => buyBook()}>
        Order
      </button>
    </>
  );
}
