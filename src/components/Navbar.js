import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/add-expense">Add Expense</Link>
    </nav>
  );
};

export default Navbar;
