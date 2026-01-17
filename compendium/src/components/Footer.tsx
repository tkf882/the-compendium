import { Link } from 'react-router';

import './Footer.css';

export function Footer() {
  return(
    <div className="footer">
      <div>
        <Link to="/">home</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </div>
      <p>compendium_</p>
    </div>
  )
}