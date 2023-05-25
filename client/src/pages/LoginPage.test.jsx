// import { BrowserRouter } from "react-router-dom";
// import LoginPage from "./LoginPage";
// import { fireEvent, render, screen } from "@testing-library/react";

// const mockedUsedNavigate = jest.fn();
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: () => mockedUsedNavigate,
// }));

// test("Yves skriver in sina använder uppgiften och Yves enhet tar emot en giltig jwt token sen sedan om dirigerad till browsing sidan.", () => {
//   render(
//     <BrowserRouter>
//       <LoginPage />
//     </BrowserRouter>
//   );

//   const usernameValue = screen.getByTestId("username");
//   const passwordValue = screen.getByTestId("password");
//   const loginBtn = screen.getByTestId("submitBtn");

//   fireEvent.change(usernameValue, { target: { value: "Yves" } });
//   fireEvent.change(passwordValue, { target: { value: "123" } });

//   fireEvent.click(loginBtn);

//   expect(mockedUsedNavigate).toHaveBeenCalledWith("/browsing");
// });

// test("Yves vill skapa ett konto, när Yves trycker på skapa konto då blir hennes enhet on diricerad till register sidan", () => {
//   render(
//     <BrowserRouter>
//       <LoginPage />
//     </BrowserRouter>
//   );

//   const registerBtn = screen.getByTestId("submitBtn");

//   fireEvent.click(registerBtn);

//   expect(mockedUsedNavigate).toHaveBeenCalledWith("/register");
// });
