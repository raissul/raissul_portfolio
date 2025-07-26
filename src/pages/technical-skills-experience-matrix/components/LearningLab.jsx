import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningLab = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  const certifications = [
    {
      id: 1,
      name: "AWS Solutions Architect Associate",
      provider: "Amazon Web Services",
      status: "in-progress",
      progress: 75,
      targetDate: "March 2024",
      description: "Comprehensive cloud architecture and AWS services certification",
      studyMaterials: ["AWS Official Training", "A Cloud Guru", "Practice Labs"],
      estimatedHours: 120,
      completedHours: 90
    },
    {
      id: 2,
      name: "Certified Kubernetes Administrator (CKA)",
      provider: "Cloud Native Computing Foundation",
      status: "planned",
      progress: 25,
      targetDate: "May 2024",
      description: "Hands-on Kubernetes cluster administration and troubleshooting",
      studyMaterials: ["Kubernetes Documentation", "KodeKloud", "Practice Clusters"],
      estimatedHours: 100,
      completedHours: 25
    },
    {
      id: 3,
      name: "HashiCorp Terraform Associate",
      provider: "HashiCorp",
      status: "completed",
      progress: 100,
      completedDate: "January 2024",
      description: "Infrastructure as Code using Terraform for multi-cloud deployments",
      studyMaterials: ["HashiCorp Learn", "Terraform Documentation", "Hands-on Labs"],
      estimatedHours: 80,
      completedHours: 80
    }
  ];

  const learningGoals = [
    {
      id: 1,
      title: "Advanced Kubernetes Patterns",
      category: "Containerization",
      priority: "high",
      timeline: "Next 3 months",
      description: "Deep dive into advanced Kubernetes patterns, operators, and custom resources",
      resources: ["Kubernetes Patterns Book", "CNCF Webinars", "Operator SDK"],
      milestones: [
        "Complete Operator Framework tutorial",
        "Build custom Kubernetes operator",
        "Implement advanced networking patterns"
      ]
    },
    {
      id: 2,
      title: "GitOps with ArgoCD",
      category: "CI/CD",
      priority: "medium",
      timeline: "Next 2 months",
      description: "Implement GitOps workflows using ArgoCD for automated deployments",
      resources: ["ArgoCD Documentation", "GitOps Toolkit", "Flux vs ArgoCD"],
      milestones: [
        "Set up ArgoCD in test environment",
        "Create GitOps workflow for microservices",
        "Implement progressive delivery patterns"
      ]
    },
    {
      id: 3,
      title: "Service Mesh with Istio",
      category: "Microservices",
      priority: "medium",
      timeline: "Next 4 months",
      description: "Implement service mesh architecture for microservices communication",
      resources: ["Istio Documentation", "Service Mesh Patterns", "Envoy Proxy"],
      milestones: [
        "Deploy Istio in development cluster",
        "Implement traffic management policies",
        "Set up observability and security features"
      ]
    }
  ];

  const skillGaps = [
    {
      id: 1,
      skill: "Advanced Python for DevOps",
      currentLevel: "Intermediate",
      targetLevel: "Advanced",
      priority: "high",
      reason: "Need for complex automation scripts and tool development",
      plan: "Complete Python for DevOps course and build automation tools"
    },
    {
      id: 2,
      skill: "Security Scanning & Compliance",
      currentLevel: "Beginner",
      targetLevel: "Intermediate",
      priority: "high",
      reason: "Growing importance of DevSecOps in fintech environment",
      plan: "Learn SAST/DAST tools, compliance frameworks, and security automation"
    },
    {
      id: 3,
      skill: "Multi-Cloud Architecture",
      currentLevel: "AWS Focused",
      targetLevel: "Multi-Cloud",
      priority: "medium",
      reason: "Industry trend towards multi-cloud strategies",
      plan: "Gain hands-on experience with Azure and GCP services"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'planned': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const tabs = [
    { id: 'certifications', name: 'Certifications', icon: 'Award' },
    { id: 'goals', name: 'Learning Goals', icon: 'Target' },
    { id: 'gaps', name: 'Skill Gaps', icon: 'TrendingUp' }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      <div className="flex items-center mb-6">
        <Icon name="BookOpen" size={24} className="text-primary mr-3" />
        <h2 className="text-2xl font-bold text-foreground">Learning Laboratory</h2>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab(tab.id)}
            iconName={tab.icon}
            iconPosition="left"
            iconSize={16}
            className="flex-1"
          >
            {tab.name}
          </Button>
        ))}
      </div>

      {/* Certifications Tab */}
      {activeTab === 'certifications' && (
        <div className="space-y-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-background rounded-lg border border-border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{cert.name}</h3>
                  <p className="text-primary font-medium">{cert.provider}</p>
                  <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                  {cert.status === 'in-progress' ? 'In Progress' : 
                   cert.status === 'completed' ? 'Completed' : 'Planned'}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Progress</span>
                  <span className="text-sm text-muted-foreground">{cert.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-primary transition-all duration-500"
                    style={{ width: `${cert.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Study Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Target: {cert.targetDate || cert.completedDate}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {cert.completedHours}/{cert.estimatedHours} hours
                  </span>
                </div>
              </div>

              {/* Study Materials */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Study Materials</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.studyMaterials.map((material, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Learning Goals Tab */}
      {activeTab === 'goals' && (
        <div className="space-y-6">
          {learningGoals.map((goal) => (
            <div key={goal.id} className="bg-background rounded-lg border border-border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{goal.title}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-primary font-medium">{goal.category}</span>
                    <span className="text-sm text-muted-foreground">{goal.timeline}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{goal.description}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                  {goal.priority.charAt(0).toUpperCase() + goal.priority.slice(1)} Priority
                </div>
              </div>

              {/* Learning Resources */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-2">Learning Resources</h4>
                <div className="flex flex-wrap gap-2">
                  {goal.resources.map((resource, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {resource}
                    </span>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Milestones</h4>
                <ul className="space-y-2">
                  {goal.milestones.map((milestone, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground">
                      <Icon name="Target" size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                      {milestone}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skill Gaps Tab */}
      {activeTab === 'gaps' && (
        <div className="space-y-6">
          {skillGaps.map((gap) => (
            <div key={gap.id} className="bg-background rounded-lg border border-border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">{gap.skill}</h3>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-sm text-muted-foreground">
                      Current: <span className="text-foreground font-medium">{gap.currentLevel}</span>
                    </span>
                    <Icon name="ArrowRight" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Target: <span className="text-primary font-medium">{gap.targetLevel}</span>
                    </span>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(gap.priority)}`}>
                  {gap.priority.charAt(0).toUpperCase() + gap.priority.slice(1)} Priority
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Why This Matters</h4>
                  <p className="text-sm text-muted-foreground">{gap.reason}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Learning Plan</h4>
                  <p className="text-sm text-muted-foreground">{gap.plan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearningLab;