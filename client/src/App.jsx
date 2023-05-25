import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browser" element={<h3>Browser</h3>} />
        <Route path="/register" element={<h3>Register</h3>} />
      </Routes>
    </>
  );
}

export default App;
