import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const CurrentlyLearning = () => {
  const [progressAnimated, setProgressAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const learningPaths = [
    {
      id: 1,
      title: 'AWS Solutions Architect Professional',
      provider: 'Amazon Web Services',
      category: 'Cloud Architecture',
      progress: 78,
      targetDate: 'March 2025',
      icon: 'Award',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      description: 'Advanced AWS architecture patterns, cost optimization, and enterprise-scale solutions',
      currentTopic: 'Multi-region disaster recovery strategies',
      studyHours: 45,
      totalHours: 80,
      resources: [
        'AWS Official Training',
        'A Cloud Guru Course',
        'Hands-on Labs',
        'Practice Exams'
      ],
      milestones: [
        { name: 'Core Services Mastery', completed: true },
        { name: 'Security & Compliance', completed: true },
        { name: 'Cost Optimization', completed: false },
        { name: 'Practice Exams', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Certified Kubernetes Administrator (CKA)',
      provider: 'Cloud Native Computing Foundation',
      category: 'Container Orchestration',
      progress: 65,
      targetDate: 'February 2025',
      icon: 'Container',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/20',
      description: 'Kubernetes cluster administration, troubleshooting, and advanced networking',
      currentTopic: 'Network policies and service mesh integration',
      studyHours: 32,
      totalHours: 60,
      resources: [
        'Kubernetes Documentation',
        'KodeKloud Course',
        'Practice Clusters',
        'CNCF Resources'
      ],
      milestones: [
        { name: 'Cluster Setup', completed: true },
        { name: 'Workload Management', completed: true },
        { name: 'Networking', completed: false },
        { name: 'Troubleshooting', completed: false }
      ]
    },
    {
      id: 3,
      title: 'HashiCorp Terraform Associate',
      provider: 'HashiCorp',
      category: 'Infrastructure as Code',
      progress: 45,
      targetDate: 'April 2025',
      icon: 'Code',
      color: 'text-purple-600',
      bgColor: 'bg-purple-600/10',
      borderColor: 'border-purple-600/20',
      description: 'Advanced Terraform patterns, state management, and enterprise workflows',
      currentTopic: 'Terraform modules and workspace management',
      studyHours: 18,
      totalHours: 50,
      resources: [
        'HashiCorp Learn',
        'Terraform Documentation',
        'Real-world Projects',
        'Community Forums'
      ],
      milestones: [
        { name: 'Basic Syntax', completed: true },
        { name: 'State Management', completed: false },
        { name: 'Modules & Functions', completed: false },
        { name: 'Enterprise Features', completed: false }
      ]
    }
  ];

  const skillsInProgress = [
    {
      name: 'Service Mesh (Istio)',
      progress: 35,
      icon: 'Network',
      color: 'text-indigo-500'
    },
    {
      name: 'GitOps with ArgoCD',
      progress: 60,
      icon: 'GitBranch',
      color: 'text-green-500'
    },
    {
      name: 'Observability (OpenTelemetry)',
      progress: 25,
      icon: 'Eye',
      color: 'text-yellow-500'
    },
    {
      name: 'Security Scanning (Trivy)',
      progress: 70,
      icon: 'Shield',
      color: 'text-red-500'
    }
  ];

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 60) return 'bg-primary';
    if (progress >= 40) return 'bg-warning';
    return 'bg-accent';
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="BookOpen" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Continuous Growth</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Currently Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My commitment to continuous learning and professional development in the ever-evolving DevOps landscape
          </p>
        </div>

        {/* Learning Paths */}
        <div className="space-y-8 mb-12">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              className={`bg-card rounded-lg border ${path.borderColor} p-6 hover:shadow-lg transition-all duration-200`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${path.bgColor}`}>
                        <Icon name={path.icon} size={20} className={path.color} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{path.title}</h3>
                        <p className="text-sm text-muted-foreground">{path.provider}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{path.progress}%</div>
                      <div className="text-xs text-muted-foreground">Target: {path.targetDate}</div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{path.description}</p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground">{path.studyHours}/{path.totalHours} hours</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(path.progress)}`}
                        style={{ width: progressAnimated ? `${path.progress}%` : '0%' }}
                      ></div>
                    </div>
                  </div>

                  {/* Current Topic */}
                  <div className={`p-3 rounded-lg ${path.bgColor} border ${path.borderColor}`}>
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon name="BookOpen" size={14} className={path.color} />
                      <span className="text-xs font-medium text-foreground">Currently Studying</span>
                    </div>
                    <p className="text-sm text-foreground">{path.currentTopic}</p>
                  </div>
                </div>

                {/* Milestones & Resources */}
                <div className="space-y-4">
                  {/* Milestones */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">Learning Milestones</h4>
                    <div className="space-y-2">
                      {path.milestones.map((milestone, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon 
                            name={milestone.completed ? "CheckCircle" : "Circle"} 
                            size={14} 
                            className={milestone.completed ? "text-success" : "text-muted-foreground"} 
                          />
                          <span className={`text-xs ${milestone.completed ? "text-foreground" : "text-muted-foreground"}`}>
                            {milestone.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Resources */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">Study Resources</h4>
                    <div className="space-y-1">
                      {path.resources.map((resource, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="ExternalLink" size={12} className="text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills in Progress */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">Additional Skills in Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsInProgress.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name={skill.icon} size={16} className={skill.color} />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.progress)}`}
                    style={{ width: progressAnimated ? `${skill.progress}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-primary mb-1">95</div>
            <div className="text-sm text-muted-foreground">Study Hours This Month</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-success mb-1">3</div>
            <div className="text-sm text-muted-foreground">Certifications in Progress</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-warning mb-1">12</div>
            <div className="text-sm text-muted-foreground">Hands-on Labs Completed</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border border-border">
            <div className="text-2xl font-bold text-accent mb-1">85%</div>
            <div className="text-sm text-muted-foreground">Average Progress Rate</div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="Lightbulb" size={20} className="text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Learning Philosophy</h3>
          </div>
          <p className="text-muted-foreground">
            "In the rapidly evolving world of DevOps, continuous learning isn't just an advantage—it's essential. 
            I believe in hands-on learning, practical application, and sharing knowledge with the community. 
            Every certification and skill I pursue directly contributes to solving real-world infrastructure challenges."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;