import menuImage from '../assets/hamburger-menu.svg';

import './Sidebar.css';

export function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <p>Sidebar</p>
          <button className="menu-button">
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