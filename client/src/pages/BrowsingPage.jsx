import { useEffect, useState } from 'react';
import BrowsingHeader from '../components/Browsing/BrowsingHeader';
import SearchComponent from '../components/search/SearchComponent';
import { UseQuaryBookster } from '../hooks/useQuaryBookster';
import TableComponet from '../components/table/TableComponet';
import authService from '../service/authService';
import { useNavigate } from 'react-router-dom';
import '../components/login&register/form.css';
import '../components/search/searchBrowsingPage.css';

function BrowsingPage({ setUsername }) {
  const navigate = useNavigate();
  const [quary, setQuary] = useState('');
  const [role] = useState(authService.getRole());
  const { isLoading, error, data } = UseQuaryBookster(quary);
  useEffect(() => {
    if (authService.isAuthenticated()) {
      setUsername(authService.getUsername);
    } else {
      setUsername(undefined);
    }
    if (role === 'ADMIN') {
      navigate('/admin');
    }
  }, [role, navigate, setUsername]);

  return (
    <div>
      {/* <BrowsingHeader buttonChild="Browsing as a User" userName="Bertil" /> */}
      <div className='search-container'>
        <SearchComponent setQuary={setQuary} />
      </div>
      {(error && <p>404 could not found</p>) ||
        (isLoading && <p>loading...</p>) || (
          <TableComponet data={data} role={role} />
        )}
    </div>
  );
}
export default BrowsingPage;
