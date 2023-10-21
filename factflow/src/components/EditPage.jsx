import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTransaction({ ...editedTransaction, [name]: value });
  };

  const handleUpdate = () => {
    onUpdateTransaction(id, editedTransaction);
    setEditedTransaction({
      id: id,
      item_name: '',
      amount: 0,
      date: '',
    });
    history.push(`/show/${id}`);
  };

  return (
    <div className="container mt-4">
      <h1>Edit Transaction</h1>
      <form>
        <div className="form-group">
          <label htmlFor="item_name">Item Name:</label>
          <input
            type="text"
            className="form-control"
            id="item_name"
            name="item_name"
            value={editedTransaction.item_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={editedTransaction.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={editedTransaction.date}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleUpdate} className="btn btn-primary">
          Update Transaction
        </button>
      </form>
    </div>
  );
};

export default EditPage;
