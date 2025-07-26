import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SystemHealthCard from './components/SystemHealthCard';
import ProjectStatusCard from './components/ProjectStatusCard';
import GitHubActivityCard from './components/GitHubActivityCard';
import LearningProgressCard from './components/LearningProgressCard';
import APIEndpointsCard from './components/APIEndpointsCard';
import AlertsNotificationsCard from './components/AlertsNotificationsCard';

const LiveMonitoringProjectStatus = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [refreshInterval, setRefreshInterval] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const refreshTimer = setInterval(() => {
      // Simulate data refresh
      console.log('Refreshing monitoring data...');
    }, refreshInterval * 1000);

    return () => clearInterval(refreshTimer);
  }, [refreshInterval]);

  // Mock system health data
  const systemHealthData = [
    {
      title: "CPU Usage",
      status: "healthy",
      value: "23",
      unit: "%",
      trend: -2.1,
      icon: "Cpu",
      color: "bg-accent"
    },
    {
      title: "Memory Usage",
      status: "healthy",
      value: "67",
      unit: "%",
      trend: 1.3,
      icon: "HardDrive",
      color: "bg-success"
    },
    {
      title: "Disk Usage",
      status: "warning",
      value: "78",
      unit: "%",
      trend: 5.2,
      icon: "Database",
      color: "bg-warning"
    },
    {
      title: "Network I/O",
      status: "healthy",
      value: "1.2",
      unit: "GB/s",
      trend: -0.8,
      icon: "Wifi",
      color: "bg-primary"
    }
  ];

  // Mock project status data
  const projectsData = [
    {
      name: "Portfolio Dashboard",
      description: "Personal portfolio website with monitoring integration",
      status: "deployed",
      branch: "main",
      lastDeploy: "2h ago",
      uptime: 99.8,
      responseTime: 145,
      buildNumber: 127,
      url: "https://raissul-portfolio.vercel.app",
      repository: "https://github.com/raissul/portfolio"
    },
    {
      name: "DevOps Toolkit API",
      description: "RESTful API for DevOps automation tools and scripts",
      status: "building",
      branch: "develop",
      lastDeploy: "Building...",
      uptime: 98.5,
      responseTime: 89,
      buildNumber: 45,
      url: "https://api.raissul-devops.com",
      repository: "https://github.com/raissul/devops-toolkit"
    },
    {
      name: "Monitoring Dashboard",
      description: "Real-time system monitoring and alerting platform",
      status: "deployed",
      branch: "main",
      lastDeploy: "6h ago",
      uptime: 99.9,
      responseTime: 67,
      buildNumber: 89,
      url: "https://monitor.raissul.dev",
      repository: "https://github.com/raissul/monitoring-dashboard"
    },
    {
      name: "CI/CD Pipeline",
      description: "Automated deployment pipeline for microservices",
      status: "failed",
      branch: "feature/docker-optimization",
      lastDeploy: "Failed 1h ago",
      uptime: 95.2,
      responseTime: 234,
      buildNumber: 23,
      url: "https://cicd.raissul.dev",
      repository: "https://github.com/raissul/cicd-pipeline"
    }
  ];

  // Mock GitHub activity data
  const githubActivity = [
    {
      type: "commit",
      action: "Pushed 3 commits",
      description: "Implemented real-time monitoring dashboard with WebSocket integration",
      time: "2h ago",
      repository: "monitoring-dashboard",
      branch: "main",
      additions: 156,
      deletions: 23
    },
    {
      type: "pr",
      action: "Opened pull request",
      description: "Add Docker containerization for microservices deployment",
      time: "4h ago",
      repository: "devops-toolkit",
      branch: "feature/docker-support",
      additions: 89,
      deletions: 12
    },
    {
      type: "issue",
      action: "Closed issue",
      description: "Fixed memory leak in background job processor",
      time: "6h ago",
      repository: "portfolio",
      branch: null
    },
    {
      type: "release",
      action: "Published release",
      description: "v2.1.0 - Enhanced monitoring capabilities and performance improvements",
      time: "1d ago",
      repository: "monitoring-dashboard",
      branch: null
    },
    {
      type: "commit",
      action: "Pushed 7 commits",
      description: "Refactored authentication system and added JWT token validation",
      time: "2d ago",
      repository: "devops-toolkit",
      branch: "develop",
      additions: 234,
      deletions: 67
    }
  ];

  // Mock learning progress data
  const learningGoals = [
    {
      title: "AWS Solutions Architect Professional",
      provider: "Amazon Web Services",
      status: "in-progress",
      progress: 75,
      targetDate: "Dec 2024",
      currentModule: "Advanced Networking",
      timeSpent: 89
    },
    {
      title: "Kubernetes Administrator (CKA)",
      provider: "Cloud Native Computing Foundation",
      status: "in-progress",
      progress: 60,
      targetDate: "Nov 2024",
      currentModule: "Cluster Management",
      timeSpent: 67
    },
    {
      title: "Docker Certified Associate",
      provider: "Docker Inc.",
      status: "completed",
      progress: 100,
      targetDate: "Completed",
      currentModule: "Certification Earned",
      timeSpent: 45
    },
    {
      title: "Terraform Associate",
      provider: "HashiCorp",
      status: "planned",
      progress: 15,
      targetDate: "Jan 2025",
      currentModule: "Infrastructure as Code Basics",
      timeSpent: 12
    },
    {
      title: "Prometheus & Grafana Mastery",
      provider: "Linux Foundation",
      status: "in-progress",
      progress: 85,
      targetDate: "Oct 2024",
      currentModule: "Advanced Alerting",
      timeSpent: 78
    }
  ];

  // Mock API endpoints data
  const apiEndpoints = [
    {
      method: "GET",
      path: "/api/v1/health",
      status: "healthy",
      responseTime: 45,
      uptime: 99.9,
      lastCheck: "30s ago",
      description: "System health check endpoint",
      requests: 1250
    },
    {
      method: "POST",
      path: "/api/v1/deploy",
      status: "healthy",
      responseTime: 234,
      uptime: 98.7,
      lastCheck: "1m ago",
      description: "Deployment trigger endpoint",
      requests: 45
    },
    {
      method: "GET",
      path: "/api/v1/metrics",
      status: "slow",
      responseTime: 567,
      uptime: 97.5,
      lastCheck: "45s ago",
      description: "System metrics collection",
      requests: 890
    },
    {
      method: "GET",
      path: "/api/v1/logs",
      status: "healthy",
      responseTime: 123,
      uptime: 99.2,
      lastCheck: "20s ago",
      description: "Application logs retrieval",
      requests: 234
    }
  ];

  // Mock alerts data
  const alertsData = [
    {
      severity: "warning",
      title: "High Memory Usage Detected",
      description: "Memory usage has exceeded 75% threshold on production server. Consider scaling or optimization.",
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      source: "prod-server-01",
      category: "Performance",
      actionRequired: true
    },
    {
      severity: "info",
      title: "Deployment Completed Successfully",
      description: "Portfolio dashboard v2.1.3 has been deployed to production environment.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      source: "ci-cd-pipeline",
      category: "Deployment",
      actionRequired: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                  <Icon name="Activity" size={32} className="text-primary-foreground" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                  Live Monitoring Dashboard
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Real-time insights into system performance, project status, and development progress. 
                Demonstrating comprehensive monitoring and observability expertise through practical implementation.
              </p>
              
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Systems Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Last Updated: {currentTime.toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="RefreshCw" size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">Auto-refresh: {refreshInterval}s</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* System Health Overview */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">System Health Overview</h2>
              <div className="flex items-center space-x-4">
                <select 
                  value={refreshInterval}
                  onChange={(e) => setRefreshInterval(Number(e.target.value))}
                  className="px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground"
                >
                  <option value={10}>10s refresh</option>
                  <option value={30}>30s refresh</option>
                  <option value={60}>1m refresh</option>
                  <option value={300}>5m refresh</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemHealthData.map((metric, index) => (
                <SystemHealthCard key={index} {...metric} />
              ))}
            </div>
          </div>
        </section>

        {/* Project Status Grid */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Project Status</h2>
              <div className="flex items-center space-x-2">
                <Icon name="GitBranch" size={20} className="text-muted-foreground" />
                <span className="text-muted-foreground">{projectsData.length} Active Projects</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projectsData.map((project, index) => (
                <ProjectStatusCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Monitoring Details Grid */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Detailed Monitoring</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* GitHub Activity */}
              <div className="lg:col-span-1">
                <GitHubActivityCard activity={githubActivity} />
              </div>
              
              {/* Learning Progress */}
              <div className="lg:col-span-1">
                <LearningProgressCard learningGoals={learningGoals} />
              </div>
              
              {/* API Endpoints */}
              <div className="lg:col-span-1 xl:col-span-1">
                <APIEndpointsCard endpoints={apiEndpoints} />
              </div>
            </div>
          </div>
        </section>

        {/* Alerts and System Status */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">System Alerts & Notifications</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AlertsNotificationsCard alerts={alertsData} />
              
              {/* System Statistics */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-6">System Statistics</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-success mb-1">99.8%</div>
                      <div className="text-sm text-muted-foreground">Overall Uptime</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-foreground mb-1">156ms</div>
                      <div className="text-sm text-muted-foreground">Avg Response</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">2.3K</div>
                      <div className="text-sm text-muted-foreground">Daily Requests</div>
                    </div>
                    <div className="text-center p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold text-warning mb-1">12</div>
                      <div className="text-sm text-muted-foreground">Active Monitors</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Monitoring Since</span>
                      <span className="font-medium text-foreground">Jan 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terminal Command Center */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Command Center</h2>
            
            <div className="bg-terminal-bg rounded-lg p-6 font-mono text-terminal-text">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-error rounded-full"></div>
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="ml-4 text-sm">raissul@monitoring-dashboard:~$</span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="text-success">$ docker ps --format "table {'{.Names}'}\t{'{.Status}'}\t{'{.Ports}'}"</div>
                <div className="text-muted-foreground">
                  NAMES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PORTS<br/>
                  portfolio-app&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up 2 hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.0.0.0:3000-&gt;3000/tcp<br/>
                  monitoring-api&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up 6 hours&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.0.0.0:8080-&gt;8080/tcp<br/>
                  redis-cache&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up 1 day&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.0.0.0:6379-&gt;6379/tcp<br/>
                  postgres-db&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Up 1 day&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.0.0.0:5432-&gt;5432/tcp
                </div>
                <div className="text-success">$ kubectl get pods -n production</div>
                <div className="text-muted-foreground">
                  NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;READY&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;&nbsp;RESTARTS&nbsp;&nbsp;&nbsp;AGE<br/>
                  portfolio-deployment-7d4b8c9f&nbsp;&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2h<br/>
                  api-deployment-5f6a7b8c&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6h<br/>
                  monitoring-deployment-9e1f2a3b&nbsp;&nbsp;1/1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Running&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1d
                </div>
                <div className="text-success">$ systemctl status nginx</div>
                <div className="text-muted-foreground">
                  ● nginx.service - A high performance web server<br/>
                  &nbsp;&nbsp;&nbsp;Loaded: loaded (/lib/systemd/system/nginx.service; enabled)<br/>
                  &nbsp;&nbsp;&nbsp;Active: <span className="text-success">active (running)</span> since Mon 2024-07-26 13:19:34 UTC; 2h ago<br/>
                  &nbsp;&nbsp;&nbsp;Main PID: 1234 (nginx)
                </div>
                <div className="flex items-center">
                  <span className="text-success">raissul@monitoring-dashboard:~$</span>
                  <span className="cursor animate-pulse ml-1">_</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LiveMonitoringProjectStatus;