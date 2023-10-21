import React from "react";
import { Link } from "react-router-dom";

const IndexPage = ({ transactions }) => {
  const totalExpense = transactions
    .filter((transaction) => !transaction.income)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const totalIncome = transactions
    .filter((transaction) => transaction.income)
    .reduce((total, transaction) => total + transaction.amount, 0);

  const getTotalColor = (isExpenses) => {
    if (isExpenses && totalExpense > totalIncome) {
      return "bg-danger";
    } else if (!isExpenses && totalIncome > totalExpense) {
      return "bg-success";
    } else {
      return "bg-warning";
    }
  };

  return (
    <div className="container mt-4">
      <h1>Resource List</h1>
      <div className={`card ${getTotalColor(false)} text-white`}>
        <div className="card-body">
          <h5 className="card-title">Total Income</h5>
          <p>{totalIncome}</p>
        </div>
      </div>
      <div className={`card ${getTotalColor(true)} mt-3`}>
        <div className="card-body">
          <h5 className="card-title">Total Expenses</h5>
          <p>{totalExpense}</p>
        </div>
      </div>
      {transactions.length > 0 ? (
        <div className="row">
          {transactions.map((transaction) => (
            <div className="col-md-4" key={transaction.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{transaction.item_name}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to={`/show/${transaction.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                    <div>
                      <button className="btn btn-warning mx-2">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  </div>
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
