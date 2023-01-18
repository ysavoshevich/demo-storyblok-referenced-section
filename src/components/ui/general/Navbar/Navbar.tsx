import React from "react";
import CustomLink from "../CustomLink";
import "./index.scss";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
      </ul>
    </nav>
  );
}
