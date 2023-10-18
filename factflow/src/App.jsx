import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePage from './components/CreatePage';
import NavBar from './components/NavBar';
import IndexPage from './components/IndexPage';

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
       <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<IndexPage/>}/>
          <Route path='/create-resource' element={<CreatePage/>}/>
        </Routes>
       </Router>
      </div>
    </>
  );
}

export default App;
