import React from 'react';
import Icon from '../../../components/AppIcon';

const APIEndpointsCard = ({ endpoints }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'text-success bg-success/10';
      case 'slow':
        return 'text-warning bg-warning/10';
      case 'down':
        return 'text-error bg-error/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  const getResponseTimeColor = (time) => {
    if (time < 200) return 'text-success';
    if (time < 500) return 'text-warning';
    return 'text-error';
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">API Endpoints</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-xs text-muted-foreground">Monitoring Active</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {endpoints.map((endpoint, index) => (
          <div key={index} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(endpoint.status)}`}>
                  {endpoint.method}
                </div>
                <span className="font-mono text-sm text-foreground">{endpoint.path}</span>
              </div>
              
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(endpoint.status)}`}>
                {endpoint.status.toUpperCase()}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-muted-foreground text-xs mb-1">Response Time</div>
                <div className={`font-medium ${getResponseTimeColor(endpoint.responseTime)}`}>
                  {endpoint.responseTime}ms
                </div>
              </div>
              
              <div>
                <div className="text-muted-foreground text-xs mb-1">Uptime</div>
                <div className="font-medium text-foreground">{endpoint.uptime}%</div>
              </div>
              
              <div>
                <div className="text-muted-foreground text-xs mb-1">Last Check</div>
                <div className="font-medium text-foreground">{endpoint.lastCheck}</div>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{endpoint.description}</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Activity" size={12} />
                  <span>{endpoint.requests}/min</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-success">98.7%</div>
            <div className="text-xs text-muted-foreground">Overall Uptime</div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">156ms</div>
            <div className="text-xs text-muted-foreground">Avg Response</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIEndpointsCard;