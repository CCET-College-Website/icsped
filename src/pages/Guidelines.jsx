import "./Guidelines.css";

// Import image from assets
import GuidelinesBanner from "../assets/guidelines/Guidelines.png";

const AuthorGuidelines = () => {
  return (
      <div className="author-guidelines">
        <div className="header-section">
          <h1 className="main-title">AUTHOR'S GUIDELINES</h1>
          <div className="title-underline"></div>
        </div>

        <div className="banner-section">
          <img
              src={GuidelinesBanner}
              alt="Guidelines banner with paper airplane and icons"
              className="banner-image"
          />
        </div>

        <div className="content-section">
          <h2 className="section-title">Guidelines to Authors</h2>
          <div className="section-underline"></div>

          <p className="intro-text">
            Below are some useful instructions to assist the authors to submit their papers for ICSPED, January, 2026
          </p>

          <div className="guidelines-content">
            <p className="guideline-item">
              <strong>ORIGINALITY OF SUBMITTED PAPERS:</strong> <br />
              Papers submitted to ICSPED-26 shall contain original work
              by the author(s) that have not been published or submitted for publication elsewhere. The IEEE anti-
              plagiarism policy is applicable to all submissions. The author(s) are solely responsible for any plagiarized
              submission.
            </p>

            <p className="guideline-item">
              <strong>PAPER SUBMISSION:</strong> <br />
              All papers are required to be prepared and submitted in the IEEE Standard
              two –column conference format of A4 size in English. Papers must be four to six pages in length, including
              texts, Figures, photographs and references. Literature review only papers are not accepted. Any submitted
              paper that exceeds six pages will be rejected. The first page must include the title of the paper,
              author(s), affiliations, address and text. Please do not include page numbers on submitted documents.
              Failing to conform to the standard format will result in rejection. Detailed format information is available
              in IEEE Website. The authors are required to use the standard IEEE manuscript template for conferences. The
              Microsoft Word template can be downloaded from IEEE conference template page:{" "}
              <a
                  href="https://www.ieee.org/conferences/publishing/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-text"
              >
                Click here
              </a>
            </p>

            <p className="guideline-item">
              The paper shall consist of original and previously unpublished work, including specific results. Literature
              review only papers are not accepted. The 'Introduction' of the paper shall clearly indicate the unique
              aspects of the submission and how it is related to the previous work. All final paper submissions must be
              electronic, using IEEE Xplore compliant PDF format (*.pdf). Failure to do so may result in the rejection of
              the paper. Type 3 fonts (bitmaps) will not be accepted. Authors can use the IEEE PDF eXpress to generate
              compliant PDF Files for final submission.
            </p>

            <p className="guideline-item">
              <strong>PAPER UPLOAD:</strong>
            </p>
            <p className="guideline-item">
              All papers must be submitted in PDF or as a Microsoft Word Document via EDAS Platform. The submitting
              authors may be required to create a EDAS account before uploading the paper (if the submitting author does
              not have a EDAS account). While uploading the paper, the authors should provide the title of the paper, an
              abstract of no more than 250 words in the respective text boxes in the paper submission page. Please note
              that all accepted papers that are registered and presented will be sent for possible inclusion in IEEE
              Xplore. The authors must agree to the IEEE copyright conditions and sign the IEEE copyright form as part of
              the online submission process. All submitted papers will be peer reviewed by the Technical Program
              Committees (TPC).
            </p>
          </div>

          <div className="read-more-section">
            <a
                href="https://www.ieee.org/conferences/publishing/templates"
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-link"
            >
              Read More ›
            </a>
          </div>
        </div>
      </div>
  );
};

export default AuthorGuidelines;
