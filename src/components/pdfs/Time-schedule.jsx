// Time-schedule.jsx
import React from 'react';
import styles from './PdfViewer.module.css';
import timeSchedulePdf from '../../assets/pdfs/Time-Schedule-of-Conference.pdf';

export default function TimeSchedule() {
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = timeSchedulePdf;
        link.download = 'Time_Schedule_of_Conference.pdf';
        link.click();
    };

    return (
        <div className={styles.pdfViewerPage}>
            <div className={styles.pdfViewerContainer}>
                <div className={styles.pdfViewerHeader}>
                    <h1 className={styles.pdfViewerTitle}>Time Schedule</h1>
                </div>
                <div className={styles.pdfViewerContent}>
                    <iframe
                        src={timeSchedulePdf}
                        className={styles.pdfIframe}
                        title="Time Schedule PDF"
                    />
                    <div className={styles.downloadSection}>
                        <button
                            className={`${styles.pdfButton} ${styles.downloadButton}`}
                            onClick={downloadPDF}
                        >
                            Download PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}