import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BrowsingPage from './pages/BrowsingPage';
import AdminPage from './pages/AdminPage';

function App() {
  return (
    <>
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/browser' element={<BrowsingPage />} />
          <Route path='/register' element={<h3>Register</h3>} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
