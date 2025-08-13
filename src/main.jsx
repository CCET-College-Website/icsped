import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import ConferenceTheme from "./pages/conference-theme";
import PaperSubmission from "./pages/page-submission";
import "./index.css";
import RegistrationDetails from "./components/Registration/Registration-details";
import About from "./pages/About";
import OrganizingCommittee from "./pages/OrganizingCommittee";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="theme" element={<ConferenceTheme />} />
          <Route path="dates" element={<NoPage />} />
          <Route path="advisory-committee" element={<NoPage />} />
          <Route path="organising-committee" element={<OrganizingCommittee />} />
          <Route path="keynote-speakers" element={<NoPage />} />
          <Route path="conference-tracks" element={<NoPage />} />
          <Route path="registration-details" element={<RegistrationDetails/>} />
          <Route path="paper-submission" element={<PaperSubmission />} />
          <Route path="authors-guidelines" element={<NoPage />} />
          <Route path="contact" element={<NoPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
