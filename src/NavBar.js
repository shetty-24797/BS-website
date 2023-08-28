import React from "react";

import {
    Link
} from "react-router-dom";
import Resource from "./Resource";




function NavBar() {
    return (
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                    <a  className="click" target="_blank" href="https://medium.com/@bharathkumar24797" style={{ textDecoration: 'none' }}> Blogs </a>
                    </li>
                    <li className="nav-item">
                       <a  className="click" target="_blank" href="https://github.com/shetty-24797?tab=projects" style={{ textDecoration: 'none' }}> Projects </a>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle click"> Learnings </span>
                        <Resource className="dropdown" ></Resource>      
                    </li>
                    <li className="nav-item">
                    <Link className="click" to="/products" style={{ textDecoration: 'none' }}> Products </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar;