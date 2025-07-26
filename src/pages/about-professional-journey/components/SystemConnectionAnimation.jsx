import React, { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';

const SystemConnectionAnimation = () => {
  const [activeConnections, setActiveConnections] = useState([]);
  const [dataFlow, setDataFlow] = useState([]);

  const systems = [
    { id: 'dev', name: 'Development', icon: 'Code', position: { x: 10, y: 20 }, color: 'text-blue-500' },
    { id: 'ci', name: 'CI/CD', icon: 'GitBranch', position: { x: 50, y: 10 }, color: 'text-green-500' },
    { id: 'staging', name: 'Staging', icon: 'TestTube', position: { x: 90, y: 20 }, color: 'text-yellow-500' },
    { id: 'prod', name: 'Production', icon: 'Server', position: { x: 90, y: 80 }, color: 'text-red-500' },
    { id: 'monitor', name: 'Monitoring', icon: 'Activity', position: { x: 50, y: 90 }, color: 'text-purple-500' },
    { id: 'db', name: 'Database', icon: 'Database', position: { x: 10, y: 80 }, color: 'text-indigo-500' }
  ];

  const connections = [
    { from: 'dev', to: 'ci', path: 'M 10 20 Q 30 15 50 10' },
    { from: 'ci', to: 'staging', path: 'M 50 10 Q 70 15 90 20' },
    { from: 'staging', to: 'prod', path: 'M 90 20 Q 90 50 90 80' },
    { from: 'prod', to: 'monitor', path: 'M 90 80 Q 70 85 50 90' },
    { from: 'monitor', to: 'db', path: 'M 50 90 Q 30 85 10 80' },
    { from: 'db', to: 'dev', path: 'M 10 80 Q 10 50 10 20' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate connections
      const randomConnection = connections[Math.floor(Math.random() * connections.length)];
      setActiveConnections(prev => {
        const newConnections = [...prev, randomConnection];
        return newConnections.slice(-3); // Keep only last 3 active
      });

      // Animate data flow
      const randomSystem = systems[Math.floor(Math.random() * systems.length)];
      setDataFlow(prev => {
        const newFlow = [...prev, { ...randomSystem, id: Date.now() }];
        return newFlow.slice(-5); // Keep only last 5 data points
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Clear active connections after animation
    const timeout = setTimeout(() => {
      setActiveConnections([]);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [activeConnections]);

  useEffect(() => {
    // Clear data flow after animation
    const timeout = setTimeout(() => {
      setDataFlow([]);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [dataFlow]);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Connecting Systems & Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how I bridge different technologies and teams to create seamless, reliable infrastructure workflows.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Animation Container */}
          <div className="relative h-96 bg-card border border-border rounded-lg p-8 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
                {Array.from({ length: 100 }).map((_, i) => (
                  <div key={i} className="border border-muted-foreground/20"></div>
                ))}
              </div>
            </div>

            {/* SVG for Connections */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Static Connection Lines */}
              {connections.map((connection, index) => (
                <path
                  key={index}
                  d={connection.path}
                  stroke="currentColor"
                  strokeWidth="0.2"
                  fill="none"
                  className="text-border"
                />
              ))}

              {/* Active Connection Lines */}
              {activeConnections.map((connection, index) => (
                <path
                  key={`active-${index}`}
                  d={connection.path}
                  stroke="currentColor"
                  strokeWidth="0.4"
                  fill="none"
                  className="text-primary animate-pulse"
                />
              ))}

              {/* Data Flow Particles */}
              {dataFlow.map((flow, index) => (
                <circle
                  key={flow.id}
                  cx={flow.position.x}
                  cy={flow.position.y}
                  r="0.5"
                  fill="currentColor"
                  className={`${flow.color} animate-ping`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </svg>

            {/* System Nodes */}
            {systems.map((system) => (
              <div
                key={system.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${system.position.x}%`,
                  top: `${system.position.y}%`
                }}
              >
                <div className={`relative group cursor-pointer`}>
                  {/* Node Circle */}
                  <div className={`w-16 h-16 bg-background border-2 border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
                    activeConnections.some(conn => conn.from === system.id || conn.to === system.id)
                      ? 'border-primary shadow-primary/20'
                      : ''
                  }`}>
                    <Icon name={system.icon} size={24} className={system.color} />
                  </div>

                  {/* Node Label */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background border border-border rounded-md px-2 py-1 text-xs font-medium text-foreground whitespace-nowrap shadow-lg">
                      {system.name}
                    </div>
                  </div>

                  {/* Activity Indicator */}
                  {dataFlow.some(flow => flow.name === system.name) && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full animate-pulse">
                      <div className="absolute inset-0 bg-success rounded-full animate-ping"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                <Icon name="Zap" size={28} className="text-white" />
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                <div className="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                  DevOps Hub
                </div>
              </div>
            </div>

            {/* Status Indicators */}
            <div className="absolute top-4 right-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Systems Online</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Data Flowing</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Monitoring Active</span>
              </div>
            </div>
          </div>

          {/* Bridge Builder Explanation */}
          <div className="grid lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="GitBranch" size={20} className="text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground">System Integration</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                I connect disparate systems and tools to create unified workflows that reduce friction and improve reliability across the entire development lifecycle.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground">Team Collaboration</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                I facilitate communication between development, operations, and business teams, ensuring everyone has the tools and visibility they need to succeed.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Icon name="Activity" size={20} className="text-purple-500" />
                </div>
                <h3 className="font-semibold text-foreground">Continuous Monitoring</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                I implement comprehensive monitoring and alerting systems that provide real-time insights into system health and performance across all environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemConnectionAnimation;