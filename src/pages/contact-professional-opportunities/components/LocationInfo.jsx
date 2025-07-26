import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationInfo = () => {
  const locationData = {
    primary: {
      country: 'Bangladesh',
      city: 'Dhaka',
      timezone: 'GMT+6 (Bangladesh Standard Time)',
      coordinates: { lat: 23.8103, lng: 90.4125 },
      workingHours: '9:00 AM - 6:00 PM (Local Time)'
    },
    workPreferences: {
      remote: {
        available: true,
        experience: '2+ years',
        tools: ['Slack', 'Zoom', 'Microsoft Teams', 'Discord', 'Jira', 'Confluence'],
        timezones: 'Flexible with GMT-5 to GMT+8'
      },
      onsite: {
        available: true,
        location: 'Dhaka, Bangladesh',
        commute: 'Within 1 hour travel time',
        hybrid: 'Preferred option'
      },
      relocation: {
        available: true,
        preferred: ['Singapore', 'Dubai', 'Canada', 'Germany', 'Netherlands'],
        timeline: '3-6 months notice',
        visa: 'Assistance required'
      }
    },
    travel: {
      available: true,
      frequency: 'Quarterly or as needed',
      duration: 'Up to 2 weeks per trip',
      regions: ['Asia-Pacific', 'Middle East', 'Europe'],
      passport: 'Valid with multiple entry visas'
    }
  };

  const communicationTools = [
    { name: 'Slack', icon: 'MessageSquare', proficiency: 'Expert' },
    { name: 'Microsoft Teams', icon: 'Video', proficiency: 'Advanced' },
    { name: 'Zoom', icon: 'Camera', proficiency: 'Advanced' },
    { name: 'Discord', icon: 'Headphones', proficiency: 'Intermediate' },
    { name: 'Jira', icon: 'Kanban', proficiency: 'Advanced' },
    { name: 'Confluence', icon: 'FileText', proficiency: 'Intermediate' }
  ];

  const timezoneCompatibility = [
    { region: 'Asia-Pacific', zones: 'GMT+5 to GMT+9', compatibility: 'Excellent', color: 'text-success' },
    { region: 'Middle East', zones: 'GMT+3 to GMT+4', compatibility: 'Good', color: 'text-success' },
    { region: 'Europe', zones: 'GMT+0 to GMT+2', compatibility: 'Fair', color: 'text-warning' },
    { region: 'North America (East)', zones: 'GMT-5 to GMT-4', compatibility: 'Limited', color: 'text-error' },
    { region: 'North America (West)', zones: 'GMT-8 to GMT-7', compatibility: 'Challenging', color: 'text-error' }
  ];

  return (
    <div className="space-y-6">
      {/* Primary Location */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Location & Availability
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="MapPin" size={20} className="text-accent" />
                <div>
                  <h4 className="font-medium text-foreground">
                    {locationData.primary.city}, {locationData.primary.country}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {locationData.primary.timezone}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-muted/30 rounded-lg mb-4">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    Business Hours
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {locationData.primary.workingHours}
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="h-48 rounded-lg overflow-hidden border border-border">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Dhaka, Bangladesh"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${locationData.primary.coordinates.lat},${locationData.primary.coordinates.lng}&z=12&output=embed`}
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            {/* Work Preferences */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Work Preferences</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                  <div className="flex items-center space-x-3">
                    <Icon name="Wifi" size={18} className="text-success" />
                    <div>
                      <span className="text-sm font-medium text-foreground">Remote Work</span>
                      <p className="text-xs text-muted-foreground">
                        {locationData.workPreferences.remote.experience} experience
                      </p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-success rounded-full" />
                </div>

                <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                  <div className="flex items-center space-x-3">
                    <Icon name="Building" size={18} className="text-success" />
                    <div>
                      <span className="text-sm font-medium text-foreground">On-site/Hybrid</span>
                      <p className="text-xs text-muted-foreground">
                        {locationData.workPreferences.onsite.location}
                      </p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-success rounded-full" />
                </div>

                <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                  <div className="flex items-center space-x-3">
                    <Icon name="Plane" size={18} className="text-warning" />
                    <div>
                      <span className="text-sm font-medium text-foreground">Relocation</span>
                      <p className="text-xs text-muted-foreground">
                        {locationData.workPreferences.relocation.timeline}
                      </p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-warning rounded-full" />
                </div>
              </div>
            </div>

            {/* Travel Availability */}
            <div>
              <h4 className="font-medium text-foreground mb-3">Travel Availability</h4>
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Luggage" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    Available for Business Travel
                  </span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Frequency: {locationData.travel.frequency}</p>
                  <p>• Duration: {locationData.travel.duration}</p>
                  <p>• Regions: {locationData.travel.regions.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Remote Work Capabilities */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Remote Work Capabilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-foreground mb-3">
              Communication Tools
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {communicationTools.map((tool, index) => (
                <div
                  key={index}
                  className="p-3 bg-background rounded-lg border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-center space-x-2 mb-1">
                    <Icon name={tool.icon} size={16} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {tool.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {tool.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">
              Timezone Compatibility
            </h4>
            <div className="space-y-2">
              {timezoneCompatibility.map((tz, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 bg-background rounded-lg border border-border"
                >
                  <div>
                    <span className="text-sm font-medium text-foreground">
                      {tz.region}
                    </span>
                    <p className="text-xs text-muted-foreground">
                      {tz.zones}
                    </p>
                  </div>
                  <span className={`text-xs font-medium ${tz.color}`}>
                    {tz.compatibility}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Globe" size={18} className="text-accent mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-foreground mb-1">
                Remote Work Experience
              </h4>
              <p className="text-xs text-muted-foreground">
                Over 2 years of successful remote collaboration with international teams. 
                Experienced in asynchronous communication, distributed version control, 
                and maintaining productivity across different time zones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Relocation Preferences */}
      <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Relocation Opportunities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-foreground mb-3">
              Preferred Destinations
            </h4>
            <div className="space-y-2">
              {locationData.workPreferences.relocation.preferred.map((country, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-2 bg-background rounded-lg border border-border"
                >
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span className="text-sm text-foreground">{country}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">
              Relocation Details
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-background rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="Calendar" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Timeline</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {locationData.workPreferences.relocation.timeline}
                </p>
              </div>

              <div className="p-3 bg-background rounded-lg border border-border">
                <div className="flex items-center space-x-2 mb-1">
                  <Icon name="FileText" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-foreground">Visa Status</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {locationData.workPreferences.relocation.visa}
                </p>
              </div>

              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => {
                  const subject = encodeURIComponent('Relocation Opportunity Discussion');
                  const body = encodeURIComponent('Hi Raissul,\n\nI would like to discuss a relocation opportunity. Please let me know your availability for a detailed conversation.\n\nBest regards');
                  window.location.href = `mailto:raissul.dev@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                Discuss Relocation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;