import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="navbar">
      <h1>To Do List</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Add Task</Link>
        <button className="toggle-mode" onClick={toggleDarkMode}>
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
