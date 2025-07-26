import React from 'react';
import Icon from '../../../components/AppIcon';

const AlertsNotificationsCard = ({ alerts }) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical':
        return 'text-error bg-error/10 border-error/20';
      case 'warning':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'info':
        return 'text-accent bg-accent/10 border-accent/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'critical':
        return 'AlertTriangle';
      case 'warning':
        return 'AlertCircle';
      case 'info':
        return 'Info';
      default:
        return 'Bell';
    }
  };

  const getTimeAgo = (timestamp) => {
    const now = new Date();
    const alertTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - alertTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">System Alerts</h3>
        <div className="flex items-center space-x-2">
          <Icon name="Bell" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{alerts.length} Active</span>
        </div>
      </div>
      
      {alerts.length === 0 ? (
        <div className="text-center py-8">
          <Icon name="CheckCircle" size={48} className="text-success mx-auto mb-3" />
          <h4 className="font-medium text-foreground mb-2">All Systems Operational</h4>
          <p className="text-sm text-muted-foreground">No active alerts or issues detected</p>
        </div>
      ) : (
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <div key={index} className={`border rounded-lg p-4 ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Icon name={getSeverityIcon(alert.severity)} size={16} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground text-sm">{alert.title}</h4>
                    <span className="text-xs text-muted-foreground">
                      {getTimeAgo(alert.timestamp)}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{alert.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Server" size={12} />
                        <span>{alert.source}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Tag" size={12} />
                        <span>{alert.category}</span>
                      </div>
                    </div>
                    
                    {alert.actionRequired && (
                      <button className="text-xs text-accent hover:text-accent/80 transition-colors font-medium">
                        Take Action
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Last system check</span>
          <span className="font-medium text-foreground">2 minutes ago</span>
        </div>
      </div>
    </div>
  );
};

export default AlertsNotificationsCard;