import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SkillsFilter from './components/SkillsFilter';
import SkillCard from './components/SkillCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import LearningLab from './components/LearningLab';
import SkillsOverview from './components/SkillsOverview';

const TechnicalSkillsExperienceMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLevel, setActiveLevel] = useState('all');
  const [activeStatus, setActiveStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('overview');

  // Mock skills data
  const skillsData = [
    {
      id: 1,
      name: "Amazon Web Services (AWS)",
      category: "cloud",
      level: "advanced",
      proficiency: 85,
      status: "proficient",
      experience: "2+ years",
      context: "Production Environment",
      description: "Comprehensive cloud infrastructure management and services",
      applications: ["EC2 Management", "S3 Storage Solutions", "Lambda Functions", "VPC Networking", "IAM Security", "CloudWatch Monitoring"],
      examples: [
        "Migrated legacy applications to AWS EC2 with 99.9% uptime",
        "Implemented auto-scaling groups reducing costs by 30%",
        "Set up multi-AZ RDS instances for high availability",
        "Created Lambda functions for automated backup processes"
      ],
      challenge: "Successfully migrated a monolithic application to microservices architecture on AWS, reducing deployment time from 2 hours to 15 minutes while improving system reliability.",
      learningResources: ["AWS Documentation", "A Cloud Guru", "AWS Well-Architected Framework"],
      nextSteps: "Working towards AWS Solutions Architect Professional certification and exploring advanced networking patterns."
    },
    {
      id: 2,
      name: "Docker",
      category: "containers",
      level: "advanced",
      proficiency: 90,
      status: "mastered",
      experience: "3+ years",
      context: "Daily Development & Production",
      description: "Containerization platform for application deployment",
      applications: ["Application Containerization", "Multi-stage Builds", "Docker Compose", "Registry Management", "Security Scanning"],
      examples: [
        "Containerized 15+ microservices with optimized Dockerfiles",
        "Reduced image sizes by 60% using multi-stage builds",
        "Implemented Docker security best practices and scanning",
        "Created standardized base images for development teams"
      ],
      challenge: "Optimized Docker images for a fintech application, reducing deployment size from 2GB to 400MB while maintaining all functionality and security requirements.",
      learningResources: ["Docker Documentation", "Docker Deep Dive Book", "Container Security Guides"],
      nextSteps: "Exploring advanced Docker features like BuildKit and experimenting with rootless containers."
    },
    {
      id: 3,
      name: "Kubernetes",
      category: "containers",
      level: "intermediate",
      proficiency: 75,
      status: "proficient",
      experience: "1.5+ years",
      context: "Production Orchestration",
      description: "Container orchestration platform for scalable deployments",
      applications: ["Cluster Management", "Pod Orchestration", "Service Discovery", "ConfigMaps & Secrets", "Ingress Controllers"],
      examples: [
        "Deployed and managed 3-node Kubernetes cluster",
        "Implemented rolling updates with zero downtime",
        "Set up Helm charts for application deployments",
        "Configured horizontal pod autoscaling based on metrics"
      ],
      challenge: "Resolved complex networking issues in a multi-tenant Kubernetes environment, implementing proper network policies and service mesh integration.",
      learningResources: ["Kubernetes Documentation", "KodeKloud", "CNCF Training"],
      nextSteps: "Preparing for CKA certification and learning advanced patterns like operators and custom resources."
    },
    {
      id: 4,
      name: "Jenkins",
      category: "cicd",
      level: "advanced",
      proficiency: 80,
      status: "proficient",
      experience: "2+ years",
      context: "CI/CD Pipeline Management",
      description: "Automation server for continuous integration and deployment",
      applications: ["Pipeline Creation", "Plugin Management", "Build Automation", "Deployment Orchestration", "Integration Testing"],
      examples: [
        "Built CI/CD pipelines for 10+ microservices",
        "Implemented parallel testing reducing build time by 50%",
        "Set up automated deployment to multiple environments",
        "Integrated security scanning into pipeline workflows"
      ],
      challenge: "Designed a complex multi-branch pipeline strategy that automatically deploys feature branches to isolated environments, enabling faster development cycles.",
      learningResources: ["Jenkins Documentation", "Pipeline as Code", "DevOps Best Practices"],
      nextSteps: "Exploring Jenkins X and cloud-native CI/CD alternatives like Tekton."
    },
    {
      id: 5,
      name: "Terraform",
      category: "iac",
      level: "advanced",
      proficiency: 85,
      status: "mastered",
      experience: "2+ years",
      context: "Infrastructure Automation",
      description: "Infrastructure as Code tool for cloud resource management",
      applications: ["AWS Resource Provisioning", "State Management", "Module Development", "Multi-Environment Deployments"],
      examples: [
        "Automated provisioning of complete AWS infrastructure",
        "Created reusable modules for common infrastructure patterns",
        "Implemented remote state management with S3 and DynamoDB",
        "Set up infrastructure for multiple environments using workspaces"
      ],
      challenge: "Migrated manually created infrastructure to Terraform code, ensuring zero downtime and maintaining all existing configurations and security settings.",
      learningResources: ["HashiCorp Learn", "Terraform Documentation", "Infrastructure as Code Patterns"],
      nextSteps: "Exploring Terraform Cloud features and advanced state management patterns."
    },
    {
      id: 6,
      name: "Prometheus",
      category: "monitoring",
      level: "intermediate",
      proficiency: 70,
      status: "proficient",
      experience: "1+ years",
      context: "System Monitoring",
      description: "Open-source monitoring and alerting toolkit",
      applications: ["Metrics Collection", "Alert Rules", "Service Discovery", "Custom Exporters", "PromQL Queries"],
      examples: [
        "Set up Prometheus monitoring for Kubernetes cluster",
        "Created custom metrics for business KPIs",
        "Implemented alerting rules for critical system events",
        "Built dashboards for infrastructure and application metrics"
      ],
      challenge: "Designed a comprehensive monitoring strategy that reduced mean time to detection (MTTD) from 15 minutes to 2 minutes for critical issues.",
      learningResources: ["Prometheus Documentation", "Monitoring Best Practices", "PromQL Guide"],
      nextSteps: "Learning advanced PromQL queries and exploring Thanos for long-term storage."
    },
    {
      id: 7,
      name: "Grafana",
      category: "monitoring",
      level: "intermediate",
      proficiency: 75,
      status: "proficient",
      experience: "1+ years",
      context: "Data Visualization",
      description: "Open-source analytics and monitoring solution",
      applications: ["Dashboard Creation", "Data Source Integration", "Alerting", "User Management", "Custom Panels"],
      examples: [
        "Built 20+ dashboards for different teams and services",
        "Integrated multiple data sources (Prometheus, CloudWatch, Elasticsearch)",
        "Set up automated reporting and dashboard sharing",
        "Created custom panels for business-specific metrics"
      ],
      challenge: "Created a unified monitoring dashboard that provides real-time visibility into system health, business metrics, and user experience across all services.",
      learningResources: ["Grafana Documentation", "Dashboard Design Best Practices", "Data Visualization Principles"],
      nextSteps: "Exploring Grafana Cloud features and advanced alerting configurations."
    },
    {
      id: 8,
      name: "Ansible",
      category: "iac",
      level: "intermediate",
      proficiency: 65,
      status: "learning",
      experience: "8 months",
      context: "Configuration Management",
      description: "Automation tool for configuration management and application deployment",
      applications: ["Server Configuration", "Application Deployment", "Playbook Development", "Inventory Management"],
      examples: [
        "Automated server configuration for development environments",
        "Created playbooks for application deployment across multiple servers",
        "Implemented role-based configuration management",
        "Set up automated security patching workflows"
      ],
      challenge: "Standardized server configurations across development, staging, and production environments, reducing configuration drift and deployment issues.",
      learningResources: ["Ansible Documentation", "Automation Best Practices", "YAML Configuration"],
      nextSteps: "Learning Ansible Tower/AWX and exploring advanced automation patterns."
    },
    {
      id: 9,
      name: "MySQL",
      category: "databases",
      level: "intermediate",
      proficiency: 70,
      status: "proficient",
      experience: "2+ years",
      context: "Database Administration",
      description: "Relational database management system",
      applications: ["Database Design", "Performance Tuning", "Backup & Recovery", "Replication Setup", "Security Configuration"],
      examples: [
        "Optimized database queries reducing response time by 40%",
        "Set up master-slave replication for high availability",
        "Implemented automated backup and recovery procedures",
        "Configured database monitoring and alerting"
      ],
      challenge: "Migrated a legacy MySQL database to AWS RDS with minimal downtime while maintaining data integrity and improving performance.",
      learningResources: ["MySQL Documentation", "Database Performance Tuning", "High Availability Patterns"],
      nextSteps: "Learning advanced MySQL features and exploring MySQL 8.0 capabilities."
    },
    {
      id: 10,
      name: "Git & GitHub",
      category: "cicd",
      level: "advanced",
      proficiency: 90,
      status: "mastered",
      experience: "3+ years",
      context: "Version Control & Collaboration",
      description: "Distributed version control system and collaboration platform",
      applications: ["Version Control", "Branch Management", "Code Review", "GitHub Actions", "Repository Management"],
      examples: [
        "Implemented GitFlow workflow for team collaboration",
        "Set up automated testing and deployment with GitHub Actions",
        "Created comprehensive branching strategies for multiple projects",
        "Managed code reviews and merge processes for development teams"
      ],
      challenge: "Established a robust Git workflow that improved code quality and reduced merge conflicts by 70% across multiple development teams.",
      learningResources: ["Git Documentation", "GitHub Best Practices", "Advanced Git Workflows"],
      nextSteps: "Exploring advanced Git features and GitHub Enterprise capabilities."
    }
  ];

  // Filter skills based on active filters and search term
  const filteredSkills = useMemo(() => {
    return skillsData.filter(skill => {
      const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
      const matchesLevel = activeLevel === 'all' || skill.level === activeLevel;
      const matchesStatus = activeStatus === 'all' || skill.status === activeStatus;
      const matchesSearch = searchTerm === '' || 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        skill.applications.some(app => app.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesLevel && matchesStatus && matchesSearch;
    });
  }, [activeCategory, activeLevel, activeStatus, searchTerm]);

  const sections = [
    { id: 'overview', name: 'Skills Overview', icon: 'BarChart3' },
    { id: 'skills', name: 'Technical Skills', icon: 'Code' },
    { id: 'experience', name: 'Experience Timeline', icon: 'Briefcase' },
    { id: 'learning', name: 'Learning Lab', icon: 'BookOpen' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <Icon name="Code" size={32} className="text-primary-foreground" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Technical Skills & Experience Matrix
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive showcase of my technical capabilities, real-world experience, and continuous learning journey in DevOps and cloud infrastructure.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Avg Proficiency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Hours/Week Learning</div>
              </div>
            </div>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
                }`}
              >
                <Icon name={section.icon} size={16} />
                <span>{section.name}</span>
              </button>
            ))}
          </div>

          {/* Content Sections */}
          {activeSection === 'overview' && <SkillsOverview />}

          {activeSection === 'skills' && (
            <div>
              <SkillsFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                activeLevel={activeLevel}
                setActiveLevel={setActiveLevel}
                activeStatus={activeStatus}
                setActiveStatus={setActiveStatus}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />

              {/* Skills Grid */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-foreground">
                    Technical Skills ({filteredSkills.length})
                  </h2>
                  {searchTerm && (
                    <div className="text-sm text-muted-foreground">
                      Showing results for "{searchTerm}"
                    </div>
                  )}
                </div>

                {filteredSkills.length === 0 ? (
                  <div className="text-center py-12">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No skills found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your filters or search term to find relevant skills.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredSkills.map((skill) => (
                      <SkillCard key={skill.id} skill={skill} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeSection === 'experience' && <ExperienceTimeline />}

          {activeSection === 'learning' && <LearningLab />}
        </div>
      </main>
    </div>
  );
};

export default TechnicalSkillsExperienceMatrix;