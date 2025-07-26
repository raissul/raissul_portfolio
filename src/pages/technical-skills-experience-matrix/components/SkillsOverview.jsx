import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillsOverview = () => {
  const overviewStats = [
    {
      id: 1,
      title: "Total Technologies",
      value: "25+",
      description: "Across multiple domains",
      icon: "Code",
      color: "text-blue-600 bg-blue-100"
    },
    {
      id: 2,
      title: "Years Experience",
      value: "3+",
      description: "In DevOps & Infrastructure",
      icon: "Calendar",
      color: "text-green-600 bg-green-100"
    },
    {
      id: 3,
      title: "Active Certifications",
      value: "2",
      description: "With 3 more in progress",
      icon: "Award",
      color: "text-purple-600 bg-purple-100"
    },
    {
      id: 4,
      title: "Learning Hours/Week",
      value: "15+",
      description: "Continuous skill development",
      icon: "BookOpen",
      color: "text-orange-600 bg-orange-100"
    }
  ];

  const categoryBreakdown = [
    {
      category: "Cloud Platforms",
      count: 8,
      percentage: 85,
      topSkills: ["AWS", "EC2", "S3", "Lambda"],
      color: "bg-blue-500"
    },
    {
      category: "Containerization",
      count: 6,
      percentage: 78,
      topSkills: ["Docker", "Kubernetes", "Helm", "Podman"],
      color: "bg-green-500"
    },
    {
      category: "CI/CD Tools",
      count: 5,
      percentage: 72,
      topSkills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
      color: "bg-purple-500"
    },
    {
      category: "Monitoring",
      count: 7,
      percentage: 68,
      topSkills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
      color: "bg-orange-500"
    },
    {
      category: "Infrastructure as Code",
      count: 4,
      percentage: 75,
      topSkills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
      color: "bg-red-500"
    }
  ];

  const recentAchievements = [
    {
      id: 1,
      title: "HashiCorp Terraform Associate Certified",
      date: "January 2024",
      type: "certification",
      icon: "Award"
    },
    {
      id: 2,
      title: "Implemented Kubernetes Monitoring Stack",
      date: "December 2023",
      type: "project",
      icon: "Activity"
    },
    {
      id: 3,
      title: "Automated CI/CD Pipeline for 5 Microservices",
      date: "November 2023",
      type: "automation",
      icon: "GitBranch"
    },
    {
      id: 4,
      title: "AWS Solutions Architect Study Progress: 75%",
      date: "Ongoing",
      type: "learning",
      icon: "BookOpen"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat) => (
          <div key={stat.id} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${stat.color}`}>
                <Icon name={stat.icon} size={24} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-foreground">{stat.title}</h3>
          </div>
        ))}
      </div>

      {/* Category Breakdown */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center mb-6">
          <Icon name="BarChart3" size={24} className="text-primary mr-3" />
          <h2 className="text-xl font-bold text-foreground">Skills by Category</h2>
        </div>

        <div className="space-y-6">
          {categoryBreakdown.map((category, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                  <span className="text-sm text-muted-foreground">({category.count} skills)</span>
                </div>
                <span className="text-sm font-medium text-foreground">{category.percentage}% avg proficiency</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className={`h-3 rounded-full ${category.color} transition-all duration-1000`}
                  style={{ width: `${category.percentage}%` }}
                ></div>
              </div>

              {/* Top Skills */}
              <div className="flex flex-wrap gap-2">
                {category.topSkills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex items-center mb-6">
          <Icon name="Trophy" size={24} className="text-primary mr-3" />
          <h2 className="text-xl font-bold text-foreground">Recent Achievements</h2>
        </div>

        <div className="space-y-4">
          {recentAchievements.map((achievement) => (
            <div key={achievement.id} className="flex items-center space-x-4 p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                <Icon name={achievement.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-foreground">{achievement.title}</h3>
                <p className="text-xs text-muted-foreground">{achievement.date}</p>
              </div>
              <div className="text-xs text-primary font-medium capitalize">
                {achievement.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsOverview;