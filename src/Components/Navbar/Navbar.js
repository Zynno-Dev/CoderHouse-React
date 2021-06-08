import React from "react";
import logo from "./logo.svg";
import {cartWidget} from "../CartWidget/cartWidget";
import './Navbar.css';

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            CoderHouse React
          </a>
          <ul className="tofloat">
            <li>
              <a href="">Productos</a>
            </li>
            <li>
                <cartWidget/>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
