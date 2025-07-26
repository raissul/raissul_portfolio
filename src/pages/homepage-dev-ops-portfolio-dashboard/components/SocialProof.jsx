import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const currentRole = {
    company: 'Sheba Fintech LTD',
    position: 'Systems Engineer',
    duration: 'Jan 2023 - Present',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
    description: 'Leading infrastructure automation and monitoring initiatives for Bangladesh\'s largest fintech platform',
    achievements: [
      'Reduced deployment time by 70% through CI/CD automation',
      'Implemented monitoring for 50+ microservices',
      'Achieved 99.9% uptime for critical financial services',
      'Led migration to containerized infrastructure'
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Prometheus']
  };

  const communityContributions = [
    {
      type: 'Open Source',
      title: 'DevOps Automation Scripts',
      description: 'Collection of Bash and Python scripts for common DevOps tasks',
      stats: '150+ stars, 45 forks',
      icon: 'Github',
      color: 'text-gray-800'
    },
    {
      type: 'Technical Writing',
      title: 'Medium Articles',
      description: 'DevOps best practices and tutorials',
      stats: '2.5K followers, 15K+ views',
      icon: 'PenTool',
      color: 'text-green-600'
    },
    {
      type: 'Community',
      title: 'Stack Overflow',
      description: 'Helping developers with DevOps questions',
      stats: '1.2K reputation, 25 answers',
      icon: 'HelpCircle',
      color: 'text-orange-500'
    },
    {
      type: 'Speaking',
      title: 'Tech Meetups',
      description: 'Local DevOps and cloud computing presentations',
      stats: '3 talks, 200+ attendees',
      icon: 'Mic',
      color: 'text-blue-500'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Rahman',
      role: 'Senior DevOps Engineer',
      company: 'TechCorp BD',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: `Raissul's expertise in containerization and monitoring is exceptional. His automation scripts have saved our team countless hours and improved our deployment reliability significantly.`,
      rating: 5
    },
    {
      name: 'Sarah Johnson',role: 'Cloud Architect',company: 'Global Solutions Inc',avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: `Working with Raissul on infrastructure projects has been a great experience. His attention to detail and problem-solving approach make him a valuable team member.`,
      rating: 5
    },
    {
      name: 'Mohammad Ali',role: 'Technical Lead',company: 'Fintech Innovations',avatar: 'https://randomuser.me/api/portraits/men/56.jpg',content: `Raissul's contributions to our monitoring setup were game-changing. The dashboards and alerting systems he implemented have dramatically improved our incident response time.`,
      rating: 5
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'Dec 2023',
      status: 'Active',
      icon: 'Award',
      color: 'text-orange-500'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc',
      date: 'Sep 2023',
      status: 'Active',
      icon: 'Container',
      color: 'text-blue-500'
    },
    {
      name: 'Certified Jenkins Engineer',
      issuer: 'CloudBees',
      date: 'Jun 2023',
      status: 'Active',
      icon: 'GitBranch',
      color: 'text-blue-600'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={14}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Users" size={20} className="text-success" />
            <span className="text-sm font-medium text-success">Professional Recognition</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Social Proof & Credibility
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional achievements, community contributions, and peer recognition in the DevOps ecosystem
          </p>
        </div>

        {/* Current Role Highlight */}
        <div className="mb-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20 p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-card rounded-lg border border-border flex items-center justify-center overflow-hidden">
                <Image
                  src={currentRole.logo}
                  alt={currentRole.company}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{currentRole.position}</h3>
                  <p className="text-lg text-primary font-medium">{currentRole.company}</p>
                  <p className="text-sm text-muted-foreground">{currentRole.duration}</p>
                </div>
                <div className="flex items-center space-x-2 mt-2 lg:mt-0">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-success font-medium">Currently Active</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{currentRole.description}</p>
              
              {/* Key Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {currentRole.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2">
                {currentRole.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community Contributions */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Community Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityContributions.map((contribution, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-lg transition-all duration-200">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <Icon name={contribution.icon} size={24} className={contribution.color} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{contribution.type}</div>
                  <h4 className="text-sm font-semibold text-foreground">{contribution.title}</h4>
                  <p className="text-xs text-muted-foreground">{contribution.description}</p>
                  <div className="text-sm font-medium text-primary">{contribution.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">What Colleagues Say</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg border border-border p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-card rounded-lg">
                    <Icon name={cert.icon} size={20} className={cert.color} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-muted-foreground">{cert.date}</span>
                    <span className="text-xs px-2 py-0.5 bg-success/10 text-success rounded-full">
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-success mb-1">3+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-warning mb-1">5</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-accent mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;