import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import "./App.css";

export default function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // Older browsers

        console.log("[ScrollDebug] Path:", location.pathname, "| Scroll applied");
    }, [location.pathname]);

    return (
        <div style={{ width: '100%', margin: 0, padding: 0 }}>
            <Header />
            <div className="main-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}