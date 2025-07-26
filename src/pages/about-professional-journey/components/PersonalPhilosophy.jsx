import React from 'react';
import Icon from '../../../components/AppIcon';

const PersonalPhilosophy = () => {
  const philosophyItems = [
    {
      id: 1,
      icon: "Target",
      title: "Problem-Solving Approach",
      description: "I believe every infrastructure challenge is an opportunity to build something better. My approach combines analytical thinking with creative solutions, always considering the human impact of technical decisions.",
      principles: [
        "Understand the root cause, not just symptoms",
        "Design for maintainability and scalability",
        "Document everything for team knowledge sharing",
        "Test thoroughly before production deployment"
      ]
    },
    {
      id: 2,
      icon: "Users",
      title: "Collaboration Style",
      description: "Great systems are built by great teams. I foster open communication, knowledge sharing, and collective problem-solving to create an environment where everyone can contribute their best work.",
      principles: [
        "Listen first, then contribute solutions",
        "Share knowledge freely and teach others",
        "Embrace diverse perspectives and approaches",
        "Build trust through transparency and reliability"
      ]
    },
    {
      id: 3,
      icon: "TrendingUp",
      title: "Growth Mindset",
      description: "Technology evolves rapidly, and so must we. I'm committed to continuous learning, staying curious about emerging technologies, and adapting to new challenges with enthusiasm and resilience.",
      principles: [
        "Learn something new every day",
        "Embrace failure as a learning opportunity",
        "Stay curious about emerging technologies",
        "Mentor others while learning from everyone"
      ]
    }
  ];

  const workEnvironment = {
    teamSize: "8-person DevOps team",
    workStyle: "Hybrid (3 days office, 2 days remote)",
    dailyTools: ["Slack", "Jira", "Confluence", "GitHub", "AWS Console", "Grafana"],
    meetingCadence: "Daily standups, weekly retrospectives, monthly planning",
    onCallRotation: "24/7 on-call rotation with 4-hour response SLA",
    collaboration: "Cross-functional teams with developers, QA, and product managers"
  };

  const personalValues = [
    {
      icon: "Shield",
      title: "Reliability",
      description: "Systems should work when people need them most"
    },
    {
      icon: "Zap",
      title: "Efficiency",
      description: "Automate the routine, focus on the strategic"
    },
    {
      icon: "Heart",
      title: "Empathy",
      description: "Technology serves people, not the other way around"
    },
    {
      icon: "BookOpen",
      title: "Learning",
      description: "Every challenge is a chance to grow"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            My Philosophy & Approach
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles and values that guide my work as a DevOps engineer and team collaborator.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {philosophyItems.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={item.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="space-y-2">
                {item.principles.map((principle, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Work Environment */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Icon name="Building" size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Work Environment</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon name="Users" size={18} className="text-accent mt-1" />
                <div>
                  <div className="font-medium text-foreground">Team Structure</div>
                  <div className="text-muted-foreground">{workEnvironment.teamSize}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Home" size={18} className="text-accent mt-1" />
                <div>
                  <div className="font-medium text-foreground">Work Style</div>
                  <div className="text-muted-foreground">{workEnvironment.workStyle}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Calendar" size={18} className="text-accent mt-1" />
                <div>
                  <div className="font-medium text-foreground">Meeting Cadence</div>
                  <div className="text-muted-foreground">{workEnvironment.meetingCadence}</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Clock" size={18} className="text-accent mt-1" />
                <div>
                  <div className="font-medium text-foreground">On-Call Rotation</div>
                  <div className="text-muted-foreground">{workEnvironment.onCallRotation}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="Tool" size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Daily Tools</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {workEnvironment.dailyTools.map((tool, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-muted rounded-lg">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm font-medium text-foreground">{tool}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-start space-x-2">
                <Icon name="Info" size={16} className="text-primary mt-1" />
                <div className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Collaboration:</strong> {workEnvironment.collaboration}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Values */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Core Values</h3>
            <p className="text-muted-foreground">The principles that drive my approach to technology and teamwork</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalValues.map((value, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-6 leading-relaxed">
              "Great infrastructure is invisible to users but invaluable to teams. My goal is to build systems so reliable and efficient that they become the foundation for innovation, not obstacles to it."
            </blockquote>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Sojib "Raissul" Hossain</div>
                <div className="text-muted-foreground">DevOps Engineer, Sheba Fintech LTD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPhilosophy;