import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import authService from "../service/authService";

test("När Yves skriver in sina användar uppgifter så får Yves ett confirmation meddelande och Yves enhet tar emot en giltig jwt token.", async () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  const usernameField = screen.getByTestId("username");
  const passwordField = screen.getByTestId("password");
  const loginBtn = screen.getByTestId("submitBtn");

  fireEvent.change(usernameField, { target: { value: "Yves" } });
  fireEvent.change(passwordField, { target: { value: "123" } });

  fireEvent.click(loginBtn);

  const serverMsg = await screen.findByText("Successfully signed in");

  const isAuth = authService.isAuthenticated();

  expect(serverMsg).toBeInTheDocument();
  expect(isAuth).toBe(true);
});

test("Yves vill skapa ett konto, när Yves trycker på skapa konto då blir hennes enhet on diricerad till register sidan", async () => {
  render(
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );

  const registerBtn = screen.getByTestId("hereBtn");

  fireEvent.click(registerBtn);

  expect(global.window.location.pathname).toBe("/register");
});
