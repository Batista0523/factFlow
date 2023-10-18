import React, { useState } from "react";

const CreatePage = () => {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setName] = useState("");
  const [category, setCategory] = useState("");
  const [from, setFrom] = useState("");
  const [spends, setSpends] = useState("");


  const handleFormSubmit = (event) => {
    event.preventDefault();



    //reset after submission
    setAmount('');
    setCategory('');
    setFrom('');
    setItemName('');
    setName('');
    setSpends('');
  };




  return (
   <div className="create-resource">
       <h2>Create a New Resource</h2>
  </div>)
};

export default CreatePage;
