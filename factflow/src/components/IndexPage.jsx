import React from "react";

const IndexPage = ({ transactions }) => {

 console.log(transactions.transactions)
  let totalAmount = 0;

  if (Array.isArray(transactions) && transactions.length > 0) {
    totalAmount = transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  };

  const getTotalColor = () => {
    if (totalAmount > 100) {
      return "green";
    } else if (totalAmount >= 0) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className={`index ${getTotalColor()}`}>
      <h1>Transactions</h1>
      <p>Welcome to Fact-Flow</p>
      <p>Total: {totalAmount}</p>
       {transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <p>Item name: {transaction.item_name}</p>
              <p>Amount: {transaction.amount}</p>
              <p>Date: {transaction.date}</p>
              <p>Category: {transaction.category}</p>
              <p>From: {transaction.from}</p>
              {transaction.income ? <p>Income</p> : <p>Expense</p>}
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default IndexPage;
