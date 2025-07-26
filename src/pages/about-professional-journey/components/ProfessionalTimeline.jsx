import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalTimeline = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experienceData = [
    {
      id: 1,
      period: "2023 - Present",
      title: "DevOps Engineer",
      company: "Sheba Fintech LTD",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description: `Leading infrastructure optimization and monitoring implementations for fintech applications. Responsible for maintaining 99.9% uptime across critical financial services while implementing automated deployment pipelines and comprehensive monitoring solutions.`,
      achievements: [
        "Reduced deployment time by 60% through CI/CD pipeline automation",
        "Implemented comprehensive monitoring stack reducing incident response time by 40%",
        "Optimized cloud infrastructure costs by 25% through resource optimization",
        "Led migration of legacy systems to containerized microservices architecture"
      ],
      technologies: ["Docker", "Kubernetes", "AWS", "Jenkins", "Prometheus", "Grafana", "Terraform"],
      status: "current"
    },
    {
      id: 2,
      period: "2022 - 2023",
      title: "Junior Systems Administrator",
      company: "TechStart Solutions",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
      description: `Managed server infrastructure and provided technical support for web applications. Gained foundational experience in system administration, network management, and troubleshooting complex technical issues.`,
      achievements: [
        "Maintained 99.5% server uptime across 50+ client applications",
        "Automated routine maintenance tasks reducing manual work by 30%",
        "Implemented backup and disaster recovery procedures",
        "Provided 24/7 technical support for critical system issues"
      ],
      technologies: ["Linux", "Apache", "MySQL", "PHP", "Bash", "Nagios"],
      status: "completed"
    },
    {
      id: 3,
      period: "2021 - 2022",
      title: "IT Support Specialist",
      company: "Digital Solutions BD",
      location: "Dhaka, Bangladesh",
      type: "Part-time",
      description: `Provided technical support and system maintenance for small to medium businesses. Developed problem-solving skills and gained experience with various technologies and client communication.`,
      achievements: [
        "Resolved 95% of technical issues within SLA timeframes",
        "Implemented network security improvements for 20+ clients",
        "Created technical documentation and user training materials",
        "Managed hardware procurement and software licensing"
      ],
      technologies: ["Windows Server", "Active Directory", "Network Security", "Hardware Troubleshooting"],
      status: "completed"
    }
  ];

  const learningData = [
    {
      id: 1,
      period: "2024 - Ongoing",
      title: "AWS Solutions Architect Certification",
      provider: "Amazon Web Services",
      progress: 75,
      description: "Advanced cloud architecture and best practices for scalable, secure, and cost-effective solutions.",
      skills: ["Cloud Architecture", "Security", "Cost Optimization", "High Availability"],
      status: "in-progress"
    },
    {
      id: 2,
      period: "2024",
      title: "Kubernetes Administrator (CKA)",
      provider: "Cloud Native Computing Foundation",
      progress: 60,
      description: "Container orchestration, cluster management, and cloud-native application deployment.",
      skills: ["Container Orchestration", "Cluster Management", "Networking", "Security"],
      status: "in-progress"
    },
    {
      id: 3,
      period: "2023",
      title: "Docker Certified Associate",
      provider: "Docker Inc.",
      progress: 100,
      description: "Containerization fundamentals, Docker Compose, and container security best practices.",
      skills: ["Containerization", "Docker Compose", "Security", "Networking"],
      status: "completed"
    },
    {
      id: 4,
      period: "2023",
      title: "Terraform Associate Certification",
      provider: "HashiCorp",
      progress: 100,
      description: "Infrastructure as Code principles, state management, and cloud resource provisioning.",
      skills: ["Infrastructure as Code", "State Management", "Cloud Provisioning", "Automation"],
      status: "completed"
    },
    {
      id: 5,
      period: "2022",
      title: "Linux Professional Institute Certification",
      provider: "LPI",
      progress: 100,
      description: "Linux system administration, shell scripting, and network configuration.",
      skills: ["Linux Administration", "Shell Scripting", "Network Configuration", "Security"],
      status: "completed"
    }
  ];

  const tabs = [
    { id: 'experience', label: 'Professional Experience', icon: 'Briefcase' },
    { id: 'learning', label: 'Learning Journey', icon: 'GraduationCap' }
  ];

  const renderExperienceItem = (item) => (
    <div key={item.id} className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border"></div>
      
      {/* Timeline Dot */}
      <div className={`absolute left-4 top-8 w-4 h-4 rounded-full border-2 ${
        item.status === 'current' ?'bg-primary border-primary shadow-lg shadow-primary/20' :'bg-background border-border'
      }`}></div>

      <div className="ml-16 pb-12">
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                {item.status === 'current' && (
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    Current
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Building" size={16} />
                <span className="font-medium">{item.company}</span>
                <span>•</span>
                <span>{item.location}</span>
                <span>•</span>
                <span>{item.type}</span>
              </div>
            </div>
            <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {item.period}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                  <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLearningItem = (item) => (
    <div key={item.id} className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border"></div>
      
      {/* Timeline Dot */}
      <div className={`absolute left-4 top-8 w-4 h-4 rounded-full border-2 ${
        item.status === 'in-progress' ?'bg-warning border-warning shadow-lg shadow-warning/20' :'bg-success border-success shadow-lg shadow-success/20'
      }`}></div>

      <div className="ml-16 pb-12">
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  item.status === 'in-progress' ?'bg-warning/10 text-warning' :'bg-success/10 text-success'
                }`}>
                  {item.status === 'in-progress' ? 'In Progress' : 'Completed'}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Award" size={16} />
                <span className="font-medium">{item.provider}</span>
              </div>
            </div>
            <div className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
              {item.period}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Progress</span>
              <span className="text-sm text-muted-foreground">{item.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  item.status === 'completed' ? 'bg-success' : 'bg-warning'
                }`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Skills */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2">Skills Acquired:</h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md border border-border"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dual timeline showcasing my professional experience and continuous learning path in the DevOps ecosystem.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab.icon} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'experience' && (
            <div className="space-y-0">
              {experienceData.map(renderExperienceItem)}
            </div>
          )}

          {activeTab === 'learning' && (
            <div className="space-y-0">
              {learningData.map(renderLearningItem)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTimeline;