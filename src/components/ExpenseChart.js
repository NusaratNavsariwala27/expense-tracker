import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
  const { expenses } = useContext(ExpenseContext);

  const categories = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + parseFloat(curr.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: ["#066aab", "#36A2EB", "#9E9E9E"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default ExpenseChart;
