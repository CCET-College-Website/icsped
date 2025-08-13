import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header.jsx";
import "./App.css";

export default function App() {
    return (
        <div>
            <Header />
            <div style={{ paddingTop: "80px" }}>
            <Outlet />
            </div>
        </div>
    );
}