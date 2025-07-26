import React from 'react';
import Icon from '../../../components/AppIcon';

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "DevOps Engineer",
      company: "Sheba Fintech LTD",
      period: "2023 - Present",
      type: "current",
      location: "Dhaka, Bangladesh",
      description: "Leading infrastructure automation and monitoring initiatives for fintech applications serving millions of users.",
      achievements: [
        "Reduced deployment time by 60% through CI/CD pipeline optimization",
        "Implemented comprehensive monitoring reducing system downtime by 40%",
        "Automated infrastructure provisioning saving 15+ hours weekly",
        "Enhanced security posture through DevSecOps practices"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana"],
      projects: [
        "Payment Gateway Infrastructure Modernization",
        "Multi-environment CI/CD Pipeline Implementation",
        "Microservices Monitoring & Alerting System"
      ]
    },
    {
      id: 2,
      title: "Junior Systems Administrator",
      company: "Previous Role",
      period: "2022 - 2023",
      type: "previous",
      location: "Dhaka, Bangladesh",
      description: "Managed server infrastructure and supported development teams with deployment processes.",
      achievements: [
        "Maintained 99.5% server uptime across production environments",
        "Streamlined backup processes reducing recovery time by 50%",
        "Implemented basic monitoring and alerting systems",
        "Supported development team with deployment automation"
      ],
      technologies: ["Linux", "Apache", "MySQL", "Bash", "Git", "Nagios"],
      projects: [
        "Server Migration to Cloud Infrastructure",
        "Automated Backup System Implementation",
        "Basic CI/CD Pipeline Setup"
      ]
    },
    {
      id: 3,
      title: "IT Support Specialist",
      company: "Entry Level Position",
      period: "2021 - 2022",
      type: "entry",
      location: "Dhaka, Bangladesh",
      description: "Provided technical support and learned foundational DevOps concepts through hands-on experience.",
      achievements: [
        "Resolved 95% of technical issues within SLA timeframes",
        "Documented system processes and troubleshooting guides",
        "Learned Linux administration and basic scripting",
        "Supported team with infrastructure maintenance"
      ],
      technologies: ["Windows Server", "Linux", "PowerShell", "Active Directory"],
      projects: [
        "IT Infrastructure Documentation",
        "User Access Management System",
        "Basic Automation Scripts"
      ]
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'current': return 'bg-green-500';
      case 'previous': return 'bg-blue-500';
      case 'entry': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'current': return 'Briefcase';
      case 'previous': return 'Clock';
      case 'entry': return 'GraduationCap';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center mb-6">
        <Icon name="Timeline" size={24} className="text-primary mr-3" />
        <h2 className="text-2xl font-bold text-foreground">Professional Experience</h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative flex items-start mb-8 last:mb-0">
            {/* Timeline Dot */}
            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getTypeColor(exp.type)} relative z-10`}>
              <Icon name={getTypeIcon(exp.type)} size={20} className="text-white" />
            </div>

            {/* Content */}
            <div className="ml-6 flex-1">
              <div className="bg-background rounded-lg border border-border p-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Calendar" size={16} className="mr-1" />
                        {exp.period}
                      </span>
                      <span className="flex items-center text-sm text-muted-foreground">
                        <Icon name="MapPin" size={16} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  {exp.type === 'current' && (
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        Current Role
                      </span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Key Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                    <Icon name="Trophy" size={16} className="mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <Icon name="CheckCircle" size={16} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                    <Icon name="Code" size={16} className="mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Projects */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                    <Icon name="FolderOpen" size={16} className="mr-2" />
                    Key Projects
                  </h4>
                  <ul className="space-y-1">
                    {exp.projects.map((project, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <Icon name="ArrowRight" size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;