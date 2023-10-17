import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const baseUrl = import.meta.env.VITE_BASE_URL;
  const apiUrl = `${baseUrl}/api/transactions`;

  useEffect(() => {
   
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [apiUrl]);

  return (
    <>
      <div>
       
      </div>
    </>
  );
}

export default App;
