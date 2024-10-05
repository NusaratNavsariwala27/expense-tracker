import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { useNavigate } from "react-router-dom";

const ExpenseList = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const navigate = useNavigate(); // Used navigate for programmatic routing

  // Function to handle deleting an expense
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  // Function to navigate to the Add Expense page
  const handleAddExpense = () => {
    navigate("/add-expense");
  };

  // Function to navigate to Edit Expense page
  const handleEditExpense = (index) => {
    navigate(`/edit-expense/${index}`);
  };

  return (
    <div className="container">
      <h1>List of Expenses</h1>
      <button onClick={handleAddExpense}>Add New Expense</button>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <p>
              {expense.name} - ${expense.amount}
            </p>
            <button onClick={() => handleEditExpense(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
