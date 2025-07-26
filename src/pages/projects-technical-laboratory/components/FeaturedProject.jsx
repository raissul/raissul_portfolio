import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProject = ({ project, onViewDetails }) => {
  if (!project) return null;

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-xl p-8 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Icon name="Star" size={20} className="text-primary" />
        <span className="text-sm font-medium text-primary">Featured Project</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">{project.title}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Key Highlights */}
          <div className="space-y-3 mb-6">
            {project.details.keyFeatures.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name="CheckCircle" size={14} className="text-primary" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-foreground mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-lg border border-secondary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button
              variant="default"
              onClick={() => onViewDetails(project)}
              iconName="ArrowRight"
              iconPosition="right"
            >
              View Case Study
            </Button>
            {project.liveUrl && (
              <Button
                variant="outline"
                onClick={() => window.open(project.liveUrl, '_blank')}
                iconName="ExternalLink"
                iconPosition="right"
              >
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="ghost"
                onClick={() => window.open(project.githubUrl, '_blank')}
                iconName="Github"
              >
                Code
              </Button>
            )}
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            
            {/* Status Overlay */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full border border-border">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-foreground">Live & Running</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center p-3 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
              <div className="text-lg font-bold text-foreground">{project.metrics.duration}</div>
              <div className="text-xs text-muted-foreground">Duration</div>
            </div>
            <div className="text-center p-3 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
              <div className="text-lg font-bold text-foreground">{project.metrics.complexity}</div>
              <div className="text-xs text-muted-foreground">Complexity</div>
            </div>
            <div className="text-center p-3 bg-background/50 backdrop-blur-sm rounded-lg border border-border">
              <div className="text-lg font-bold text-foreground">{project.metrics.impact}</div>
              <div className="text-xs text-muted-foreground">Impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;