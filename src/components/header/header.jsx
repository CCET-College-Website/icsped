import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const originalDropdownItems = [
        { href: "/advisory-committee", text: "Advisory Committee" },
        { href: "/organising-committee", text: "Organising Committee" },
        { href: "/keynote-speakers", text: "Keynote Speakers" },
        { href: "/conference-tracks", text: "Conference Tracks" },
        { href: "/registration-details", text: "Registration Details" },
        { href: "/paper-submission", text: "Paper Submission" },
        { href: "/authors-guidelines", text: "Author's Guidelines" },
        { href: "/contact", text: "Contact" }
    ];

    const navItems = [
        { href: "/", text: "Home", priority: 1 },
        { href: "/about", text: "About", priority: 2 },
        { href: "/theme", text: "Conference Theme", priority: 3 },
        { href: "/dates", text: "Important Dates", priority: 4 }
    ];

    const [visibleNavItems, setVisibleNavItems] = useState(navItems);
    const [dropdownItems, setDropdownItems] = useState(originalDropdownItems);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth >= 769) {
                setIsMenuActive(false);
                setIsDropdownActive(false);
            }
            updateNavigation();
        };

        window.addEventListener("resize", handleResize);
        updateNavigation();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const updateNavigation = () => {
        const width = window.innerWidth;
        let hiddenPriorities = [];

        if (width >= 769) {
            if (width < 950) {
                hiddenPriorities = [2, 3, 4];
            } else if (width < 1050) {
                hiddenPriorities = [3, 4];
            } else if (width < 1150) {
                hiddenPriorities = [4];
            }
        }

        const newVisibleItems = navItems.filter(
            (item) => !hiddenPriorities.includes(item.priority)
        );
        const hiddenItems = navItems.filter((item) =>
            hiddenPriorities.includes(item.priority)
        );

        setVisibleNavItems(newVisibleItems);
        setDropdownItems([...hiddenItems.map(item => ({
            href: item.href,
            text: item.text
        })), ...originalDropdownItems]);
    };

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
        if (!isMenuActive) {
            setIsDropdownActive(false);
        }
    };

    const toggleDropdown = (e) => {
        if (windowWidth < 769) {
            e.preventDefault();
            setIsDropdownActive(!isDropdownActive);
        }
    };

    const closeAll = () => {
        setIsMenuActive(false);
        setIsDropdownActive(false);
    };

    return (
        <nav className="navbar">
            <div
                className={`hamburger ${isMenuActive ? "active" : ""}`}
                onClick={toggleMenu}
                id="hamburger"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="brand">ICSPED - 2026</div>

            <ul className={`nav-menu ${isMenuActive ? "active" : ""}`} id="nav-menu">
                {visibleNavItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <Link
                            to={item.href}
                            className="nav-link"
                            onClick={closeAll}
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}

                {(dropdownItems.length > 0 || windowWidth < 769) && (
                    <li className={`nav-item dropdown dropdown-mobile ${isDropdownActive ? "active" : ""}`}>
                        <span
                            className="nav-link"
                            onClick={toggleDropdown}
                            style={{ cursor: "pointer" }}
                            tabIndex={0}
                            onKeyDown={e => { if (e.key === "Enter" || e.key === " ") toggleDropdown(e); }}
                            aria-haspopup="true"
                            aria-expanded={isDropdownActive}
                            role="button"
                        >
                            More
                            <span className="mobile-dropdown-arrow"></span>
                            <div className="dropdown-icon"></div>
                        </span>
                        <div className="dropdown-content">
                            {dropdownItems.map((item, index) => (
                                <Link
                                    to={item.href}
                                    key={index}
                                    onClick={closeAll}
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                        <div className="dropdown-content-mobile">
                            {dropdownItems.map((item, index) => (
                                <Link
                                    to={item.href}
                                    key={index}
                                    onClick={closeAll}
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </li>
                )}
            </ul>
        </nav>
    );
}