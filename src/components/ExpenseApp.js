import { useEffect, useState } from "react";
import OverView from "./OverView";
import TransAction from "./TransAction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className="container">
      <OverView
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransAction transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
