import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

export default function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}
