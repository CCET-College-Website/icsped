import React from "react";
import "./footer.css";
import footerImage from "../../assets/footer/footer_bg.jpg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-left">
                <h2>ICSPED - 2026</h2>
                <p>Copyright © 2025 All rights reserved</p>
                <nav>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">MORE ▲</a>
                </nav>
            </div>
            <div className="footer-right">
                <img
                    src={footerImage}
                    alt="Abstract hexagon geometric background"
                    className="footer-bg-image"
                />
            </div>
        </footer>
    );
};

export default Footer;