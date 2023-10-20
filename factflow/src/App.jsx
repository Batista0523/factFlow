import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePage from './components/CreatePage';
import NavBar from './components/NavBar';
import IndexPage from './components/IndexPage';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/transactions';
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div>
       <Router>
        <NavBar/>
        <Routes>
        <Route path='/' element={<IndexPage transactions={transactions} />} />
          <Route path='/create-resource' element={<CreatePage />}/>
        </Routes>
       </Router>
      </div>
    </>
  );
}

export default App;
