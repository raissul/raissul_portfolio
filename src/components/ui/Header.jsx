import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      path: '/homepage-dev-ops-portfolio-dashboard',
      icon: 'Home'
    },
    {
      name: 'About',
      path: '/about-professional-journey',
      icon: 'User'
    },
    {
      name: 'Skills',
      path: '/technical-skills-experience-matrix',
      icon: 'Code'
    },
    {
      name: 'Projects',
      path: '/projects-technical-laboratory',
      icon: 'FolderOpen'
    },
    {
      name: 'Monitoring',
      path: '/live-monitoring-project-status',
      icon: 'Activity'
    }
  ];

  const secondaryItems = [
    {
      name: 'Contact',
      path: '/contact-professional-opportunities',
      icon: 'Mail'
    }
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-soft' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Icon name="Terminal" size={20} className="text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground font-inter">
                Raissul
              </span>
              <span className="text-xs text-muted-foreground font-jetbrains">
                DevOps Engineer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation('/contact-professional-opportunities')}
              iconName="Mail"
              iconPosition="left"
              iconSize={16}
            >
              Contact
            </Button>
            
            <div className="w-px h-6 bg-border" />
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://github.com/raissul', '_blank')}
              iconName="Github"
              iconPosition="left"
              iconSize={16}
            >
              GitHub
            </Button>
            
            <Button
              variant="default"
              size="sm"
              onClick={() => window.open('/assets/resume.pdf', '_blank')}
              iconName="Download"
              iconPosition="left"
              iconSize={16}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="px-6 py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
              
              <div className="border-t border-border my-4" />
              
              {secondaryItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'bg-primary text-primary-foreground shadow-soft'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
              
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => window.open('https://github.com/raissul', '_blank')}
                  iconName="Github"
                  iconPosition="left"
                  iconSize={16}
                >
                  GitHub Profile
                </Button>
                
                <Button
                  variant="default"
                  size="sm"
                  fullWidth
                  onClick={() => window.open('/assets/resume.pdf', '_blank')}
                  iconName="Download"
                  iconPosition="left"
                  iconSize={16}
                >
                  Download Resume
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Live Status Indicator */}
      <div className="absolute top-4 right-20 hidden xl:flex items-center space-x-2 text-xs">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-muted-foreground font-jetbrains">System Online</span>
        </div>
        <div className="w-px h-4 bg-border" />
        <span className="text-muted-foreground font-jetbrains">
          Last Deploy: 2h ago
        </span>
      </div>
    </header>
  );
};

export default Header;