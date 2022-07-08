import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home"></Link>
                </li>
                <li>
                    <Link to="/timer"></Link>
                </li>
            </ul>
        </nav>
    );
}