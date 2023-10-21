import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePage from "./components/CreatePage";
import NavBar from "./components/NavBar";
import IndexPage from "./components/IndexPage";
import ShowPage from "./components/ShowPage";

function App() {
  const [transactions, setTransactions] = useState([]);

  const createTransaction = (newTransaction) => {
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          data.transaction,
        ]);
        updateTotals(data.transaction);
      })
      .catch((error) => {
        console.error("Error creating transaction", error);
      });
  };

  const deleteTransaction = (id) => {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        setTransactions(
          transactions.filter((transaction) => transaction.id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  };

  const fetchTransactions = () => {
    const apiUrl = "http://localhost:3000/transactions";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data.transactions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <IndexPage
                  transactions={transactions}
                  onDeleteTransaction={deleteTransaction}
                 
                />
              }
            />
            <Route
              path="/create-resource"
              element={
                <CreatePage
                  createTransaction={createTransaction}
                 
                />
              }
            />
            <Route
              path="/show/:id"
              element={<ShowPage transactions={transactions} />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
