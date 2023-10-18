import React, { useState } from "react";
import './createPage.css'
const CreatePage = () => {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("");
  const [income, setIncome] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    //reset after submission
    setAmount("");
    setCategory("");
    setFrom("");
    setItemName("");
    setDate("");
    setIncome("");
  };

  return (
    <div className="create-resource">
      <div className="title-create-res">
        <h1>Your Fact Flow</h1>
      </div>
      <h2>Create a New Resource</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <br />
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <br />
          <label>
            From:
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </label>
          <br />
          <label>
            Income:
            <input
              type="text"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </label>
          <br />
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <br />
          <label>
            Date:
            <input
              className="date-calendar"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </label>
        <br />
        <button type="submit" className="btn-res">Create Resource</button>
      </form>
    </div>
  );
};

export default CreatePage;
