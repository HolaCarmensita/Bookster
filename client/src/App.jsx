import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/header/Header';
import BrowsingPage from './pages/BrowsingPage';
import AdminPage from './pages/AdminPage';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');

  return (
    <>
      <Header username={username} />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route
            path='/browser'
            element={<BrowsingPage setUsername={setUsername} />}
          />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
