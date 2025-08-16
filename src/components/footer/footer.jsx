import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";   // ✅ import Link
import styles from "./footer.module.css";

const Footer = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleDropdown = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const getSectionOrder = (section) => {
        if (activeSection === section) return 0;
        if (activeSection === null) return 1;
        return 2;
    };

    const quickLinks = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/theme", text: "Conference Theme" },
        { href: "/dates", text: "Important Dates" }
    ];

    const committeeLinks = [
        { href: "/advisory-committee", text: "Advisory Committee" },
        { href: "/organising-committee", text: "Organising Committee" },
        { href: "/keynote-speakers", text: "Keynote Speakers" }
    ];

    const conferenceInfo = [
        { href: "/conference-tracks", text: "Conference Tracks" },
        { href: "/registration-details", text: "Registration Details" },
        { href: "/paper-submission", text: "Paper Submission" },
        { href: "/authors-guidelines", text: "Author's Guidelines" },
        { href: "/contact", text: "Contact" }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.honeycombBackground}>
                <div className={styles.honeycombPattern}></div>
            </div>
            <div className={styles.footerContent}>
                <div className={`${styles.footerSection} ${styles.mainSection}`}>
                    <h2 className={styles.title}>ICSPED - 2026</h2>
                    <p className={styles.description}>
                        International Conference on Sustainable Practices in Engineering and Development
                    </p>
                    <p className={styles.copyright}>
                        Copyright © 2025 All rights reserved
                    </p>
                </div>

                <div className={styles.dropdownContainer}>
                    <div className={styles.desktopDropdownWrapper}>
                        {/* Quick Links */}
                        <div
                            className={`${styles.footerSection} ${styles.dropdownSection}`}
                            style={{ order: getSectionOrder("quickLinks") }}
                        >
                            <button
                                className={styles.sectionTitleButton}
                                onClick={() => toggleDropdown("quickLinks")}
                                aria-expanded={activeSection === "quickLinks"}
                            >
                                <h3 className={styles.sectionTitle}>Quick Links</h3>
                                {activeSection === "quickLinks" ? (
                                    <ChevronUp className={styles.dropdownIcon} size={18} />
                                ) : (
                                    <ChevronDown className={styles.dropdownIcon} size={18} />
                                )}
                            </button>
                            <div
                                className={`${styles.dropdownContent} ${
                                    activeSection === "quickLinks" ? styles.open : ""
                                }`}
                            >
                                <ul className={styles.linkList}>
                                    {quickLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link to={item.href} className={styles.footerLink}>
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Committee & Speakers */}
                        <div
                            className={`${styles.footerSection} ${styles.dropdownSection}`}
                            style={{ order: getSectionOrder("committee") }}
                        >
                            <button
                                className={styles.sectionTitleButton}
                                onClick={() => toggleDropdown("committee")}
                                aria-expanded={activeSection === "committee"}
                            >
                                <h3 className={styles.sectionTitle}>Committee & Speakers</h3>
                                {activeSection === "committee" ? (
                                    <ChevronUp className={styles.dropdownIcon} size={18} />
                                ) : (
                                    <ChevronDown className={styles.dropdownIcon} size={18} />
                                )}
                            </button>
                            <div
                                className={`${styles.dropdownContent} ${
                                    activeSection === "committee" ? styles.open : ""
                                }`}
                            >
                                <ul className={styles.linkList}>
                                    {committeeLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link to={item.href} className={styles.footerLink}>
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Conference Info */}
                        <div
                            className={`${styles.footerSection} ${styles.dropdownSection}`}
                            style={{ order: getSectionOrder("conferenceInfo") }}
                        >
                            <button
                                className={styles.sectionTitleButton}
                                onClick={() => toggleDropdown("conferenceInfo")}
                                aria-expanded={activeSection === "conferenceInfo"}
                            >
                                <h3 className={styles.sectionTitle}>Conference Info</h3>
                                {activeSection === "conferenceInfo" ? (
                                    <ChevronUp className={styles.dropdownIcon} size={18} />
                                ) : (
                                    <ChevronDown className={styles.dropdownIcon} size={18} />
                                )}
                            </button>
                            <div
                                className={`${styles.dropdownContent} ${
                                    activeSection === "conferenceInfo" ? styles.open : ""
                                }`}
                            >
                                <ul className={styles.linkList}>
                                    {conferenceInfo.map((item, index) => (
                                        <li key={index}>
                                            <Link to={item.href} className={styles.footerLink}>
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
