import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResumeSection = () => {
  const [activeView, setActiveView] = useState('preview');

  const resumeData = {
    personalInfo: {
      name: "Sojib \'Raissul\' Hossain",
      title: "DevOps Engineer",
      email: "raissul.hossain@email.com",
      phone: "+880 1712-345678",
      location: "Dhaka, Bangladesh",
      linkedin: "linkedin.com/in/raissul-hossain",
      github: "github.com/raissul"
    },
    summary: `Passionate DevOps Engineer with 2+ years of experience in infrastructure automation, monitoring, and cloud technologies. Currently leading infrastructure optimization at Sheba Fintech LTD, with a proven track record of reducing deployment times by 60% and maintaining 99.9% uptime. Committed to continuous learning and collaborative problem-solving in fast-paced fintech environments.`,
    experience: [
      {
        title: "DevOps Engineer",
        company: "Sheba Fintech LTD",
        period: "2023 - Present",
        location: "Dhaka, Bangladesh",
        responsibilities: [
          "Lead infrastructure optimization for fintech applications serving 100K+ users",
          "Implement CI/CD pipelines reducing deployment time from 2 hours to 45 minutes",
          "Maintain comprehensive monitoring stack with Prometheus, Grafana, and ELK",
          "Manage AWS cloud infrastructure with 25% cost optimization through resource planning",
          "Collaborate with development teams on microservices architecture migration"
        ]
      },
      {
        title: "Junior Systems Administrator",
        company: "TechStart Solutions",
        period: "2022 - 2023",
        location: "Dhaka, Bangladesh",
        responsibilities: [
          "Managed server infrastructure for 50+ client applications",
          "Automated routine maintenance tasks using Bash and Python scripts",
          "Implemented backup and disaster recovery procedures",
          "Provided 24/7 technical support with 99.5% uptime achievement"
        ]
      }
    ],
    skills: {
      "Cloud Platforms": ["AWS", "Google Cloud", "Azure"],
      "Containerization": ["Docker", "Kubernetes", "Docker Compose"],
      "CI/CD": ["Jenkins", "GitLab CI", "GitHub Actions"],
      "Infrastructure as Code": ["Terraform", "Ansible", "CloudFormation"],
      "Monitoring": ["Prometheus", "Grafana", "ELK Stack", "Nagios"],
      "Programming": ["Python", "Bash", "JavaScript", "Go"],
      "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      "Operating Systems": ["Linux (Ubuntu, CentOS)", "Windows Server"]
    },
    certifications: [
      "Docker Certified Associate (2023)",
      "Terraform Associate Certification (2023)",
      "Linux Professional Institute Certification (2022)"
    ],
    education: {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Dhaka",
      period: "2018 - 2022",
      location: "Dhaka, Bangladesh"
    }
  };

  const downloadFormats = [
    {
      format: "PDF",
      icon: "FileText",
      description: "Standard format for applications",
      size: "245 KB",
      action: () => window.open('/assets/resume-raissul.pdf', '_blank')
    },
    {
      format: "Word",
      icon: "File",
      description: "Editable document format",
      size: "180 KB",
      action: () => window.open('/assets/resume-raissul.docx', '_blank')
    },
    {
      format: "JSON",
      icon: "Code",
      description: "Machine-readable format",
      size: "12 KB",
      action: () => window.open('/assets/resume-raissul.json', '_blank')
    }
  ];

  const renderPreview = () => (
    <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-gray-200 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{resumeData.personalInfo.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{resumeData.personalInfo.title}</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Icon name="Mail" size={14} />
              <span>{resumeData.personalInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Phone" size={14} />
              <span>{resumeData.personalInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={14} />
              <span>{resumeData.personalInfo.location}</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Icon name="Linkedin" size={14} />
              <span>{resumeData.personalInfo.linkedin}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Github" size={14} />
              <span>{resumeData.personalInfo.github}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Summary</h3>
        <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Experience</h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                <p className="text-gray-600">{exp.company} • {exp.location}</p>
              </div>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ml-4">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(resumeData.skills).map(([category, skills]) => (
            <div key={category}>
              <h4 className="font-medium text-gray-900 mb-2">{category}</h4>
              <p className="text-sm text-gray-700">{skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications</h3>
        <ul className="space-y-1">
          {resumeData.certifications.map((cert, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
              <Icon name="Award" size={14} className="text-yellow-600" />
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-gray-900">{resumeData.education.degree}</h4>
            <p className="text-gray-600">{resumeData.education.institution} • {resumeData.education.location}</p>
          </div>
          <span className="text-sm text-gray-500">{resumeData.education.period}</span>
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
            Resume & Downloads
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get my complete professional profile in your preferred format, or view it directly below.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            <button
              onClick={() => setActiveView('preview')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeView === 'preview' ?'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Eye" size={18} className="inline mr-2" />
              Preview
            </button>
            <button
              onClick={() => setActiveView('download')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeView === 'download'
                  ? 'bg-background text-foreground shadow-sm' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Download" size={18} className="inline mr-2" />
              Download
            </button>
          </div>
        </div>

        {/* Content */}
        {activeView === 'preview' && (
          <div className="mb-12">
            {renderPreview()}
            
            {/* Quick Actions */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="default"
                onClick={() => window.open('/assets/resume-raissul.pdf', '_blank')}
                iconName="Download"
                iconPosition="left"
              >
                Download PDF
              </Button>
              <Button
                variant="outline"
                onClick={() => window.print()}
                iconName="Printer"
                iconPosition="left"
              >
                Print Resume
              </Button>
              <Button
                variant="ghost"
                onClick={() => setActiveView('download')}
                iconName="MoreHorizontal"
                iconPosition="left"
              >
                More Formats
              </Button>
            </div>
          </div>
        )}

        {activeView === 'download' && (
          <div className="max-w-4xl mx-auto">
            {/* Download Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {downloadFormats.map((format, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={format.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{format.format} Format</h3>
                      <p className="text-sm text-muted-foreground">{format.size}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{format.description}</p>
                  
                  <Button
                    variant="outline"
                    fullWidth
                    onClick={format.action}
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download {format.format}
                  </Button>
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Additional Resources</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Portfolio Links</h4>
                  <div className="space-y-2">
                    <a 
                      href="/projects-technical-laboratory"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon name="FolderOpen" size={16} />
                      <span>Technical Projects</span>
                    </a>
                    <a 
                      href="/technical-skills-experience-matrix"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon name="Code" size={16} />
                      <span>Skills Matrix</span>
                    </a>
                    <a 
                      href="/live-monitoring-project-status"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon name="Activity" size={16} />
                      <span>Live Monitoring</span>
                    </a>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">External Profiles</h4>
                  <div className="space-y-2">
                    <a 
                      href="https://github.com/raissul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon name="Github" size={16} />
                      <span>GitHub Profile</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/raissul-hossain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon name="Linkedin" size={16} />
                      <span>LinkedIn Profile</span>
                    </a>
                    <a 
                      href="/contact-professional-opportunities"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon name="Mail" size={16} />
                      <span>Contact Information</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to discuss opportunities?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in challenging DevOps roles and collaborative projects. Let's connect and explore how I can contribute to your team's success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                onClick={() => window.location.href = '/contact-professional-opportunities'}
                iconName="Mail"
                iconPosition="left"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://linkedin.com/in/raissul-hossain', '_blank')}
                iconName="Linkedin"
                iconPosition="left"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;