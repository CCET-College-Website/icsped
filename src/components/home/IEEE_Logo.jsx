import React from 'react';
import styles from './IEEE_Logo.module.css';

const IEEE_Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <svg className={styles.logoSvg} viewBox="0 0 143.36 61.7" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <style>
                        {`
                            .cls-1 { fill: #99aab0; }
                            .cls-2 { 
                                fill: #006492; 
                                font-size: 48.9px; 
                                stroke: #006492; 
                                stroke-miterlimit: 10; 
                                font-family: Bahnschrift, Bahnschrift; 
                                font-variation-settings: 'wght' 400, 'wdth' 100; 
                            }
                            .cls-3 { 
                                font-size: 15.83px; 
                                fill: #0b608e; 
                                font-family: Bahnschrift, Bahnschrift; 
                                font-variation-settings: 'wght' 400, 'wdth' 100; 
                            }
                            .cls-4 { fill: #0b608e; }
                            .cls-5 { fill: #4090ba; }
                            .cls-6 { fill: #d4fffc; }
                        `}
                    </style>
                </defs>

                {/* Building elements with original IDs */}
                <rect id="pillar1" className={`cls-4 ${styles.pillar1}`} x=".48" y="25.88" width="12.48" height="31.92"/>
                <rect id="pillar2" className={`cls-4 ${styles.pillar2}`} x="22.08" y="25.88" width="12.48" height="31.92"/>
                <path id="arc" className={`cls-4 ${styles.arc}`} d="M22.08,41.84c.49-3.3-2.05-6.01-4.56-6.01s-5.05,2.7-4.56,6.01v-15.96h9.12v15.96Z"/>

                {/* Rows */}
                <rect id="r1" className={`cls-5 ${styles.r1}`} x=".48" y="24.8" width="34.08" height="1.08"/>
                <rect id="r2" className={`cls-5 ${styles.r2}`} x=".48" y="23.06" width="34.08" height="1.08"/>
                <rect id="r3" className={`cls-4 ${styles.r3}`} y="23.72" width="35.04" height="1.08"/>
                <rect id="r4" className={`cls-4 ${styles.r4}`} x="1.44" y="20.84" width="32.16" height="2.22"/>
                <rect id="r5" className={`cls-5 ${styles.r5}`} x="1.44" y="20.06" width="32.16" height=".78"/>
                <rect id="r6" className={`cls-4 ${styles.r6}`} x="1.44" y="17.36" width="32.16" height="2.7"/>
                <rect id="r7" className={`cls-5 ${styles.r7}`} x="4.44" y="16.4" width="26.16" height=".96"/>
                <rect id="r8" className={`cls-4 ${styles.r8}`} x="4.44" y="10.28" width="26.16" height="6.12"/>
                <rect id="sql2" className={`cls-5 ${styles.sql2}`} x="4.44" y="12.56" width="26.16" height=".78"/>
                <rect id="w1" className={`cls-6 ${styles.w1}`} x="10.44" y="13.34" width="13.95" height="1.86"/>
                <circle id="w2a" className={`cls-6 ${styles.w2a}`} cx="25.32" cy="14.27" r=".93"/>
                <circle id="w2b" className={`cls-6 ${styles.w2b}`} cx="9.51" cy="14.27" r=".93"/>
                <circle id="w1a" className={`cls-6 ${styles.w1a}`} cx="30.6" cy="30.2" r=".93"/>
                <circle id="w1b" className={`cls-6 ${styles.w1b}`} cx="5.37" cy="30.2" r=".93"/>
                <rect id="r9" className={`cls-1 ${styles.r9}`} x="10.44" y="9.2" width="13.95" height="1.08"/>
                <rect id="r10" className={`cls-1 ${styles.r10}`} x="14.4" y="8.12" width="6.6" height="1.08"/>
                <rect id="r11" className={`cls-1 ${styles.r11}`} x="15.6" y="7.34" width="3.84" height=".78"/>
                <rect id="sql1" className={`cls-5 ${styles.sql1}`} x="10.44" y="9.74" width="14.22" height=".54"/>
                <rect id="sq2a" className={`cls-5 ${styles.sq2a}`} x=".48" y="39.74" width="12.48" height="1.44"/>
                <rect id="sq1a" className={`cls-5 ${styles.sq1a}`} x=".48" y="43.94" width="12.48" height="1.44"/>
                <rect id="sq2b" className={`cls-5 ${styles.sq2b}`} x="22.08" y="39.98" width="12.48" height="1.44"/>
                <rect id="sq1b" className={`cls-5 ${styles.sq1b}`} x="22.08" y="43.94" width="12.48" height="1.44"/>

                {/* Text with animation classes */}
                <g transform="translate(35.04 42.31) scale(1.07 1)">
                    <text className="cls-2">
                        <tspan className={styles.charI1} x="0" y="0">I</tspan>
                        <tspan className={styles.charE1} x="11" y="0">E</tspan>
                        <tspan className={styles.charE2} x="35" y="0">E</tspan>
                        <tspan className={styles.charE3} x="59" y="0">E</tspan>
                    </text>
                </g>

                <g transform="translate(37.92 57.42) scale(1.11 1)">
                    <text className="cls-3">
                        <tspan className={styles.charD} x="0" y="0">D</tspan>
                        <tspan className={styles.charE4} x="9" y="0">e</tspan>
                        <tspan className={styles.charL1} x="17" y="0">l</tspan>
                        <tspan className={styles.charH} x="21" y="0">h</tspan>
                        <tspan className={styles.charI2} x="30" y="0">i</tspan>
                        <tspan className={styles.charSpace} x="34" y="0"> </tspan>
                        <tspan className={styles.charS} x="38" y="0">S</tspan>
                        <tspan className={styles.charE5} x="47" y="0">e</tspan>
                        <tspan className={styles.charC} x="55" y="0">c</tspan>
                        <tspan className={styles.charT} x="62" y="0">t</tspan>
                        <tspan className={styles.charI3} x="68" y="0">i</tspan>
                        <tspan className={styles.charO} x="72" y="0">o</tspan>
                        <tspan className={styles.charN} x="80" y="0">n</tspan>
                    </text>
                </g>
            </svg>
        </div>
    );
};

export default IEEE_Logo;