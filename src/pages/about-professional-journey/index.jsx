import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProfessionalTimeline from './components/ProfessionalTimeline';
import PersonalPhilosophy from './components/PersonalPhilosophy';
import SystemConnectionAnimation from './components/SystemConnectionAnimation';
import ResumeSection from './components/ResumeSection';
import Icon from '../../components/AppIcon';


const AboutProfessionalJourney = () => {
  useEffect(() => {
    // Set page title
    document.title = "About & Professional Journey - Raissul Portfolio";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Professional Timeline */}
        <ProfessionalTimeline />
        
        {/* System Connection Animation */}
        <SystemConnectionAnimation />
        
        {/* Personal Philosophy */}
        <PersonalPhilosophy />
        
        {/* Resume Section */}
        <ResumeSection />
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Raissul</div>
                  <div className="text-sm text-muted-foreground">DevOps Engineer</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Building reliable systems and bridging technologies to create seamless digital experiences. Always learning, always improving.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/raissul" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="Github" size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/raissul-hossain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="Linkedin" size={20} />
                </a>
                <a 
                  href="mailto:raissul.hossain@email.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/homepage-dev-ops-portfolio-dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/technical-skills-experience-matrix" className="text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="/projects-technical-laboratory" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact-professional-opportunities" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/assets/resume-raissul.pdf" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                    Download Resume
                  </a>
                </li>
                <li>
                  <a href="/live-monitoring-project-status" className="text-muted-foreground hover:text-foreground transition-colors">
                    Live Monitoring
                  </a>
                </li>
                <li>
                  <a href="https://github.com/raissul" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    GitHub Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Sojib "Raissul" Hossain. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Built with React, Tailwind CSS, and passion for great UX
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutProfessionalJourney;