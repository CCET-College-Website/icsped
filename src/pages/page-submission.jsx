"use client";

import { FileText, ExternalLink, Upload } from "lucide-react";
import "./paper-submission.css";

export default function PaperSubmission() {
  return (
    <div className="paper-submission-container">
      <div className="paper-submission-wrapper">
        <div className="paper-submission-card">
          {/* Background decoration */}
          <div className="bg-decoration-1"></div>
          <div className="bg-decoration-2"></div>

          <div className="content-wrapper">
            {/* Header */}
            <div className="header-section">
              <div className="icon-container">
                <FileText className="icon" />
              </div>
              <h1 className="main-title">Paper Submission</h1>
              <div className="title-divider"></div>
            </div>

            {/* Content */}
            <div className="content-section">
              <div className="content-item">
                <p className="main-description">
                  Authors are requested to submit the paper electronically to
                  the below mentioned link
                </p>
              </div>

              {/* File format info */}
              <div className="content-item">
                <div className="format-info-card">
                  <div className="format-header">
                    <Upload className="format-icon" />
                    <span className="format-title">Accepted Formats</span>
                  </div>
                  <p className="format-description">
                    (.doc, .docx, .pdf through PDF express format) via on-line
                    submission
                  </p>
                </div>
              </div>

              {/* Submission link */}
              <div className="submission-section">
                <a
                  href="https://icsped-2026.edas.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="submission-button"
                >
                  <span>Submit Your Paper</span>
                  <ExternalLink className="button-icon" />
                </a>
              </div>

              {/* Additional info */}
              <div className="additional-info">
                <p>Submission Portal: icsped-2026.edas.info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
