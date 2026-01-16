import { useState } from 'react'
import { Link } from 'react-router';

import linkedinImage from '../assets/linkedin-rounded.svg';
import githubImage from '../assets/github2.svg';
import menuImage from '../assets/hamburger-menu.svg';

import './Header.css';
import './Sidebar.css';

type headerProps ={
  selected: {
    name: string;
  }
}

export function Header({selected}:headerProps) {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  function openSidebar() {
    setSidebarStatus(true);
  }

  function closeSidebar() {
    setSidebarStatus(false);
  }


  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/" className="header-logo" viewTransition>T &#183; K &#183; F</Link>
        </div>
        <div className="header-right">
          <div className="header-right-container-nav">
            <div className={`header-right-link-container${selected.name === 'home' ? '-selected' : ''}`}>
              <Link to="/" className="header-right-nav-link">Home</Link>
            </div>
            <div className={`header-right-link-container${selected.name === 'portfolio' ? '-selected' : ''}`}>
              <Link to="/portfolio" className="header-right-nav-link">Portfolio</Link>
            </div>
            <div className={`header-right-link-container${selected.name === 'about' ? '-selected' : ''}`}>
              <Link to="/about" className="header-right-nav-link">About</Link>
            </div>
            <div className={`header-right-link-container${selected.name === 'contact' ? '-selected' : ''}`}>
              <Link to="/contact" className="header-right-nav-link">Contact</Link>
            </div>
          </div>
          <div className="header-right-container-icons">
            <a href="https://www.linkedin.com/in/trevor-favel/">
              <img className="header-icon" src={linkedinImage}/>
            </a>
            <a href="https://github.com/tkf882">
              <img className="header-icon" src={githubImage}/>
            </a>
          </div>
          <button className="menu-button" onClick={openSidebar}>
            <img className="header-icon" src={menuImage}/>
          </button>
        </div>
      </div>

      <div className={`sidebar ${sidebarStatus ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-header">
          <p>Sidebar</p>
          <button className="menu-button" onClick={closeSidebar}>
            <img className="header-icon" src={menuImage}/>
          </button>
        </div>
        <a className="sidebar-link" href="https://github.com/tkf882/the-compendium">Repo link</a>
        <a className="sidebar-link" href="https://www.sfu.ca/students/honour-rolls/deans-honour-roll.html">Dean's Honour Roll Fall 2025</a>
      </div>
      <div className="overlay"></div>
    </>
  )
}