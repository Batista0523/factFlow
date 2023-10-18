const transactions = require('../models/transactionModels');

const getAlltransactions = (req, res) => {
  res.json({ transactions });
};

const getTransactionsById = (req, res) => {
  const { id } = req.params;
  const transaction = transactions.find((trans) => trans.id === id);

  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found' });
  }

  res.json({ transaction });
};

const createTransaction = (req, res) => {
  
};

const updateTransaction = (req, res) => {
  
};

const deleteTransaction = (req, res) => {
  
};

module.exports = {
  getAlltransactions,
  getTransactionsById,
  createTransaction,
  updateTransaction,
  deleteTransaction
};
