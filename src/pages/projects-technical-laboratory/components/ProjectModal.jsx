import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'architecture', label: 'Architecture', icon: 'Network' },
    { id: 'code', label: 'Code Snippets', icon: 'Code' },
    { id: 'lessons', label: 'Lessons Learned', icon: 'BookOpen' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'text-success bg-success/10 border-success/20';
      case 'development': return 'text-warning bg-warning/10 border-warning/20';
      case 'archived': return 'text-muted-foreground bg-muted border-border';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Problem Statement */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="AlertCircle" size={18} className="mr-2 text-warning" />
                Problem Statement
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.problemStatement}
              </p>
            </div>

            {/* Solution Approach */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Lightbulb" size={18} className="mr-2 text-accent" />
                Solution Approach
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.details.solutionApproach}
              </p>
              <ul className="space-y-2">
                {project.details.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="Wrench" size={18} className="mr-2 text-primary" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-secondary/10 text-secondary rounded-lg border border-secondary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="TrendingUp" size={18} className="mr-2 text-success" />
                Measurable Outcomes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.details.outcomes.map((outcome, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-foreground mb-1">{outcome.value}</div>
                    <div className="text-sm text-muted-foreground">{outcome.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="Network" size={18} className="mr-2 text-accent" />
                System Architecture
              </h4>
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <Image
                  src={project.details.architectureDiagram}
                  alt="System Architecture Diagram"
                  className="w-full h-auto rounded-lg border border-border"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.architectureDescription}
              </p>
            </div>

            {/* Data Flow */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="GitBranch" size={18} className="mr-2 text-primary" />
                Data Flow & Integration Points
              </h4>
              <div className="space-y-3">
                {project.details.dataFlow.map((flow, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{flow}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'code':
        return (
          <div className="space-y-6">
            {project.details.codeSnippets.map((snippet, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                  <Icon name="Code" size={18} className="mr-2 text-accent" />
                  {snippet.title}
                </h4>
                <p className="text-muted-foreground mb-4">{snippet.description}</p>
                <div className="bg-terminal-bg rounded-lg p-4 overflow-x-auto">
                  <pre className="text-terminal-text font-jetbrains text-sm">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        );

      case 'lessons':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Icon name="BookOpen" size={18} className="mr-2 text-accent" />
                Key Learnings & Insights
              </h4>
              <div className="space-y-4">
                {project.details.lessonsLearned.map((lesson, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium text-foreground mb-2">{lesson.title}</h5>
                    <p className="text-muted-foreground">{lesson.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <Icon name="AlertTriangle" size={18} className="mr-2 text-warning" />
                Challenges Faced
              </h4>
              <div className="space-y-3">
                {project.details.challenges.map((challenge, index) => (
                  <div key={index} className="bg-warning/5 border border-warning/20 rounded-lg p-4">
                    <div className="font-medium text-foreground mb-2">{challenge.challenge}</div>
                    <div className="text-muted-foreground">{challenge.solution}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name="FolderOpen" size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{project.title}</h2>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <span className="text-sm text-muted-foreground">{project.category}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
                iconName="Github"
                iconSize={16}
              >
                GitHub
              </Button>
            )}
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
                iconName="ExternalLink"
                iconSize={16}
              >
                Live Demo
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              iconName="X"
              iconSize={16}
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex space-x-0 p-6 pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;