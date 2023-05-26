import { useState } from 'react';
import BrowsingHeader from '../components/Browsing/BrowsingHeader';
import Search from '../components/Browsing/Search';
import Table from '../components/Browsing/Table';
import Order from '../components/Browsing/Order';

function BrowsingUserPage() {
  const [results, setResults] = useState([]); //tillhör sök
  const [dataTable, setDataTabel] = useState([
    {
      title: 'Eragon',
      author: 'Christopher Paolini',
      quantity: 3,
    },
    {
      title: "Harry potter the sorcerer's stone",
      author: 'J.K Rowling',
      quantity: 15,
    },
    {
      title: 'The nightingale ',
      author: 'Hannah Kerstin',
      quantity: 0,
    },
    {
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      quantity: 10,
    },
  ]); //Detta ska vara data från servern

  const column = [
    { heading: 'Title', value: 'title' },
    { heading: 'Author', value: 'author' },
    { heading: 'Quantity', value: 'quantity' },
    { heading: 'Order', value: <Order /> },
  ];

  return (
    <div>
      <BrowsingHeader buttonChild='Browsing as a User' userName='Bertil' />
      <Search setResults={setResults} />
      <Table results={results} data={dataTable} column={column} />
    </div>
  );
}
export default BrowsingUserPage;
