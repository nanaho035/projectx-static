
import React from 'react';
import FeatureCard from './FeatureCard';
import { CodeIcon, RocketLaunchIcon, SunIcon as LightningBoltIcon } from './icons/FeatureIcons';

const features = [
  {
    icon: <CodeIcon />,
    title: 'Clean Code',
    description: 'Built with modern standards, ensuring readability and maintainability without external frameworks.',
  },
  {
    icon: <RocketLaunchIcon />,
    title: 'Deploy Anywhere',
    description: 'A simple, static build that can be deployed to any modern hosting platform like Cloudflare Pages.',
  },
  {
    icon: <LightningBoltIcon />,
    title: 'Light & Dark Mode',
    description: 'Includes a theme toggle with user preference saved in local storage for a personalized experience.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Core Features
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Everything you need in a modern static website.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
