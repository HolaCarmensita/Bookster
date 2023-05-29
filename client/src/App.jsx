import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/login&register/Header";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LoginPage />
            </>
          }
        />
        <Route path="/browsing" element={<h3>Browsing</h3>} />
        <Route
          path="/register"
          element={
            <>
              <Header />
              <RegisterPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
