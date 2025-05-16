import {Link} from 'react-router-dom';
import "./Navbar.css";

function Navbar () {
    return <div>
        <nav className='nav'>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default Navbar;