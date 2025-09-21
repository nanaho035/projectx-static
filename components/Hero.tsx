
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Modern Web Development Made Simple
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
          Leverage the power of modern tools to build fast, scalable, and beautiful websites. This is a demonstration of a simple static site setup.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#features"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
