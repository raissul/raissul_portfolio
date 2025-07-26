import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import ProjectStats from './components/ProjectStats';
import FeaturedProject from './components/FeaturedProject';

const ProjectsLaboratory = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock Projects Data
  const projects = [
    {
      id: 1,
      title: "DevOps Pipeline Automation",
      description: "Complete CI/CD pipeline implementation with automated testing, deployment, and monitoring for microservices architecture.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop",
      status: "live",
      category: "devops",
      technologies: ["Jenkins", "Docker", "Kubernetes", "AWS", "Terraform", "Ansible", "Prometheus", "Grafana"],
      metrics: {
        duration: "120 hrs",
        complexity: "High",
        impact: "85%"
      },
      githubUrl: "https://github.com/raissul/devops-pipeline",
      liveUrl: "https://pipeline.raissul.dev",
      details: {
        problemStatement: `The development team was struggling with manual deployments, inconsistent environments, and lack of proper monitoring. Deployment failures were frequent, rollbacks were time-consuming, and there was no visibility into system performance. The team needed a robust, automated solution that could handle multiple microservices with zero-downtime deployments.`,
        solutionApproach: `Implemented a comprehensive DevOps pipeline using Jenkins for CI/CD orchestration, containerized all applications with Docker, and deployed them on Kubernetes clusters. Used Infrastructure as Code with Terraform for AWS resource management and Ansible for configuration management. Integrated comprehensive monitoring with Prometheus and Grafana for real-time insights.`,
        keyFeatures: [
          "Automated CI/CD pipeline with multi-stage testing",
          "Blue-green deployment strategy for zero downtime",
          "Infrastructure as Code with version control",
          "Comprehensive monitoring and alerting system",
          "Automated rollback mechanisms",
          "Security scanning integration",
          "Performance testing automation"
        ],
        outcomes: [
          { value: "95%", metric: "Deployment Success Rate" },
          { value: "75%", metric: "Faster Deployments" },
          { value: "60%", metric: "Reduced Manual Work" },
          { value: "99.9%", metric: "System Uptime" }
        ],
        architectureDiagram: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        architectureDescription: `The architecture follows a microservices pattern with each service containerized and deployed independently. The CI/CD pipeline triggers on code commits, runs automated tests, builds Docker images, and deploys to Kubernetes clusters. Terraform manages the underlying AWS infrastructure, while Ansible handles configuration management. Prometheus collects metrics from all services, and Grafana provides visualization dashboards.`,
        dataFlow: [
          "Developer commits code to Git repository",
          "Jenkins webhook triggers CI/CD pipeline",
          "Automated tests run in parallel environments",
          "Docker images built and pushed to registry",
          "Kubernetes deployment with rolling updates",
          "Health checks and smoke tests executed",
          "Monitoring alerts configured automatically"
        ],
        codeSnippets: [
          {
            title: "Jenkins Pipeline Configuration",
            description: "Declarative pipeline for automated CI/CD process",
            code: `pipeline {\n    agent any\n    \n    stages {\n        stage('Test') {\n            steps {\n                sh 'npm test'\n                sh 'npm run test:integration'\n            }\n        }\n        \n        stage('Build') {\n            steps {\n                sh 'docker build -t app:${BUILD_NUMBER} .'\n                sh 'docker push registry/app:${BUILD_NUMBER}'\n            }\n        }\n        \n        stage('Deploy') {\n            steps {\n                sh 'kubectl set image deployment/app app=registry/app:${BUILD_NUMBER}'\n                sh 'kubectl rollout status deployment/app'\n            }\n        }\n    }\n}`
          },
          {
            title: "Kubernetes Deployment",
            description: "Production-ready Kubernetes deployment configuration",
            code: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: microservice-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: microservice-app\n  template:\n    metadata:\n      labels:\n        app: microservice-app\n    spec:\n      containers:\n      - name: app\n        image: registry/app:latest\n        ports:\n        - containerPort: 3000\n        resources:\n          requests:\n            memory: "256Mi"\n            cpu: "250m"\n          limits:\n            memory: "512Mi"\n            cpu: "500m"`
          }
        ],
        lessonsLearned: [
          {
            title: "Infrastructure as Code is Essential",
            description: "Managing infrastructure through code ensures consistency, version control, and reproducibility across environments. Manual infrastructure changes lead to configuration drift and deployment issues."
          },
          {
            title: "Monitoring Should Be Built-In",
            description: "Implementing monitoring and alerting from the beginning saves significant debugging time later. Observability should be a first-class citizen in any DevOps implementation."
          },
          {
            title: "Security Integration is Critical",
            description: "Security scanning and compliance checks must be integrated into the pipeline early. Shifting security left prevents vulnerabilities from reaching production."
          }
        ],
        challenges: [
          {
            challenge: "Complex Kubernetes networking issues during multi-service deployments",
            solution: "Implemented proper service mesh with Istio for better traffic management and observability between microservices"
          },
          {
            challenge: "Resource optimization and cost management in cloud environments",
            solution: "Used Kubernetes resource quotas and implemented auto-scaling policies based on actual usage patterns"
          }
        ]
      }
    },
    {
      id: 2,
      title: "Real-time Monitoring Dashboard",
      description: "Comprehensive monitoring solution with custom dashboards, alerting, and performance analytics for distributed systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      status: "live",
      category: "monitoring",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Node.js", "React", "InfluxDB"],
      metrics: {
        duration: "80 hrs",
        complexity: "Medium",
        impact: "90%"
      },
      githubUrl: "https://github.com/raissul/monitoring-dashboard",
      liveUrl: "https://monitor.raissul.dev",
      details: {
        problemStatement: `The organization lacked visibility into system performance, application health, and user experience metrics. When issues occurred, the team spent hours trying to identify root causes without proper monitoring tools. There was no centralized dashboard to track KPIs, and alerting was reactive rather than proactive.`,
        solutionApproach: `Built a comprehensive monitoring ecosystem using Prometheus for metrics collection, Grafana for visualization, and ELK stack for log analysis. Created custom dashboards for different stakeholders and implemented intelligent alerting based on SLI/SLO principles. Integrated business metrics with technical metrics for holistic monitoring.`,
        keyFeatures: [
          "Real-time system performance monitoring",
          "Custom business metrics dashboards",
          "Intelligent alerting with escalation policies",
          "Log aggregation and analysis",
          "Performance trend analysis",
          "Mobile-responsive dashboard design"
        ],
        outcomes: [
          { value: "80%", metric: "Faster Issue Detection" },
          { value: "65%", metric: "Reduced MTTR" },
          { value: "95%", metric: "Alert Accuracy" },
          { value: "100%", metric: "System Visibility" }
        ],
        architectureDiagram: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        architectureDescription: `The monitoring architecture consists of multiple data collection layers feeding into centralized storage and visualization systems. Prometheus scrapes metrics from applications and infrastructure, while Filebeat and Logstash collect and process logs. Grafana provides unified dashboards, and AlertManager handles notification routing.`,
        dataFlow: [
          "Applications expose metrics via /metrics endpoints",
          "Prometheus scrapes metrics at configured intervals",
          "Logs are collected by Filebeat and sent to Logstash",
          "Processed data stored in InfluxDB and Elasticsearch",
          "Grafana queries data sources for visualization",
          "AlertManager evaluates rules and sends notifications"
        ],
        codeSnippets: [
          {
            title: "Prometheus Configuration",
            description: "Service discovery and scraping configuration",
            code: `global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'microservices'\n    kubernetes_sd_configs:\n      - role: pod\n    relabel_configs:\n      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]\n        action: keep\n        regex: true\n      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]\n        action: replace\n        target_label: __metrics_path__\n        regex: (.+)`
          }
        ],
        lessonsLearned: [
          {
            title: "Metrics Strategy is Crucial",
            description: "Defining the right metrics and SLIs upfront prevents dashboard sprawl and ensures meaningful monitoring. Focus on user-impacting metrics rather than vanity metrics."
          }
        ],
        challenges: [
          {
            challenge: "High cardinality metrics causing storage issues",
            solution: "Implemented metric aggregation and retention policies to manage storage costs while maintaining data quality"
          }
        ]
      }
    },
    {
      id: 3,
      title: "Infrastructure Automation Suite",
      description: "Terraform-based infrastructure provisioning with automated scaling, backup, and disaster recovery capabilities.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      status: "development",
      category: "automation",
      technologies: ["Terraform", "AWS", "Python", "Bash", "CloudFormation", "Ansible"],
      metrics: {
        duration: "100 hrs",
        complexity: "High",
        impact: "70%"
      },
      githubUrl: "https://github.com/raissul/infrastructure-automation",
      details: {
        problemStatement: `Manual infrastructure provisioning was error-prone, time-consuming, and inconsistent across environments. The team needed a way to version control infrastructure changes, ensure environment parity, and implement automated disaster recovery procedures.`,
        solutionApproach: `Developed a comprehensive Infrastructure as Code solution using Terraform for resource provisioning, with automated testing and validation. Implemented modular architecture for reusability and created automated backup and disaster recovery workflows.`,
        keyFeatures: [
          "Multi-environment infrastructure provisioning",
          "Automated backup and disaster recovery",
          "Infrastructure testing and validation",
          "Cost optimization automation",
          "Security compliance automation"
        ],
        outcomes: [
          { value: "90%", metric: "Provisioning Speed" },
          { value: "100%", metric: "Environment Consistency" },
          { value: "50%", metric: "Infrastructure Costs" },
          { value: "99%", metric: "Deployment Success" }
        ],
        architectureDiagram: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        architectureDescription: `The automation suite uses Terraform modules for different infrastructure components, with state management in S3 and DynamoDB for locking. CI/CD pipelines validate and apply infrastructure changes, while monitoring ensures compliance and performance.`,
        dataFlow: [
          "Infrastructure changes committed to Git",
          "CI/CD pipeline validates Terraform code",
          "Terraform plan generated and reviewed",
          "Approved changes applied to target environment",
          "Infrastructure state updated and backed up",
          "Monitoring and compliance checks executed"
        ],
        codeSnippets: [
          {
            title: "Terraform Module Structure",
            description: "Reusable infrastructure module for web applications",
            code: `# modules/web-app/main.tf\nresource "aws_instance" "web" {\n  count         = var.instance_count\n  ami           = var.ami_id\n  instance_type = var.instance_type\n  \n  vpc_security_group_ids = [aws_security_group.web.id]\n  subnet_id              = var.subnet_ids[count.index]\n  \n  user_data = templatefile("$\{path.module}/user_data.sh", {\n    app_name = var.app_name\n  })\n  \n  tags = merge(var.common_tags, {\n    Name = "$\{var.app_name}-web-$\{count.index + 1}"\n  })\n}`
          }
        ],
        lessonsLearned: [
          {
            title: "State Management is Critical",
            description: "Proper Terraform state management prevents conflicts and ensures infrastructure consistency across team members and environments."
          }
        ],
        challenges: [
          {
            challenge: "Managing complex dependencies between infrastructure components",
            solution: "Implemented proper module structure with explicit dependencies and used Terraform workspaces for environment isolation"
          }
        ]
      }
    },
    {
      id: 4,
      title: "Microservices Communication Hub",
      description: "Event-driven microservices architecture with message queuing, service discovery, and distributed tracing.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      status: "live",
      category: "devops",
      technologies: ["Node.js", "RabbitMQ", "Redis", "Docker", "Consul", "Jaeger"],
      metrics: {
        duration: "90 hrs",
        complexity: "High",
        impact: "80%"
      },
      githubUrl: "https://github.com/raissul/microservices-hub",
      liveUrl: "https://services.raissul.dev",
      details: {
        problemStatement: `Monolithic application was becoming difficult to maintain and scale. The team needed to break it down into microservices but required proper communication patterns, service discovery, and observability to manage the distributed system complexity.`,
        solutionApproach: `Designed and implemented an event-driven microservices architecture with proper service boundaries, asynchronous communication patterns, and comprehensive observability. Used message queues for reliable communication and implemented distributed tracing for debugging.`,
        keyFeatures: [
          "Event-driven architecture with message queues",
          "Service discovery and load balancing",
          "Distributed tracing and observability",
          "Circuit breaker pattern implementation",
          "API gateway with rate limiting"
        ],
        outcomes: [
          { value: "60%", metric: "Improved Scalability" },
          { value: "40%", metric: "Faster Development" },
          { value: "99.5%", metric: "Service Availability" },
          { value: "50%", metric: "Reduced Coupling" }
        ],
        architectureDiagram: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        architectureDescription: `The microservices architecture uses an API gateway for external communication, with services communicating via RabbitMQ message queues. Consul provides service discovery, Redis handles caching, and Jaeger enables distributed tracing across the entire system.`,
        dataFlow: [
          "Client requests enter through API gateway",
          "Gateway routes requests to appropriate services",
          "Services communicate via message queues",
          "Events published to interested subscribers",
          "Distributed traces collected by Jaeger",
          "Metrics and logs aggregated for monitoring"
        ],
        codeSnippets: [
          {
            title: "Event Publisher Service",
            description: "Microservice event publishing implementation",
            code: `const amqp = require('amqplib');\nconst EventEmitter = require('events');\n\nclass EventPublisher extends EventEmitter {\n  constructor(connectionString) {\n    super();\n    this.connectionString = connectionString;\n    this.connection = null;\n    this.channel = null;\n  }\n\n  async connect() {\n    this.connection = await amqp.connect(this.connectionString);\n    this.channel = await this.connection.createChannel();\n  }\n\n  async publishEvent(exchange, routingKey, data) {\n    const message = JSON.stringify({\n      ...data,\n      timestamp: new Date().toISOString(),\n      traceId: this.generateTraceId()\n    });\n    \n    return this.channel.publish(exchange, routingKey, Buffer.from(message));\n  }\n}`
          }
        ],
        lessonsLearned: [
          {
            title: "Service Boundaries Matter",
            description: "Proper service decomposition based on business capabilities rather than technical layers leads to more maintainable and scalable systems."
          }
        ],
        challenges: [
          {
            challenge: "Managing distributed transactions and data consistency",
            solution: "Implemented saga pattern for distributed transactions and eventual consistency with compensating actions"
          }
        ]
      }
    },
    {
      id: 5,
      title: "Portfolio Website Platform",
      description: "Modern React-based portfolio platform with dynamic content management, responsive design, and performance optimization.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      status: "live",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Vite", "Framer Motion", "React Router"],
      metrics: {
        duration: "60 hrs",
        complexity: "Medium",
        impact: "95%"
      },
      githubUrl: "https://github.com/raissul/portfolio-platform",
      liveUrl: "https://raissul.dev",
      details: {
        problemStatement: `Needed a professional online presence that effectively showcases technical skills, projects, and professional journey. The platform should be fast, responsive, and provide an engaging user experience while maintaining professional credibility.`,
        solutionApproach: `Built a modern React application with component-based architecture, responsive design, and smooth animations. Implemented performance optimizations, SEO best practices, and accessibility standards to ensure broad reach and professional presentation.`,
        keyFeatures: [
          "Responsive design for all devices",
          "Smooth animations and interactions",
          "Performance optimized loading",
          "SEO and accessibility compliant",
          "Dynamic content management"
        ],
        outcomes: [
          { value: "98", metric: "Lighthouse Score" },
          { value: "2.1s", metric: "Load Time" },
          { value: "100%", metric: "Mobile Responsive" },
          { value: "AA", metric: "Accessibility Rating" }
        ],
        architectureDiagram: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
        architectureDescription: `The platform uses React with Vite for fast development and building, Tailwind CSS for styling, and Framer Motion for animations. The architecture follows modern React patterns with functional components, custom hooks, and efficient state management.`,
        dataFlow: [
          "User navigates to portfolio website",
          "React Router handles client-side routing",
          "Components render with optimized loading",
          "Animations triggered by user interactions",
          "Content loaded dynamically as needed",
          "Performance metrics tracked and optimized"
        ],
        codeSnippets: [
          {
            title: "Custom Hook for Animations",
            description: "Reusable hook for scroll-triggered animations",
            code: `import { useEffect, useRef, useState } from 'react';\nimport { useInView } from 'framer-motion';\n\nexport const useScrollAnimation = (threshold = 0.1) => {\n  const ref = useRef(null);\n  const isInView = useInView(ref, { threshold });\n  const [hasAnimated, setHasAnimated] = useState(false);\n\n  useEffect(() => {\n    if (isInView && !hasAnimated) {\n      setHasAnimated(true);\n    }\n  }, [isInView, hasAnimated]);\n\n  return { ref, isInView, hasAnimated };\n};`
          }
        ],
        lessonsLearned: [
          {
            title: "Performance is User Experience",
            description: "Fast loading times and smooth interactions directly impact user engagement and professional perception. Every optimization matters."
          }
        ],
        challenges: [
          {
            challenge: "Balancing rich animations with performance requirements",
            solution: "Implemented lazy loading, code splitting, and optimized animation triggers to maintain 60fps performance"
          }
        ]
      }
    },
    {
      id: 6,
      title: "Mobile Task Manager",
      description: "Cross-platform mobile application for task management with offline capabilities and real-time synchronization.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      status: "archived",
      category: "mobile",
      technologies: ["React Native", "Redux", "SQLite", "Firebase", "AsyncStorage"],
      metrics: {
        duration: "70 hrs",
        complexity: "Medium",
        impact: "60%"
      },
      githubUrl: "https://github.com/raissul/mobile-task-manager",
      details: {
        problemStatement: `Users needed a reliable task management solution that works offline and synchronizes across devices. The application should provide intuitive task organization, reminders, and progress tracking while maintaining data consistency.`,
        solutionApproach: `Developed a React Native application with offline-first architecture, local SQLite storage, and Firebase synchronization. Implemented Redux for state management and created an intuitive user interface with smooth animations.`,
        keyFeatures: [
          "Offline-first task management",
          "Real-time synchronization",
          "Push notifications and reminders",
          "Task categorization and filtering",
          "Progress tracking and analytics"
        ],
        outcomes: [
          { value: "4.2", metric: "App Store Rating" },
          { value: "500+", metric: "Active Users" },
          { value: "95%", metric: "Offline Reliability" },
          { value: "85%", metric: "User Retention" }
        ],
        architectureDiagram: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
        architectureDescription: `The mobile app uses React Native for cross-platform development, with Redux managing application state. Local data is stored in SQLite for offline access, while Firebase handles cloud synchronization and push notifications.`,
        dataFlow: [
          "User creates or modifies tasks locally",
          "Changes stored in local SQLite database",
          "Redux state updated for UI consistency",
          "Background sync uploads changes to Firebase",
          "Push notifications sent for reminders",
          "Conflict resolution for concurrent edits"
        ],
        codeSnippets: [
          {
            title: "Offline Sync Manager",
            description: "Handles offline data synchronization with conflict resolution",
            code: `class SyncManager {\n  constructor(localDB, cloudDB) {\n    this.localDB = localDB;\n    this.cloudDB = cloudDB;\n    this.syncQueue = [];\n  }\n\n  async syncToCloud() {\n    const pendingChanges = await this.localDB.getPendingSync();\n    \n    for (const change of pendingChanges) {\n      try {\n        await this.cloudDB.update(change.id, change.data);\n        await this.localDB.markSynced(change.id);\n      } catch (error) {\n        await this.handleSyncConflict(change, error);\n      }\n    }\n  }\n}`
          }
        ],
        lessonsLearned: [
          {
            title: "Offline-First Architecture is Complex",
            description: "Building reliable offline functionality requires careful consideration of data synchronization, conflict resolution, and user experience during network transitions."
          }
        ],
        challenges: [
          {
            challenge: "Handling data conflicts during synchronization",
            solution: "Implemented last-write-wins with user notification for conflicts, allowing manual resolution when needed"
          }
        ]
      }
    }
  ];

  // Filter projects based on active filters
  const filteredProjects = projects.filter(project => {
    const matchesStatus = activeFilter === 'all' || project.status === activeFilter;
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesStatus && matchesCategory && matchesSearch;
  });

  // Calculate project counts for filters
  const projectCounts = {
    all: projects.length,
    live: projects.filter(p => p.status === 'live').length,
    development: projects.filter(p => p.status === 'development').length,
    archived: projects.filter(p => p.status === 'archived').length
  };

  // Get featured project (first live project)
  const featuredProject = projects.find(p => p.status === 'live');

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    document.title = 'Projects & Technical Laboratory - Raissul Portfolio';
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Icon name="FolderOpen" size={24} className="text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Technical Laboratory
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Projects & Case Studies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore my hands-on projects showcasing DevOps capabilities, system architecture decisions, 
                and lessons learned from real-world implementations. Each project includes detailed technical 
                analysis and measurable outcomes.
              </p>
            </div>

            {/* Project Stats */}
            <ProjectStats projects={projects} />
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FeaturedProject 
              project={featuredProject} 
              onViewDetails={handleViewDetails}
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                All Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse through my complete project portfolio with detailed case studies, 
                architecture diagrams, and technical insights.
              </p>
            </div>

            {/* Filters */}
            <ProjectFilter
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              projectCounts={projectCounts}
            />

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No Projects Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or search query to find relevant projects.
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => {
                      setActiveFilter('all');
                      setActiveCategory('all');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Interested in Collaboration?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm always excited to work on challenging projects and share knowledge with fellow engineers. Let's build something amazing together.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => window.location.href = '/contact-professional-opportunities'}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get In Touch
              </button>
              <button
                onClick={() => window.open('https://github.com/raissul', '_blank')}
                className="px-8 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
              >
                View GitHub
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectsLaboratory;