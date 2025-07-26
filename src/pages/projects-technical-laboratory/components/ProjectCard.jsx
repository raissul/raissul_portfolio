import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'text-success bg-success/10 border-success/20';
      case 'development': return 'text-warning bg-warning/10 border-warning/20';
      case 'archived': return 'text-muted-foreground bg-muted border-border';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'live': return 'CheckCircle';
      case 'development': return 'Clock';
      case 'archived': return 'Archive';
      default: return 'Circle';
    }
  };

  return (
    <div 
      className={`group relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20 ${
        isHovered ? 'transform -translate-y-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Status Badge */}
        <div className={`absolute top-3 right-3 flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
          <Icon name={getStatusIcon(project.status)} size={12} />
          <span className="capitalize">{project.status}</span>
        </div>

        {/* Live Indicator */}
        {project.status === 'live' && (
          <div className="absolute top-3 left-3 flex items-center space-x-1">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-success">Live</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-b border-border">
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">{project.metrics.duration}</div>
            <div className="text-xs text-muted-foreground">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">{project.metrics.complexity}</div>
            <div className="text-xs text-muted-foreground">Complexity</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-foreground">{project.metrics.impact}</div>
            <div className="text-xs text-muted-foreground">Impact</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
                iconName="Github"
                iconSize={14}
              >
                Code
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
                iconName="ExternalLink"
                iconSize={14}
              >
                Live
              </Button>
            )}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={14}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;