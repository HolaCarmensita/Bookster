import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AdminPage from "./pages/AdminPage";

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

// test("Admin ska kunna göra user till admin,för att fler ska kunna hålla sidan uppdaterad.", async () => {
//   render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );

//   const usernameField = screen.getByTestId("username");
//   const passwordField = screen.getByTestId("password");
//   const loginBtn = screen.getByTestId("submitBtn");

//   fireEvent.change(usernameField, { target: { value: "Bob" } });
//   fireEvent.change(passwordField, { target: { value: "123" } });

//   fireEvent.click(loginBtn);

//   render(
//     <BrowserRouter>
//       <AdminPage test={true} />
//     </BrowserRouter>
//   );

//   const viewUserBtn = screen.getByTestId("viewUserBtn");
//   const viewBookBtn = screen.getByTestId("viewBookBtn");

//   fireEvent.click(viewUserBtn);

//   const actionBtn = await screen.findByTestId("2action", "", { timeout: 2000 });

//   fireEvent.click(actionBtn);

//   const confirmPromote = screen.getByTestId("confirmPromote");

//   fireEvent.click(confirmPromote);

//   fireEvent.click(viewBookBtn);
//   fireEvent.click(viewUserBtn);

//   // const userRole = screen.getByTestId("2role");
//   const userRole = await screen.findByTestId("2role", "", { timeout: 2000 });

//   expect(userRole.innerHTML).toBe("ADMIN");
// });
