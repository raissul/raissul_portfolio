import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStatusCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'deployed':
        return 'bg-success text-success-foreground';
      case 'building':
        return 'bg-warning text-warning-foreground';
      case 'failed':
        return 'bg-error text-error-foreground';
      case 'pending':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'deployed':
        return 'CheckCircle';
      case 'building':
        return 'Clock';
      case 'failed':
        return 'XCircle';
      case 'pending':
        return 'Circle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">{project.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
          
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="GitBranch" size={12} />
              <span>{project.branch}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={12} />
              <span>{project.lastDeploy}</span>
            </div>
          </div>
        </div>
        
        <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(project.status)}`}>
          <Icon name={getStatusIcon(project.status)} size={12} />
          <span>{project.status.toUpperCase()}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Uptime</span>
          <span className="font-medium text-foreground">{project.uptime}%</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Response Time</span>
          <span className="font-medium text-foreground">{project.responseTime}ms</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Build #</span>
          <span className="font-medium text-foreground">{project.buildNumber}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              View Live
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <Icon name="Github" size={14} className="text-muted-foreground" />
            <a 
              href={project.repository} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-accent/80 transition-colors"
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatusCard;