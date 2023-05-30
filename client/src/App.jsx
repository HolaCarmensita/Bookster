import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/login&register/Header";
import BrowsingPage from "./pages/BrowsingPage";
import AdminPage from "./pages/AdminPage";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <Header username={username} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/browser"
          element={<BrowsingPage setUsername={setUsername} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
