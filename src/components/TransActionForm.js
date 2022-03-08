import { useState } from "react";

const TransActionForm = ({ addTransaction, setIsShow }) => {
  const [formValuse, setFormValues] = useState({
    type: "expense",
    amount: null,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValuse, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValuse);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValuse.desc}
        placeholder="description"
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValuse.amount}
        placeholder="amount"
      />
      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValuse.type === "expense"}
          onChange={changeHandler}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValuse.type === "income"}
          onChange={changeHandler}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="btn primary" type="submit">
        Add transaction
      </button>
    </form>
  );
};

export default TransActionForm;
