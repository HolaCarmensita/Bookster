import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BrowsingUserPage from './pages/BrowsingUserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/browser' element={<BrowsingUserPage />} />
        <Route path='/register' element={<h3>Register</h3>} />
      </Routes>
    </>
  );
}

export default App;
