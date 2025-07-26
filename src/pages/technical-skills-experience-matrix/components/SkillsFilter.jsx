import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SkillsFilter = ({ 
  activeCategory, 
  setActiveCategory, 
  activeLevel, 
  setActiveLevel, 
  activeStatus, 
  setActiveStatus,
  searchTerm,
  setSearchTerm 
}) => {
  const categories = [
    { id: 'all', name: 'All Skills', icon: 'Grid3X3' },
    { id: 'cloud', name: 'Cloud Platforms', icon: 'Cloud' },
    { id: 'containers', name: 'Containerization', icon: 'Package' },
    { id: 'monitoring', name: 'Monitoring', icon: 'Activity' },
    { id: 'cicd', name: 'CI/CD', icon: 'GitBranch' },
    { id: 'iac', name: 'Infrastructure as Code', icon: 'Code' },
    { id: 'databases', name: 'Databases', icon: 'Database' },
    { id: 'security', name: 'Security', icon: 'Shield' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'expert', name: 'Expert' }
  ];

  const statuses = [
    { id: 'all', name: 'All Status' },
    { id: 'learning', name: 'Currently Learning' },
    { id: 'proficient', name: 'Proficient' },
    { id: 'mastered', name: 'Mastered' }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Icon 
            name="Search" 
            size={20} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="text"
            placeholder="Search skills, technologies, or tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
          <Icon name="Filter" size={16} className="mr-2" />
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              iconName={category.icon}
              iconPosition="left"
              iconSize={16}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Level and Status Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Proficiency Level Filter */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
            <Icon name="TrendingUp" size={16} className="mr-2" />
            Proficiency Level
          </h3>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level.id}
                variant={activeLevel === level.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActiveLevel(level.id)}
              >
                {level.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Learning Status Filter */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
            <Icon name="BookOpen" size={16} className="mr-2" />
            Learning Status
          </h3>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <Button
                key={status.id}
                variant={activeStatus === status.id ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setActiveStatus(status.id)}
              >
                {status.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsFilter;