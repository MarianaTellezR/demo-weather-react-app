import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <ul>
        <li>
          <a href="/">Lisbon</a>
        </li>
        <li>
          <a href="/">Paris</a>
        </li>
        <li>
          <a href="/">Sydney</a>
        </li>
        <li>
          <a href="/">San Francisco</a>
        </li>
      </ul>
    </div>
  );
}
