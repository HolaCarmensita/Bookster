import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("Yves vill/har inte skapa ett konto, Men när hon trycker på 'login as guest' så ska Yves enhet blir omdirigerad", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const guestBtn = screen.getByTestId("guestBtn");

  fireEvent.click(guestBtn);

  expect(mockedUsedNavigate).toHaveBeenCalledWith("/browser");
});
