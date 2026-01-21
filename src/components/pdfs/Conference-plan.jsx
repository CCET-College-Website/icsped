// Conference-plan.jsx
import React from 'react';
import styles from './PdfViewer.module.css';
import conferencePlanPdf from '../../assets/pdfs/Conference-Plan.pdf';

export default function ConferencePlan() {
    const downloadPDF = () => {
        const link = document.createElement('a');
        link.href = conferencePlanPdf;
        link.download = 'Conference_Plan.pdf';
        link.click();
    };

    return (
        <div className={styles.pdfViewerPage}>
            <div className={styles.pdfViewerContainer}>
                <div className={styles.pdfViewerHeader}>
                    <h1 className={styles.pdfViewerTitle}>Conference Plan</h1>
                </div>
                <div className={styles.pdfViewerContent}>
                    <iframe
                        src={conferencePlanPdf}
                        className={styles.pdfIframe}
                        title="Conference Plan PDF"
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