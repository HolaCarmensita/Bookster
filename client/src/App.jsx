import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/browsing" element={<h3>Browsing</h3>} />
      </Routes>
    </>
  );
}

export default App;
