import React from "react";

const IndexPage = ({ transactions }) => {
  let totalAmount = 0;

  if (Array.isArray(transactions) && transactions.length > 0) {
    totalAmount = transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  }

  const getTotalColor = () => {
    if (totalAmount > 100) {
      return "bg-success";
    } else if (totalAmount >= 0) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  };

  return (
    <div className={`container mt-4`}>
      <div className={`card ${getTotalColor()} text-white`}>
        <div className="card-body">
          <h1 className="card-title">Transactions</h1>
          <p>Welcome to Fact-Flow</p>
          <p>Total: {totalAmount}</p>
        </div>
      </div>

      {transactions.length > 0 ? (
        <div className="row mt-4">
          {transactions.map((transaction) => (
            <div className="col-md-4" key={transaction.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">
                    Item name: {transaction.item_name}
                  </h5>
                  <p>Amount: {transaction.amount}</p>
                  <p>Date: {transaction.date}</p>
                  <p>Category: {transaction.category}</p>
                  <p>From: {transaction.from}</p>
                  <p>{transaction.income ? "Income" : "Expense"}</p>
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default IndexPage;
