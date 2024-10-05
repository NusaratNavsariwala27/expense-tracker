import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);

  const totalExpenses = expenses.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );

  return (
    <div className="summary">
      <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseSummary;
