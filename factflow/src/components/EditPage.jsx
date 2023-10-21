import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditPage = ({ transactions, onUpdateTransaction, history }) => {
  const { id } = useParams();
  const transactionToEdit = transactions.find(
    (transaction) => transaction.id === id
  );

  if (!transactionToEdit) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger">Transaction not found.</div>
        <Link to="/" className="btn btn-primary">
          Back to Index
        </Link>
      </div>
    );
  }

  const [editedTransaction, setEditedTransaction] = useState({
    id: id,
    item_name: transactionToEdit.item_name,
    amount: transactionToEdit.amount,
    date: transactionToEdit.date,
    from: transactionToEdit.from,
    income: transactionToEdit.income,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction({ ...editedTransaction, [name]: value });
  };

  const handleUpdate = () => {
    onUpdateTransaction(id, editedTransaction);
    setEditedTransaction({
      id: id,
      item_name: "",
      amount: 0,
      date: "",
    });
    history.push(`/show/${id}`);
  };

  return (
    <div className="container mt-4">
      <h1>Edit Transaction</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="item_name" className="col-md-6 col-form-label">
            Item Name:
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="item_name"
              name="item_name"
              value={editedTransaction.item_name}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="amount" className="col-md-6 col-form-label">
            Amount:
          </label>
          <div className="col-md-6">
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={editedTransaction.amount}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="date" className="col-md-6 col-form-label">
            Date:
          </label>
          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={editedTransaction.date}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="from" className="col-md-6 col-form-label">
            From:
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="from"
              name="from"
              value={editedTransaction.from}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="category" className="col-md-6 col-form-label">
            Category:
          </label>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={editedTransaction.category}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="income" className="col-md-6 col-form-label">
            Income:
          </label>
          <div className="col-md-6">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="income"
                checked={editedTransaction.income}
                onChange={(e) =>
                  setEditedTransaction({
                    ...editedTransaction,
                    income: e.target.checked,
                  })
                }
              />
            </div>
          </div>
        </div>

        <button onClick={handleUpdate} className="btn btn-primary">
          Update Transaction
        </button>
      </form>
    </div>
  );
};

export default EditPage;
