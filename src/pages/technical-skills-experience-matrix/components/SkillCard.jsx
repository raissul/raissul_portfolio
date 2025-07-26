import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillCard = ({ skill }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getProficiencyColor = (level) => {
    switch (level) {
      case 'beginner': return 'bg-yellow-500';
      case 'intermediate': return 'bg-blue-500';
      case 'advanced': return 'bg-green-500';
      case 'expert': return 'bg-purple-500';
      default: return 'bg-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'learning': return 'text-yellow-600 bg-yellow-100';
      case 'proficient': return 'text-blue-600 bg-blue-100';
      case 'mastered': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'cloud': return 'Cloud';
      case 'containers': return 'Package';
      case 'monitoring': return 'Activity';
      case 'cicd': return 'GitBranch';
      case 'iac': return 'Code';
      case 'databases': return 'Database';
      case 'security': return 'Shield';
      default: return 'Tool';
    }
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
            <Icon name={getCategoryIcon(skill.category)} size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
            <p className="text-sm text-muted-foreground">{skill.description}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(skill.status)}`}>
          {skill.status.charAt(0).toUpperCase() + skill.status.slice(1)}
        </div>
      </div>

      {/* Proficiency Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Proficiency</span>
          <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${getProficiencyColor(skill.level)} transition-all duration-500`}
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>Beginner</span>
          <span>Expert</span>
        </div>
      </div>

      {/* Experience Duration */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{skill.experience}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">{skill.context}</span>
        </div>
      </div>

      {/* Key Applications */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-foreground mb-2">Key Applications</h4>
        <div className="flex flex-wrap gap-2">
          {skill.applications.slice(0, 3).map((app, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {app}
            </span>
          ))}
          {skill.applications.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{skill.applications.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Expand/Collapse Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
        iconPosition="right"
        iconSize={16}
        className="w-full justify-center"
      >
        {isExpanded ? 'Show Less' : 'Show Details'}
      </Button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-border space-y-4">
          {/* Real-world Examples */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
              <Icon name="Briefcase" size={16} className="mr-2" />
              Real-world Examples
            </h4>
            <ul className="space-y-2">
              {skill.examples.map((example, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <Icon name="ArrowRight" size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                  {example}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
              <Icon name="Lightbulb" size={16} className="mr-2" />
              Key Challenge Solved
            </h4>
            <p className="text-sm text-muted-foreground">{skill.challenge}</p>
          </div>

          {/* Learning Resources */}
          {skill.learningResources && skill.learningResources.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Learning Resources
              </h4>
              <div className="flex flex-wrap gap-2">
                {skill.learningResources.map((resource, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                  >
                    {resource}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Next Steps */}
          {skill.nextSteps && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                <Icon name="Target" size={16} className="mr-2" />
                Next Learning Goals
              </h4>
              <p className="text-sm text-muted-foreground">{skill.nextSteps}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SkillCard;