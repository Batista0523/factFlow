import React from "react";
import { Link } from "react-router-dom";

const IndexPage = ({ transactions }) => {
  return (
    <div className="container mt-4">
      <h1>Resource List</h1>
      {transactions.length > 0 ? (
        <div className="row">
          {transactions.map((transaction) => (
            <div className="col-md-4" key={transaction.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{transaction.item_name}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/resources/${transaction.id}`} className="btn btn-primary">
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
