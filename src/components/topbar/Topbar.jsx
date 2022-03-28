import React from 'react';
import './topbar.scss';
import {Person , Mail} from "@mui/icons-material";

export default function Topbar({setMenuOpen , menuOpen}) {
    return (
      <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              genius.
            </a>
            <div className="itemContainer">
              <Person className="icon" />
              <span>+22 029 289 19</span>
            </div>
            <div className="itemContainer">
              <Mail className="icon" />
              <span>amang9833@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamberger" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    );
}
