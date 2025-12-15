import React from 'react'
import "../components/Header.css"
function Header() {
    return (
    <div className="header">
      <div className="header-left">
        <span>HUMMING</span>
        <span>BIRD.</span>
      </div>

      <div className="header-right">
        <a href="#">Episodes</a>
        <a href="#">About</a>
      </div>

      <div className="menu-icon">☰</div>
    </div>
  );
}

export default Header
