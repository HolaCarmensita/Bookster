import { useState } from 'react';

function Search({ setResults }) {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        placeholder='Type to search'
        value={input}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
}
export default Search;
