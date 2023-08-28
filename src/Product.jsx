import React from "react";
import {
    Link
} from "react-router-dom";
import Resource from "./Resource";


function Product() {
    return (
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                    <a  className="click" target="_blank" href="https://medium.com/@bharathkumar24797" style={{ textDecoration: 'none' }}> Phones </a>
                    </li>
                    <li className="nav-item">
                       <a  className="click" target="_blank" href="https://github.com/shetty-24797?tab=projects" style={{ textDecoration: 'none' }}> Headphones </a>
                    </li>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle click"> Vehicle </span>
                    </li>
                    <li className="nav-item">
                    <Link className="click" to="/products" style={{ textDecoration: 'none' }}> Others </Link>
                    </li>
                </ul>
            </nav>
    )
}

export default Product;