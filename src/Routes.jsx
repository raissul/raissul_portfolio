import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import LiveMonitoringProjectStatus from "pages/live-monitoring-project-status";
import ProjectsTechnicalLaboratory from "pages/projects-technical-laboratory";
import TechnicalSkillsExperienceMatrix from "pages/technical-skills-experience-matrix";
import AboutProfessionalJourney from "pages/about-professional-journey";
import HomepageDevOpsPortfolioDashboard from "pages/homepage-dev-ops-portfolio-dashboard";
import ContactProfessionalOpportunities from "pages/contact-professional-opportunities";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<HomepageDevOpsPortfolioDashboard />} />
        <Route path="/live-monitoring-project-status" element={<LiveMonitoringProjectStatus />} />
        <Route path="/projects-technical-laboratory" element={<ProjectsTechnicalLaboratory />} />
        <Route path="/technical-skills-experience-matrix" element={<TechnicalSkillsExperienceMatrix />} />
        <Route path="/about-professional-journey" element={<AboutProfessionalJourney />} />
        <Route path="/homepage-dev-ops-portfolio-dashboard" element={<HomepageDevOpsPortfolioDashboard />} />
        <Route path="/contact-professional-opportunities" element={<ContactProfessionalOpportunities />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;