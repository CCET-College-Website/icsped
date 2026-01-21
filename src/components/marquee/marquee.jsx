import React from "react";
import marqueeData from "./marquee.json";
import "./marquee.css";

import conferencePlanPdf from "../../assets/pdfs/Conference-Plan.pdf";
import timeSchedulePdf from "../../assets/pdfs/Time-Schedule-of-Conference.pdf";

const ConferenceMarquee = () => {
  const {
    pdfLinks,
    importantDates,
    submission,
    conference,
    contact,
    settings,
  } = marqueeData;

  const pdfFiles = [
    {
      name: pdfLinks.links[0].name,
      path: conferencePlanPdf,
    },
    {
      name: pdfLinks.links[1].name,
      path: timeSchedulePdf,
    },
  ];

  const formatDates = (dates) => {
    return dates.map((date, index) => (
        <span key={index}>
        {date.event}:{" "}
          {date.newDate ? (
              <>
                <span className="strikethrough">{date.date1}</span> →
                <span className="strikethrough">{date.date2}</span> →{" "}
                {date.newDate}
              </>
          ) : (
              date.date
          )}
          {index < dates.length - 1 && " | "}
      </span>
    ));
  };

  return (
      <div className="marquee-container">
        <div className="scrolling-text">
          <a
              href={pdfFiles[0].path}
              className="link-text"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffd700" }}
          >
            {pdfLinks.icon} {pdfFiles[0].name}
          </a>
          <span className="separator">{settings.separator}</span>
          <a
              href={pdfFiles[1].path}
              className="link-text"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffd700" }}
          >
            {pdfLinks.icon} {pdfFiles[1].name}
          </a>
          <span className="separator">{settings.separator}</span>
          <span className="highlight-text">
          {importantDates.icon} {importantDates.title}:
        </span>{" "}
          {formatDates(importantDates.dates)}

          <span className="separator">{settings.separator}</span>
          <span className="highlight-text">
          {submission.icon} {submission.title}:
        </span>{" "}
          <a
              href={submission.url}
              className="link-text"
              target="_blank"
              rel="noopener noreferrer"
          >
            {submission.displayText}
          </a>
          <span className="separator">{settings.separator}</span>
          <span className="highlight-text">
          {conference.icon} {conference.title}:
        </span>{" "}
          {conference.date} | {conference.venue}
          <span className="separator">{settings.separator}</span>
          <span className="highlight-text">
          {contact.icon} {contact.title}:
        </span>{" "}
          {contact.email} | {contact.phone}
        </div>
      </div>
  );
};

export default ConferenceMarquee;
