import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Microservices Monitoring Platform',
      description: 'Comprehensive monitoring solution for microservices architecture using Prometheus, Grafana, and custom alerting systems.',
      technologies: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Python'],
      status: 'Production',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      architecture: {
        components: ['API Gateway', 'Service Mesh', 'Monitoring Stack', 'Alert Manager'],
        metrics: ['99.9% Uptime', '< 200ms Response', '24/7 Monitoring']
      },
      highlights: [
        'Reduced incident response time by 75%',
        'Automated alerting for 50+ services',
        'Custom dashboards for different teams'
      ],
      githubUrl: 'https://github.com/raissul/microservices-monitoring',
      liveUrl: 'https://monitoring.raissul.dev'
    },
    {
      id: 2,
      title: 'CI/CD Pipeline Automation',
      description: 'Fully automated CI/CD pipeline with multi-environment deployments, automated testing, and rollback capabilities.',
      technologies: ['Jenkins', 'Docker', 'AWS', 'Terraform', 'Ansible'],
      status: 'Active',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop',
      architecture: {
        components: ['Source Control', 'Build Pipeline', 'Test Automation', 'Deployment'],
        metrics: ['15 min Deploy', '99% Success Rate', '0 Downtime']
      },
      highlights: [
        'Automated deployment to 3 environments',
        'Integrated security scanning',
        'Zero-downtime deployments'
      ],
      githubUrl: 'https://github.com/raissul/cicd-automation',
      liveUrl: 'https://pipeline.raissul.dev'
    },
    {
      id: 3,
      title: 'Infrastructure as Code Framework',
      description: 'Modular Terraform framework for provisioning and managing cloud infrastructure across multiple providers.',
      technologies: ['Terraform', 'AWS', 'GCP', 'Azure', 'Bash'],
      status: 'Maintained',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
      architecture: {
        components: ['Terraform Modules', 'State Management', 'Policy Engine', 'Cost Optimization'],
        metrics: ['Multi-Cloud', '50+ Resources', 'Cost Optimized']
      },
      highlights: [
        'Reduced infrastructure setup time by 80%',
        'Standardized across 3 cloud providers',
        'Built-in security best practices'
      ],
      githubUrl: 'https://github.com/raissul/terraform-framework',
      liveUrl: 'https://infrastructure.raissul.dev'
    },
    {
      id: 4,
      title: 'Container Security Scanner',
      description: 'Automated security scanning tool for Docker containers with vulnerability assessment and compliance reporting.',
      technologies: ['Python', 'Docker', 'Security Tools', 'REST API', 'PostgreSQL'],
      status: 'Beta',
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop',
      architecture: {
        components: ['Scanner Engine', 'Vulnerability DB', 'Report Generator', 'API Gateway'],
        metrics: ['1000+ Scans/day', '99.5% Accuracy', 'Real-time Reports']
      },
      highlights: [
        'Integrated with CI/CD pipeline',
        'Custom vulnerability database',
        'Automated compliance reporting'
      ],
      githubUrl: 'https://github.com/raissul/container-security',
      liveUrl: 'https://security.raissul.dev'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'production': return 'bg-success text-success-foreground';
      case 'active': return 'bg-primary text-primary-foreground';
      case 'maintained': return 'bg-accent text-accent-foreground';
      case 'beta': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="FolderOpen" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my key DevOps projects that demonstrate real-world problem-solving and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-black/50 text-white text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Architecture Overview */}
                {hoveredProject === project.id && (
                  <div className="mb-4 p-4 bg-muted/50 rounded-lg animate-fade-in">
                    <h4 className="text-sm font-medium text-foreground mb-2">Architecture</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Components</div>
                        <div className="space-y-1">
                          {project.architecture.components.map((component, index) => (
                            <div key={index} className="flex items-center space-x-1">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span className="text-xs text-foreground">{component}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">Key Metrics</div>
                        <div className="space-y-1">
                          {project.architecture.metrics.map((metric, index) => (
                            <div key={index} className="flex items-center space-x-1">
                              <div className="w-1 h-1 bg-success rounded-full"></div>
                              <span className="text-xs text-foreground">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Key Achievements</h4>
                  <div className="space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={12} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon name="Github" size={16} />
                      <span className="text-sm">Code</span>
                    </button>
                    <button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon name="ExternalLink" size={16} />
                      <span className="text-sm">Live</span>
                    </button>
                  </div>
                  <button
                    onClick={() => window.location.href = '/projects-technical-laboratory'}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.location.href = '/projects-technical-laboratory'}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Icon name="FolderOpen" size={18} />
            <span>Explore All Projects</span>
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        {/* Project Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary mb-1">12+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-success mb-1">99.9%</div>
            <div className="text-sm text-muted-foreground">Average Uptime</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-warning mb-1">4</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-accent mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Monitoring</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;