import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import EditExpense from "./components/EditExpense";
import Navbar from "./components/Navbar";
import ExpenseSummary from "./components/ExpenseSummary";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ExpenseList />} />
          <Route path="/add-expense" element={<AddExpense />} />
          <Route path="/edit-expense/:id" element={<EditExpense />} />
        </Routes>
        <ExpenseSummary />
        <ExpenseChart />
      </div>
    </Router>
  );
}

export default App;
