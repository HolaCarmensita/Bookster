import { useState } from 'react';
import Button from './HeaderButton';
import './header.css';

const webbAppName = 'Bookster';

function Header({ username }) {
  // const [location,setLocation] = useState(global.window.location.pathname);
  const location = global.window.location.pathname;
  return (
    <div className='header-container'>
      <nav className='header wrapper'>
        <h1 className='header-title'>{webbAppName}</h1>
        <div className='header-left'>
          {(location === '/' && <></>) ||
            (location === '/register' && <></>) ||
            (username === undefined && <p>Guest</p>) || (
              <p className='header-username'>Loged in as {username}</p>
            )}

          {(location === '/' && <></>) ||
            (location === '/register' && <></>) || (
              <Button username={username} />
            )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
