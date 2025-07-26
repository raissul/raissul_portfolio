import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = [
    {
      label: 'Total Projects',
      value: projects.length,
      icon: 'FolderOpen',
      color: 'text-primary bg-primary/10 border-primary/20'
    },
    {
      label: 'Live Projects',
      value: projects.filter(p => p.status === 'live').length,
      icon: 'CheckCircle',
      color: 'text-success bg-success/10 border-success/20'
    },
    {
      label: 'In Development',
      value: projects.filter(p => p.status === 'development').length,
      icon: 'Clock',
      color: 'text-warning bg-warning/10 border-warning/20'
    },
    {
      label: 'Technologies Used',
      value: [...new Set(projects.flatMap(p => p.technologies))].length,
      icon: 'Wrench',
      color: 'text-accent bg-accent/10 border-accent/20'
    }
  ];

  const totalHours = projects.reduce((sum, project) => {
    const hours = parseInt(project.metrics.duration.replace(/\D/g, '')) || 0;
    return sum + hours;
  }, 0);

  const avgComplexity = projects.length > 0 
    ? (projects.reduce((sum, project) => {
        const complexity = project.metrics.complexity === 'High' ? 3 : 
                          project.metrics.complexity === 'Medium' ? 2 : 1;
        return sum + complexity;
      }, 0) / projects.length).toFixed(1)
    : 0;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${stat.color}`}>
              <Icon name={stat.icon} size={20} />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          </div>
          
          {/* Additional metrics for specific stats */}
          {stat.label === 'Total Projects' && (
            <div className="text-xs text-muted-foreground">
              ~{totalHours}+ hours invested
            </div>
          )}
          {stat.label === 'Technologies Used' && (
            <div className="text-xs text-muted-foreground">
              Avg complexity: {avgComplexity}/3
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectStats;