import { render, screen } from "@testing-library/react";
import TableOrderBtnComponent from "./TableOrderBtnComponent";

test("Som en bookster-user vill jag tydligt se om en bok finns på lager så att jag vet om jag kan köpa den eller inte. Jag vill inte kunna beställa en bok som inte finns på lager.", () => {
  let data = {};
  data.quantity = 0;
  render(<TableOrderBtnComponent data={data} />);

  const orderBtn = screen.getByTestId("orderBtn");

  //   expect(orderBtn).toBeEnabled();
  expect(orderBtn).toBeDisabled();
});
