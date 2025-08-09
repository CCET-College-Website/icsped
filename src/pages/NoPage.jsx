import React from "react";
import { Link } from "react-router-dom";

export default function NoPage() {
    return (
        <div style={{
            padding: "20px",
            textAlign: "center",
            marginTop: "100px",
            minHeight: "calc(100vh - 180px)"
        }}>
            <h1>Page Under Construction</h1>
            <p>This section is currently being developed.</p>
            <Link
                to="/"
                style={{
                    color: "#5E0847",
                    textDecoration: "underline",
                    display: "inline-block",
                    marginTop: "20px"
                }}
            >
                Return to Home
            </Link>
        </div>
    );
}