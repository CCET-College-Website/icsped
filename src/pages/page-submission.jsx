"use client";

import { FileText, ExternalLink, Upload } from "lucide-react";
import styles from "./paper-submission.module.css";

export default function PaperSubmission() {
  return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.card}>
            {/* Background decoration */}
            <div className={styles.bgDecoration1}></div>
            <div className={styles.bgDecoration2}></div>

            <div className={styles.contentWrapper}>
              {/* Header */}
              <div className={styles.headerSection}>
                <div className={styles.iconContainer}>
                  <FileText className={styles.icon} />
                </div>
                <h1 className={styles.mainTitle}>Paper Submission</h1>
                <div className={styles.titleDivider}></div>
              </div>

              {/* Content */}
              <div className={styles.contentSection}>
                <div className={styles.contentItem}>
                  <p className={styles.mainDescription}>
                    Authors are requested to submit the paper electronically to
                    the below mentioned link
                  </p>
                </div>

                {/* File format info */}
                <div className={styles.contentItem}>
                  <div className={styles.formatInfoCard}>
                    <div className={styles.formatHeader}>
                      <Upload className={styles.formatIcon} />
                      <span className={styles.formatTitle}>Accepted Formats</span>
                    </div>
                    <p className={styles.formatDescription}>
                      (.doc, .docx, .pdf through PDF express format) via on-line
                      submission
                    </p>
                  </div>
                </div>

                {/* Submission link */}
                <div className={styles.submissionSection}>
                  <a
                      href="https://icsped-2026.edas.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.submissionButton}
                  >
                    <span>Submit Your Paper</span>
                    <ExternalLink className={styles.buttonIcon} />
                  </a>
                </div>

                {/* Additional info */}
                <div className={styles.additionalInfo}>
                  <p>Submission Portal: icsped-2026.edas.info</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}