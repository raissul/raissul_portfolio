import React from 'react';
import Header from '../../components/ui/Header';
import TerminalHero from './components/TerminalHero';
import LiveStatusDashboard from './components/LiveStatusDashboard';
import SkillsMatrix from './components/SkillsMatrix';
import FeaturedProjects from './components/FeaturedProjects';
import CurrentlyLearning from './components/CurrentlyLearning';
import SocialProof from './components/SocialProof';

const HomepageDevOpsPortfolioDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Terminal Animation */}
      <TerminalHero />
      
      {/* Live Status Dashboard */}
      <LiveStatusDashboard />
      
      {/* Skills Matrix Visualization */}
      <SkillsMatrix />
      
      {/* Featured Projects Showcase */}
      <FeaturedProjects />
      
      {/* Currently Learning Section */}
      <CurrentlyLearning />
      
      {/* Social Proof & Credibility */}
      <SocialProof />
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                  <span className="text-primary-foreground font-bold">R</span>
                </div>
                <div>
                  <div className="text-lg font-bold">Raissul</div>
                  <div className="text-sm text-secondary-foreground/80">DevOps Engineer</div>
                </div>
              </div>
              <p className="text-secondary-foreground/80 text-sm mb-4 max-w-md">
                Building reliable systems and automating infrastructure for the future of technology. 
                Passionate about DevOps, cloud computing, and continuous learning.
              </p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.open('https://github.com/raissul', '_blank')}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
                <button
                  onClick={() => window.open('https://linkedin.com/in/raissul', '_blank')}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button
                  onClick={() => window.open('mailto:raissul@example.com')}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  <span className="sr-only">Email</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-foreground mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => window.location.href = '/about-professional-journey'}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = '/technical-skills-experience-matrix'}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = '/projects-technical-laboratory'}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = '/contact-professional-opportunities'}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-secondary-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => window.open('/assets/resume.pdf', '_blank')}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    Resume
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.location.href = '/live-monitoring-project-status'}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    Live Status
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.open('https://github.com/raissul', '_blank')}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    GitHub
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.open('https://medium.com/@raissul', '_blank')}
                    className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-foreground/60 text-sm">
              © {new Date().getFullYear()} Sojib "Raissul" Hossain. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-secondary-foreground/60 text-sm">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomepageDevOpsPortfolioDashboard;