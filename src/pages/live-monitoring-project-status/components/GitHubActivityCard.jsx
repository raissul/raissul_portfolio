import React from 'react';
import Icon from '../../../components/AppIcon';

const GitHubActivityCard = ({ activity }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit':
        return 'GitCommit';
      case 'pr':
        return 'GitPullRequest';
      case 'issue':
        return 'AlertCircle';
      case 'release':
        return 'Tag';
      default:
        return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'commit':
        return 'text-success';
      case 'pr':
        return 'text-accent';
      case 'issue':
        return 'text-warning';
      case 'release':
        return 'text-secondary';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">Recent GitHub Activity</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {activity.map((item, index) => (
          <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border last:border-b-0 last:pb-0">
            <div className={`p-2 rounded-lg bg-muted ${getActivityColor(item.type)}`}>
              <Icon name={getActivityIcon(item.type)} size={14} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <span className="font-medium text-foreground text-sm">{item.action}</span>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
              
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="GitBranch" size={10} />
                  <span>{item.repository}</span>
                </div>
                {item.branch && (
                  <div className="flex items-center space-x-1">
                    <Icon name="Code" size={10} />
                    <span>{item.branch}</span>
                  </div>
                )}
              </div>
            </div>
            
            {item.additions && item.deletions && (
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-success">+{item.additions}</span>
                <span className="text-error">-{item.deletions}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border">
        <a 
          href="https://github.com/raissul" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors"
        >
          <Icon name="Github" size={16} />
          <span>View Full Profile</span>
          <Icon name="ExternalLink" size={12} />
        </a>
      </div>
    </div>
  );
};

export default GitHubActivityCard;