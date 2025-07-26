import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ContactForm from './components/ContactForm';
import DirectContactMethods from './components/DirectContactMethods';
import AvailabilityStatus from './components/AvailabilityStatus';
import LocationInfo from './components/LocationInfo';

const ContactProfessionalOpportunities = () => {
  const [activeTab, setActiveTab] = useState('contact-form');

  const tabOptions = [
    {
      id: 'contact-form',
      label: 'Contact Form',
      icon: 'Mail',
      description: 'Send detailed inquiry'
    },
    {
      id: 'direct-contact',
      label: 'Direct Contact',
      icon: 'Phone',
      description: 'Immediate communication'
    },
    {
      id: 'availability',
      label: 'Availability',
      icon: 'Clock',
      description: 'Status & schedule'
    },
    {
      id: 'location',
      label: 'Location & Remote',
      icon: 'MapPin',
      description: 'Work preferences'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contact-form':
        return <ContactForm />;
      case 'direct-contact':
        return <DirectContactMethods />;
      case 'availability':
        return <AvailabilityStatus />;
      case 'location':
        return <LocationInfo />;
      default:
        return <ContactForm />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Zap" size={16} />
                <span>Open to New Opportunities</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Contact & Professional
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-3">
                  Opportunities
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Ready to discuss your next DevOps challenge? Let's connect and explore how my expertise in 
                cloud infrastructure, automation, and system reliability can drive your projects forward.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => setActiveTab('contact-form')}
                  iconName="Send"
                  iconPosition="right"
                >
                  Send Message
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://calendly.com/raissul-dev', '_blank')}
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Meeting
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Response Time', value: '< 24hrs', icon: 'Clock', color: 'text-success' },
                { label: 'Current Role', value: 'DevOps Engineer', icon: 'Briefcase', color: 'text-accent' },
                { label: 'Experience', value: '2+ Years', icon: 'TrendingUp', color: 'text-primary' },
                { label: 'Availability', value: 'Open', icon: 'CheckCircle', color: 'text-success' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-xl border border-border shadow-soft">
                  <Icon name={stat.icon} size={24} className={`${stat.color} mx-auto mb-2`} />
                  <div className="text-lg font-semibold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="py-8 px-6 lg:px-8 border-b border-border bg-card/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {tabOptions.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab.icon} size={16} />
                  <div className="text-left">
                    <div>{tab.label}</div>
                    <div className="text-xs opacity-75">{tab.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {renderTabContent()}
          </div>
        </section>

        {/* Professional References Section */}
        <section className="py-12 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Professional References
              </h2>
              <p className="text-muted-foreground">
                References and recommendations available upon request from current and previous colleagues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Users" size={20} className="text-accent" />
                  <h3 className="font-semibold text-foreground">Team References</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Current and former team members who can speak to my technical skills, 
                  collaboration abilities, and project contributions.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => {
                    const subject = encodeURIComponent('Reference Request - Raissul Hossain');
                    const body = encodeURIComponent('Hi Raissul,\n\nI would like to request professional references for a potential opportunity. Please provide contact information for relevant team members or supervisors.\n\nThank you');
                    window.location.href = `mailto:raissul.dev@gmail.com?subject=${subject}&body=${body}`;
                  }}
                >
                  Request Team References
                </Button>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Award" size={20} className="text-accent" />
                  <h3 className="font-semibold text-foreground">LinkedIn Recommendations</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Professional recommendations and endorsements from colleagues, 
                  managers, and clients available on LinkedIn profile.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="right"
                  onClick={() => window.open('https://linkedin.com/in/raissul-hossain', '_blank')}
                >
                  View LinkedIn Profile
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-8 px-6 lg:px-8 bg-error/5 border-t border-error/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 text-center">
              <Icon name="AlertTriangle" size={20} className="text-error" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Urgent Technical Issues?
                </h3>
                <p className="text-sm text-muted-foreground">
                  For critical system outages or urgent technical consultations, 
                  mark your email as "URGENT" for priority response within 4-8 hours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent">
                <Icon name="Terminal" size={20} className="text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Raissul Hossain</div>
                <div className="text-sm text-muted-foreground">DevOps Engineer</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://github.com/raissul', '_blank')}
                iconName="Github"
                iconPosition="left"
              >
                GitHub
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://linkedin.com/in/raissul-hossain', '_blank')}
                iconName="Linkedin"
                iconPosition="left"
              >
                LinkedIn
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = 'mailto:raissul.dev@gmail.com'}
                iconName="Mail"
                iconPosition="left"
              >
                Email
              </Button>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Raissul Hossain. All rights reserved. 
              Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactProfessionalOpportunities;