import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (

        <>
        <nav>

        <div className="navbar-container">

      <div className="navbar-logo">Shadow Tales</div>

      <nav className="navbar-links">

        <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        <Link to="/choose-state" className="navbar-link">Want To Read</Link>
        <Link to="/add-story" className="navbar-link">Want To Write</Link>
        <Link to="/game" className="navbar-link">If you dare, Then Play</Link>
    
      </nav>

    </div>

        </nav>

        </>

    );

};

export default Navbar