import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DirectContactMethods = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactMethods = [
    {
      id: 'email',
      icon: 'Mail',
      title: 'Professional Email',
      value: 'raissul.dev@gmail.com',
      description: 'Primary contact for all professional inquiries',
      action: 'Copy Email',
      actionIcon: 'Copy',
      status: 'Available',
      statusColor: 'text-success',
      responseTime: '24-48 hours',
      preferred: true,
      onClick: () => {
        navigator.clipboard.writeText('raissul.dev@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    },
    {
      id: 'linkedin',
      icon: 'Linkedin',
      title: 'LinkedIn Profile',
      value: 'linkedin.com/in/raissul-hossain',
      description: 'Professional networking and career discussions',
      action: 'View Profile',
      actionIcon: 'ExternalLink',
      status: 'Active',
      statusColor: 'text-success',
      responseTime: '1-2 days',
      preferred: false,
      onClick: () => window.open('https://linkedin.com/in/raissul-hossain', '_blank')
    },
    {
      id: 'github',
      icon: 'Github',
      title: 'GitHub Profile',
      value: 'github.com/raissul',
      description: 'Technical discussions and code collaboration',
      action: 'View GitHub',
      actionIcon: 'ExternalLink',
      status: 'Active',
      statusColor: 'text-success',
      responseTime: '2-3 days',
      preferred: false,
      onClick: () => window.open('https://github.com/raissul', '_blank')
    },
    {
      id: 'phone',
      icon: 'Phone',
      title: 'Phone/WhatsApp',
      value: '+880 1XXX-XXXXXX',
      description: 'Urgent matters and scheduled calls only',
      action: 'Request Number',
      actionIcon: 'MessageCircle',
      status: 'By Appointment',
      statusColor: 'text-warning',
      responseTime: 'Same day',
      preferred: false,
      onClick: () => {
        // This would typically open a modal or redirect to contact form
        alert('Phone number will be shared after initial email contact for security purposes.');
      }
    }
  ];

  const quickActions = [
    {
      title: 'Download Resume',
      description: 'Latest CV with technical skills and experience',
      icon: 'Download',
      variant: 'default',
      onClick: () => window.open('/assets/resume-raissul-hossain.pdf', '_blank')
    },
    {
      title: 'Schedule Meeting',
      description: 'Book a 30-minute technical discussion',
      icon: 'Calendar',
      variant: 'outline',
      onClick: () => window.open('https://calendly.com/raissul-dev', '_blank')
    },
    {
      title: 'View Portfolio',
      description: 'Explore my technical projects and case studies',
      icon: 'FolderOpen',
      variant: 'ghost',
      onClick: () => window.location.href = '/projects-technical-laboratory'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Direct Contact Methods */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Direct Contact Methods
          </h3>
          <p className="text-muted-foreground">
            Choose your preferred way to connect. Email is recommended for detailed discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className={`relative p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                method.preferred 
                  ? 'border-primary bg-primary/5 ring-1 ring-primary/20' :'border-border bg-background hover:border-accent/30'
              }`}
            >
              {method.preferred && (
                <div className="absolute -top-2 -right-2">
                  <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Preferred
                  </div>
                </div>
              )}

              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  method.preferred ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <Icon 
                    name={method.icon} 
                    size={20} 
                    className={method.preferred ? 'text-primary' : 'text-muted-foreground'} 
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-foreground">
                      {method.title}
                    </h4>
                    <div className="flex items-center space-x-1">
                      <div className={`w-2 h-2 rounded-full ${
                        method.status === 'Available' ? 'bg-success' :
                        method.status === 'Active'? 'bg-success' : 'bg-warning'
                      }`} />
                      <span className={`text-xs font-medium ${method.statusColor}`}>
                        {method.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2 break-all">
                    {method.value}
                  </p>
                  
                  <p className="text-xs text-muted-foreground mb-3">
                    {method.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Response: {method.responseTime}
                    </span>
                    
                    <Button
                      variant={method.preferred ? 'default' : 'outline'}
                      size="sm"
                      onClick={method.onClick}
                      iconName={method.id === 'email' && copiedEmail ? 'Check' : method.actionIcon}
                      iconPosition="right"
                      iconSize={14}
                    >
                      {method.id === 'email' && copiedEmail ? 'Copied!' : method.action}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Quick Actions
          </h3>
          <p className="text-muted-foreground text-sm">
            Fast access to key resources and scheduling options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-border bg-background hover:border-accent/30 transition-all duration-200 hover:shadow-md cursor-pointer"
              onClick={action.onClick}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Icon name={action.icon} size={18} className="text-accent" />
                </div>
                <h4 className="font-medium text-foreground">
                  {action.title}
                </h4>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">
                {action.description}
              </p>
              
              <Button
                variant={action.variant}
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={14}
              >
                Access
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Preferences */}
      <div className="bg-muted/30 rounded-xl p-6 border border-border">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="font-medium text-foreground mb-2">
              Contact Preferences & Guidelines
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                • <strong>Email</strong> is preferred for detailed technical discussions and formal opportunities
              </p>
              <p>
                • <strong>LinkedIn</strong> for networking, career advice, and professional connections
              </p>
              <p>
                • <strong>GitHub</strong> for code reviews, technical questions, and open source collaboration
              </p>
              <p>
                • <strong>Phone/Video calls</strong> are scheduled after initial email contact
              </p>
              <p>
                • Response times may vary during weekends and Bangladesh public holidays
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectContactMethods;