import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BrowsingUserPage from "./pages/BrowsingUserPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browser" element={<BrowsingUserPage />} />
        <Route path="/register" element={<h3>Register</h3>} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
