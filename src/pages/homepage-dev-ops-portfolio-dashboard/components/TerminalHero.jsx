import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TerminalHero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const roles = [
    'Systems Engineer at Sheba Fintech LTD',
    'DevOps Enthusiast',
    'Infrastructure Problem Solver',
    'Cloud Architecture Specialist'
  ];

  const nameText = 'Sojib "Raissul" Hossain';

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentRoleIndex, roles]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-foreground) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-terminal-bg rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Icon name="Terminal" size={16} />
                <span>raissul@portfolio:~</span>
              </div>
              <div className="w-16"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 lg:p-8 font-jetbrains text-left">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-terminal-text">
                  <span className="text-green-400">$</span>
                  <span className="text-blue-400">whoami</span>
                </div>
                
                <div className="text-terminal-text text-xl lg:text-2xl font-bold">
                  {nameText}
                </div>

                <div className="flex items-center space-x-2 text-terminal-text">
                  <span className="text-green-400">$</span>
                  <span className="text-blue-400">cat role.txt</span>
                </div>

                <div className="text-terminal-text text-lg lg:text-xl min-h-[2rem] flex items-center">
                  <span>{displayText}</span>
                  <span className={`ml-1 w-2 h-6 bg-terminal-text ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
                </div>

                <div className="flex items-center space-x-2 text-terminal-text">
                  <span className="text-green-400">$</span>
                  <span className="text-blue-400">ls -la skills/</span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-terminal-text text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">drwxr-xr-x</span>
                    <span>docker/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">drwxr-xr-x</span>
                    <span>kubernetes/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">drwxr-xr-x</span>
                    <span>aws/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">drwxr-xr-x</span>
                    <span>monitoring/</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-terminal-text">
                  <span className="text-green-400">$</span>
                  <span className="text-blue-400">uptime</span>
                </div>

                <div className="text-terminal-text text-sm">
                  <span className="text-green-400">System online:</span> 99.9% uptime • 
                  <span className="text-blue-400 ml-2">Last deploy:</span> 2h ago • 
                  <span className="text-yellow-400 ml-2">Status:</span> All systems operational
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => window.open('/assets/resume.pdf', '_blank')}
              className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Icon name="Download" size={18} />
              <span>Download Resume</span>
            </button>
            
            <button
              onClick={() => window.open('https://github.com/raissul', '_blank')}
              className="flex items-center space-x-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Icon name="Github" size={18} />
              <span>View GitHub</span>
            </button>
            
            <button
              onClick={() => window.location.href = '/contact-professional-opportunities'}
              className="flex items-center space-x-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all duration-200"
            >
              <Icon name="Mail" size={18} />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium">Explore More</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;