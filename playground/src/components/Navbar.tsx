import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"></Link>
                </li>
                <li>
                    <Link to="/home"></Link>
                </li>
                <li>
                    <Link to="/about"></Link>
                </li>
                <li>
                    <Link to="/timer"></Link>
                </li>
            </ul>
        </nav>
    );
}