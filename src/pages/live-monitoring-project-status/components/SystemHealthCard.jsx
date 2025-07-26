import React from 'react';
import Icon from '../../../components/AppIcon';

const SystemHealthCard = ({ title, status, value, unit, trend, icon, color }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'text-success bg-success/10 border-success/20';
      case 'warning':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'critical':
        return 'text-error bg-error/10 border-error/20';
      default:
        return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getTrendIcon = (trend) => {
    if (trend > 0) return { icon: 'TrendingUp', color: 'text-success' };
    if (trend < 0) return { icon: 'TrendingDown', color: 'text-error' };
    return { icon: 'Minus', color: 'text-muted-foreground' };
  };

  const trendData = getTrendIcon(trend);

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${color}`}>
            <Icon name={icon} size={20} className="text-white" />
          </div>
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(status)}`}>
          {status.toUpperCase()}
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-foreground">{value}</span>
            <span className="text-sm text-muted-foreground">{unit}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <Icon name={trendData.icon} size={16} className={trendData.color} />
          <span className={`text-sm font-medium ${trendData.color}`}>
            {Math.abs(trend)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SystemHealthCard;