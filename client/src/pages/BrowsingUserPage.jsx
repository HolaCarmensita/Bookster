import { useState } from 'react';
import BrowsingHeader from '../components/Browsing/BrowsingHeader';
import Search from '../components/Browsing/Search';
import Table from '../components/Browsing/Table';

function BrowsingUserPage() {
  const [results, setResults] = useState([]);
  return (
    <div>
      <BrowsingHeader buttonChild='Browsing as a User' userName='Bertil' />
      <Search setResults={setResults} />
      <Table results={results} />
    </div>
  );
}
export default BrowsingUserPage;
