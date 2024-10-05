import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { useNavigate, useParams } from "react-router-dom";

const EditExpense = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const expense = expenses[id];

  const [formData, setFormData] = useState(expense);
  const [errors, setErrors] = useState({}); // Error state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if name is too long
    if (formData.name.length > 50) {
      newErrors.name = "Expense name must be less than 50 characters.";
    }

    // Check if amount is valid
    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0 || amount > 10000) {
      newErrors.amount =
        "Amount must be a positive number less than or equal to 10,000.";
    }

    // Check if category is selected
    if (!formData.category) {
      newErrors.category = "Please select a category.";
    }

    // Check if date is provided
    if (!formData.date) {
      newErrors.date = "Please select a date.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const updatedExpenses = [...expenses];
      updatedExpenses[id] = formData;
      setExpenses(updatedExpenses);
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Edit Expense</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Expense Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        {errors.amount && <p className="error">{errors.amount}</p>}

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
        </select>
        {errors.category && <p className="error">{errors.category}</p>}

        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        {errors.date && <p className="error">{errors.date}</p>}

        <button type="submit">Save Expense</button>
      </form>
    </div>
  );
};

export default EditExpense;
