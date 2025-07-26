import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningProgressCard = ({ learningGoals }) => {
  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 60) return 'bg-warning';
    return 'bg-accent';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'in-progress':
        return 'Clock';
      case 'planned':
        return 'Calendar';
      default:
        return 'Circle';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success';
      case 'in-progress':
        return 'text-warning';
      case 'planned':
        return 'text-muted-foreground';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-foreground">Learning Progress</h3>
        <div className="flex items-center space-x-2">
          <Icon name="Target" size={16} className="text-accent" />
          <span className="text-sm text-muted-foreground">2024 Goals</span>
        </div>
      </div>
      
      <div className="space-y-6">
        {learningGoals.map((goal, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Icon 
                  name={getStatusIcon(goal.status)} 
                  size={16} 
                  className={getStatusColor(goal.status)} 
                />
                <div>
                  <h4 className="font-medium text-foreground text-sm">{goal.title}</h4>
                  <p className="text-xs text-muted-foreground">{goal.provider}</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-medium text-foreground">{goal.progress}%</div>
                <div className="text-xs text-muted-foreground">{goal.targetDate}</div>
              </div>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(goal.progress)}`}
                style={{ width: `${goal.progress}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{goal.currentModule}</span>
              <span>{goal.timeSpent} hours</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-foreground">4</div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">3</div>
            <div className="text-xs text-muted-foreground">In Progress</div>
          </div>
          <div>
            <div className="text-lg font-bold text-foreground">2</div>
            <div className="text-xs text-muted-foreground">Planned</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningProgressCard;