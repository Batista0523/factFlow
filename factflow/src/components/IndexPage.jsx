import React, { useState, useEffect } from "react";

const IndexPage = ({ transactions }) => {
  console.log(transactions);
  return (
    <div className="index">
      <h1>Transactions</h1>
      <p>Welcome to Fact-Flow</p>
      {Array.isArray(transactions) && transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <p>Item name: {transaction.item_name}</p>
              <p>Amunt : {transaction.amount}</p>
              <p>Date: {transaction.date}</p>
              <p>Category: {transaction.category}</p>
              <p>From: {transaction.from}</p>
              {transaction.income ? <p>Income</p> : <p>Expense</p>}
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
