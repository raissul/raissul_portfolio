import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  activeFilter, 
  onFilterChange, 
  activeCategory, 
  onCategoryChange,
  searchQuery,
  onSearchChange,
  projectCounts 
}) => {
  const filters = [
    { id: 'all', label: 'All Projects', icon: 'Grid3x3' },
    { id: 'live', label: 'Live', icon: 'CheckCircle' },
    { id: 'development', label: 'In Development', icon: 'Clock' },
    { id: 'archived', label: 'Archived', icon: 'Archive' }
  ];

  const categories = [
    { id: 'all', label: 'All Categories', icon: 'Layers' },
    { id: 'devops', label: 'DevOps & Infrastructure', icon: 'Server' },
    { id: 'automation', label: 'Automation', icon: 'Zap' },
    { id: 'monitoring', label: 'Monitoring', icon: 'Activity' },
    { id: 'web', label: 'Web Development', icon: 'Globe' },
    { id: 'mobile', label: 'Mobile Apps', icon: 'Smartphone' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      {/* Search */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          placeholder="Search projects by name, technology, or description..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>

      {/* Status Filters */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
          <Icon name="Filter" size={16} className="mr-2" />
          Project Status
        </h4>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFilterChange(filter.id)}
              iconName={filter.icon}
              iconPosition="left"
              iconSize={14}
              className="text-xs"
            >
              {filter.label}
              {projectCounts[filter.id] > 0 && (
                <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                  activeFilter === filter.id 
                    ? 'bg-primary-foreground/20 text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {projectCounts[filter.id]}
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Category Filters */}
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
          <Icon name="Tag" size={16} className="mr-2" />
          Categories
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              iconName={category.icon}
              iconPosition="left"
              iconSize={14}
              className="text-xs"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;