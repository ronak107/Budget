import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Budget
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/budget-list">List</Link>
          </li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <ul>
          <li></li>
        </ul>
      </div>
    </header>
  );
}
