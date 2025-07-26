import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: 'Cloud',
      skills: [
        { name: 'Amazon Web Services', level: 85, icon: 'Cloud', color: 'text-orange-500' },
        { name: 'Google Cloud Platform', level: 70, icon: 'CloudRain', color: 'text-blue-500' },
        { name: 'Microsoft Azure', level: 60, icon: 'CloudSnow', color: 'text-blue-600' },
        { name: 'DigitalOcean', level: 90, icon: 'Droplets', color: 'text-blue-400' }
      ]
    },
    {
      title: 'Containerization',
      icon: 'Container',
      skills: [
        { name: 'Docker', level: 95, icon: 'Container', color: 'text-blue-500' },
        { name: 'Kubernetes', level: 80, icon: 'Hexagon', color: 'text-blue-600' },
        { name: 'Docker Compose', level: 90, icon: 'Layers', color: 'text-blue-400' },
        { name: 'Helm Charts', level: 75, icon: 'Package', color: 'text-indigo-500' }
      ]
    },
    {
      title: 'CI/CD & Automation',
      icon: 'GitBranch',
      skills: [
        { name: 'Jenkins', level: 85, icon: 'GitBranch', color: 'text-blue-600' },
        { name: 'GitHub Actions', level: 90, icon: 'Github', color: 'text-gray-800' },
        { name: 'GitLab CI/CD', level: 80, icon: 'GitMerge', color: 'text-orange-500' },
        { name: 'Ansible', level: 75, icon: 'Settings', color: 'text-red-500' }
      ]
    },
    {
      title: 'Monitoring & Logging',
      icon: 'Activity',
      skills: [
        { name: 'Prometheus', level: 85, icon: 'BarChart3', color: 'text-orange-500' },
        { name: 'Grafana', level: 90, icon: 'LineChart', color: 'text-orange-600' },
        { name: 'ELK Stack', level: 80, icon: 'Search', color: 'text-yellow-500' },
        { name: 'Datadog', level: 70, icon: 'Eye', color: 'text-purple-500' }
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: 'Code',
      skills: [
        { name: 'Terraform', level: 85, icon: 'Code', color: 'text-purple-600' },
        { name: 'CloudFormation', level: 75, icon: 'FileCode', color: 'text-orange-500' },
        { name: 'Pulumi', level: 60, icon: 'Zap', color: 'text-purple-500' },
        { name: 'ARM Templates', level: 55, icon: 'FileText', color: 'text-blue-600' }
      ]
    },
    {
      title: 'Programming & Scripting',
      icon: 'Terminal',
      skills: [
        { name: 'Python', level: 90, icon: 'Code2', color: 'text-yellow-500' },
        { name: 'Bash/Shell', level: 95, icon: 'Terminal', color: 'text-green-500' },
        { name: 'JavaScript', level: 80, icon: 'FileCode', color: 'text-yellow-400' },
        { name: 'Go', level: 65, icon: 'Zap', color: 'text-blue-500' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {};
      skillCategories.forEach((category, categoryIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          const key = `${categoryIndex}-${skillIndex}`;
          setTimeout(() => {
            setAnimatedSkills(prev => ({
              ...prev,
              [key]: skill.level
            }));
          }, (categoryIndex * 200) + (skillIndex * 100));
        });
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-success';
    if (level >= 80) return 'bg-primary';
    if (level >= 70) return 'bg-warning';
    return 'bg-accent';
  };

  const getSkillLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Learning';
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Zap" size={20} className="text-primary" />
            <span className="text-sm font-medium text-primary">Technical Expertise</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Skills Matrix
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various DevOps technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all duration-200">
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon name={category.icon} size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const key = `${categoryIndex}-${skillIndex}`;
                  const animatedLevel = animatedSkills[key] || 0;
                  
                  return (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name={skill.icon} size={16} className={skill.color} />
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getSkillColor(skill.level)}/10 ${getSkillColor(skill.level).replace('bg-', 'text-')}`}>
                            {getSkillLabel(skill.level)}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                          style={{ width: `${animatedLevel}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Summary */}
        <div className="mt-12 bg-card rounded-lg border border-border p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Expert Level Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">8+</div>
              <div className="text-sm text-muted-foreground">Advanced Skills</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning mb-1">5+</div>
              <div className="text-sm text-muted-foreground">Currently Learning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">3</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Learning Roadmap */}
        <div className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Icon name="Target" size={20} className="text-primary" />
            <h3 className="text-lg font-semibold text-foreground">2025 Learning Goals</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg">
              <Icon name="Award" size={16} className="text-warning" />
              <div>
                <div className="text-sm font-medium text-foreground">AWS Solutions Architect Pro</div>
                <div className="text-xs text-muted-foreground">Target: Q2 2025</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg">
              <Icon name="Container" size={16} className="text-accent" />
              <div>
                <div className="text-sm font-medium text-foreground">Kubernetes CKA</div>
                <div className="text-xs text-muted-foreground">Target: Q1 2025</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg">
              <Icon name="Shield" size={16} className="text-success" />
              <div>
                <div className="text-sm font-medium text-foreground">Security+ Certification</div>
                <div className="text-xs text-muted-foreground">Target: Q3 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;