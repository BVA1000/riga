import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <div id="header">
      <h1>Riga Latvia</h1>

      <div className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
