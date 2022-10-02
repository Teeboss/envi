import "../App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = (props) => {
  return (
    <nav className="flexDisplayNav">
      <h1>Tobiloba</h1>
      <ul className="flex">
        <li>
          <a href="/about" className="btn btn-primary">
            First Link
          </a>
        </li>
        <li>First Link</li>
        <li>First Link</li>
        <li>First Link</li>
      </ul>
    </nav>
  );
};
export default Nav;
