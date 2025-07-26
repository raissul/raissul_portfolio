import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-primary/10 py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium text-accent">
                <Icon name="User" size={16} />
                <span>About Raissul</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                The Bridge Builder
                <span className="block text-2xl lg:text-3xl text-muted-foreground font-normal mt-2">
                  Connecting Systems, Teams & Technologies
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Sojib "Raissul" Hossain, a DevOps Engineer at Sheba Fintech LTD who transforms complex infrastructure challenges into elegant, reliable solutions. My journey is defined by continuous learning, collaborative problem-solving, and a passion for building systems that teams can depend on.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-2xl font-bold text-success">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Goal</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => window.location.href = '/contact-professional-opportunities'}
                className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Icon name="Mail" size={18} />
                <span>Let's Connect</span>
              </button>
              
              <button 
                onClick={() => window.open('/assets/resume.pdf', '_blank')}
                className="flex items-center space-x-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
              >
                <Icon name="Download" size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary/20 rounded-2xl"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden border-2 border-border">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Sojib Raissul Hossain - DevOps Engineer"
                  className="w-full h-full object-cover"
                />
                
                {/* Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center space-x-2 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-foreground">Available</span>
                </div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="absolute top-10 -left-6 w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="Server" size={20} className="text-primary" />
            </div>
            <div className="absolute bottom-10 -right-6 w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="Cloud" size={20} className="text-accent" />
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center shadow-lg">
              <Icon name="Database" size={20} className="text-secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;