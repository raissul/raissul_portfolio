import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const LiveStatusDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [metrics, setMetrics] = useState({
    serverUptime: 99.9,
    githubContributions: 247,
    awsCertProgress: 78,
    activeProjects: 4,
    deployments: 23,
    monitoring: 'healthy'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate real-time metric updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        githubContributions: prev.githubContributions + Math.floor(Math.random() * 2),
        awsCertProgress: Math.min(100, prev.awsCertProgress + (Math.random() > 0.8 ? 1 : 0)),
        deployments: prev.deployments + (Math.random() > 0.9 ? 1 : 0)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const statusCards = [
    {
      title: 'Server Uptime',
      value: `${metrics.serverUptime}%`,
      icon: 'Server',
      status: 'success',
      description: 'All systems operational',
      trend: '+0.1%'
    },
    {
      title: 'GitHub Contributions',
      value: metrics.githubContributions,
      icon: 'Github',
      status: 'success',
      description: 'This year',
      trend: '+12 this week'
    },
    {
      title: 'AWS Certification',
      value: `${metrics.awsCertProgress}%`,
      icon: 'Award',
      status: 'warning',
      description: 'Solutions Architect',
      trend: 'In progress'
    },
    {
      title: 'Active Projects',
      value: metrics.activeProjects,
      icon: 'FolderOpen',
      status: 'success',
      description: 'Currently maintained',
      trend: '2 deployed recently'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Deployed microservice to production',
      timestamp: '2 hours ago',
      status: 'success',
      icon: 'Rocket'
    },
    {
      id: 2,
      action: 'Updated Kubernetes cluster configuration',
      timestamp: '4 hours ago',
      status: 'success',
      icon: 'Settings'
    },
    {
      id: 3,
      action: 'Completed AWS CloudWatch monitoring setup',
      timestamp: '6 hours ago',
      status: 'success',
      icon: 'Eye'
    },
    {
      id: 4,
      action: 'Optimized Docker container performance',
      timestamp: '1 day ago',
      status: 'success',
      icon: 'Zap'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-success';
      case 'warning': return 'text-warning';
      case 'error': return 'text-error';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'success': return 'bg-success/10 border-success/20';
      case 'warning': return 'bg-warning/10 border-warning/20';
      case 'error': return 'bg-error/10 border-error/20';
      default: return 'bg-muted/10 border-border';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success">Live Status</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real-Time Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Live metrics from my development environment, projects, and learning progress
          </p>
          <div className="mt-4 text-sm text-muted-foreground font-jetbrains">
            Last updated: {currentTime.toLocaleTimeString()}
          </div>
        </div>

        {/* Status Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statusCards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border ${getStatusBg(card.status)} hover:shadow-lg transition-all duration-200`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${getStatusBg(card.status)}`}>
                  <Icon name={card.icon} size={20} className={getStatusColor(card.status)} />
                </div>
                <div className={`text-xs px-2 py-1 rounded-full ${getStatusBg(card.status)} ${getStatusColor(card.status)}`}>
                  {card.trend}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
                <div className="text-2xl font-bold text-foreground">{card.value}</div>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* System Health */}
          <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">System Health</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm text-success">All systems operational</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* CPU Usage */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">CPU Usage</span>
                  <span className="text-foreground">23%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '23%' }}></div>
                </div>
              </div>

              {/* Memory Usage */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Memory Usage</span>
                  <span className="text-foreground">67%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
              </div>

              {/* Disk Usage */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Disk Usage</span>
                  <span className="text-foreground">45%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>

              {/* Network */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Network I/O</span>
                  <span className="text-foreground">12 MB/s</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className={`p-1.5 rounded-full ${getStatusBg(activity.status)}`}>
                    <Icon name={activity.icon} size={14} className={getStatusColor(activity.status)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="mt-8 bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">Current Learning Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-warning" />
                <span className="text-sm font-medium text-foreground">AWS Solutions Architect</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground">{metrics.awsCertProgress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full transition-all duration-500" style={{ width: `${metrics.awsCertProgress}%` }}></div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Container" size={16} className="text-accent" />
                <span className="text-sm font-medium text-foreground">Kubernetes CKA</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground">45%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-sm font-medium text-foreground">Security Best Practices</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="text-foreground">92%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStatusDashboard;