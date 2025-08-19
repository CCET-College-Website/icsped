import React from 'react';
import styles from './AdvisoryCommittee.module.css';

const AdvisoryCommittee = () => {
    const advisors = [
        {
            name: "Prof. Elena Simona Lohan",
            title: "Professor",
            institution: "Tampere University, Finland"
        },
        {
            name: "Prof. Rajiv Ahuja",
            title: "Director",
            institution: "Indian Institute of Technology, Ropar, India"
        },
        {
            name: "Dr. Veena Mendiratta",
            title: "Research Leader, Nokia Bell Labs (retired); Adjunct Professor",
            institution: "Northwestern University; United States"
        },
        {
            name: "Prof. Renu Vig",
            title: "Vice Chancellor",
            institution: "Panjab University, India"
        },
        {
            name: "Dr. Yajulu Medury",
            title: "Vice Chancellor",
            institution: "Mahindra University, Telangana, India"
        },
        {
            name: "Prof. S. Anantha Ramakrishna",
            title: "Director",
            institution: "CSIR-CSIO, Chandigarh, India"
        },
        {
            name: "Prof. Alok K Mittal",
            title: "Emeritus Professor",
            institution: "NSUIT Delhi, India"
        },
        {
            name: "Prof. Ghanshyam Singh",
            title: "Prof & Director, Centre for smart information & Communication systems",
            institution: "University of Johannesburg"
        },
        {
            name: "Prof. S K Singh",
            title: "Vice Chancellor",
            institution: "Rajasthan Technical University, Kota, Rajasthan, India"
        },
        {
            name: "Dr. Tapas Chakravarty",
            title: "Chief Scientist",
            institution: "TCS Kolkata, India"
        },
        {
            name: "Sh. Vikas Trikha",
            title: "Director General",
            institution: "Semi-conductor laboratory, Mohali, India"
        }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Advisory Committee</h1>
            <div className={styles.underline}></div>

            <h2 className={styles.sectionTitle}>Conference Advisors</h2>

            <div className={styles.advisorsList}>
                {advisors.map((advisor, index) => (
                    <div key={index} className={`${styles.advisor} ${index % 2 === 0 ? styles.slideLeft : styles.slideRight}`}>
                        <div className={styles.advisorName}>{advisor.name}</div>
                        <div className={styles.advisorTitle}>{advisor.title}</div>
                        <div className={styles.advisorInstitution}>{advisor.institution}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvisoryCommittee;