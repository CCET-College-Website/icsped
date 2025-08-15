import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header.jsx";
import "./App.css";

export default function App() {
    return (
        <div style={{ width: '100%', margin: 0, padding: 0, position: 'relative' }}>
            <Header />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
}