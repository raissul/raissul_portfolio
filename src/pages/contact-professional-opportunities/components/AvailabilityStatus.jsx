import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBusinessHours, setIsBusinessHours] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Bangladesh timezone (GMT+6)
      const bdTime = new Date(now.getTime() + (6 * 60 * 60 * 1000));
      const hour = bdTime.getHours();
      const day = bdTime.getDay();
      
      // Business hours: 9 AM - 6 PM, Monday to Friday
      setIsBusinessHours(hour >= 9 && hour < 18 && day >= 1 && day <= 5);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dhaka',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const availabilityData = {
    currentStatus: {
      status: isBusinessHours ? 'Available' : 'Away',
      statusColor: isBusinessHours ? 'text-success' : 'text-warning',
      statusBg: isBusinessHours ? 'bg-success/10' : 'bg-warning/10',
      message: isBusinessHours 
        ? 'Currently available for immediate responses'
        : 'Outside business hours - will respond within 24 hours',
      nextAvailable: isBusinessHours 
        ? null 
        : 'Next business day at 9:00 AM GMT+6'
    },
    workingHours: {
      timezone: 'GMT+6 (Bangladesh Standard Time)',
      schedule: [
        { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', available: true },
        { day: 'Saturday', hours: '10:00 AM - 2:00 PM', available: true },
        { day: 'Sunday', hours: 'Emergency only', available: false }
      ]
    },
    responseCommitments: [
      {
        type: 'Urgent Inquiries',
        time: '4-8 hours',
        description: 'Critical technical issues or time-sensitive opportunities',
        icon: 'Zap',
        color: 'text-error'
      },
      {
        type: 'Job Opportunities',
        time: '12-24 hours',
        description: 'Full-time positions and contract opportunities',
        icon: 'Briefcase',
        color: 'text-success'
      },
      {
        type: 'Technical Discussions',
        time: '24-48 hours',
        description: 'Code reviews, architecture discussions, consultations',
        icon: 'Code',
        color: 'text-accent'
      },
      {
        type: 'General Inquiries',
        time: '2-3 days',
        description: 'Networking, mentoring requests, general questions',
        icon: 'MessageCircle',
        color: 'text-muted-foreground'
      }
    ]
  };

  const currentEmployment = {
    company: 'Sheba Fintech LTD',
    position: 'DevOps Engineer',
    status: 'Currently Employed',
    startDate: 'January 2024',
    openToOpportunities: true,
    noticePeriod: '30 days',
    preferredRoles: [
      'Senior DevOps Engineer',
      'Site Reliability Engineer',
      'Cloud Infrastructure Engineer',
      'Platform Engineer'
    ]
  };

  return (
    <div className="space-y-6">
      {/* Current Status */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground">
            Current Availability
          </h3>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              isBusinessHours ? 'bg-success animate-pulse' : 'bg-warning'
            }`} />
            <span className={`font-medium ${availabilityData.currentStatus.statusColor}`}>
              {availabilityData.currentStatus.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <div className="text-2xl font-mono font-bold text-foreground mb-1">
                {formatTime(currentTime)}
              </div>
              <div className="text-sm text-muted-foreground">
                {formatDate(currentTime)}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {availabilityData.workingHours.timezone}
              </div>
            </div>

            <div className={`p-3 rounded-lg ${availabilityData.currentStatus.statusBg}`}>
              <p className="text-sm text-foreground font-medium mb-1">
                {availabilityData.currentStatus.message}
              </p>
              {availabilityData.currentStatus.nextAvailable && (
                <p className="text-xs text-muted-foreground">
                  {availabilityData.currentStatus.nextAvailable}
                </p>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">Working Hours</h4>
            <div className="space-y-2">
              {availabilityData.workingHours.schedule.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{schedule.day}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-foreground">{schedule.hours}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      schedule.available ? 'bg-success' : 'bg-muted-foreground'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Response Time Commitments */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Response Time Commitments
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availabilityData.responseCommitments.map((commitment, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-border bg-background hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={commitment.icon} size={18} className={commitment.color} />
                <h4 className="font-medium text-foreground">{commitment.type}</h4>
              </div>
              
              <div className="mb-2">
                <span className="text-lg font-semibold text-accent">
                  {commitment.time}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Clock" size={18} className="text-accent mt-0.5" />
            <div>
              <p className="text-sm text-foreground font-medium mb-1">
                Response Time Guarantee
              </p>
              <p className="text-xs text-muted-foreground">
                All response times are calculated during business hours (GMT+6). Weekend and holiday responses may take longer but urgent matters are always prioritized.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Employment Status */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Current Employment Status
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Building" size={18} className="text-accent" />
                <h4 className="font-medium text-foreground">
                  {currentEmployment.company}
                </h4>
              </div>
              <p className="text-muted-foreground mb-1">
                {currentEmployment.position}
              </p>
              <p className="text-sm text-muted-foreground">
                Since {currentEmployment.startDate}
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-success rounded-full" />
              <span className="text-sm font-medium text-success">
                {currentEmployment.status}
              </span>
            </div>

            {currentEmployment.openToOpportunities && (
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="Search" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Open to New Opportunities
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Notice Period: {currentEmployment.noticePeriod}
                </p>
              </div>
            )}
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">
              Preferred Next Roles
            </h4>
            <div className="space-y-2">
              {currentEmployment.preferredRoles.map((role, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Icon name="ChevronRight" size={14} className="text-accent" />
                  <span className="text-sm text-foreground">{role}</span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.open('https://calendly.com/raissul-dev', '_blank')}
              >
                Schedule Career Discussion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;