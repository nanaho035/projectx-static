
import React from 'react';

const ReadmeInstructions: React.FC = () => {
    return (
        <div className="mt-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg text-left max-w-4xl mx-auto">
            <h3 className="font-semibold text-slate-800 dark:text-white mb-2">How to Deploy to Cloudflare Pages:</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>Create a new project on your Git provider (GitHub, GitLab).</li>
                <li>Push the entire project folder to the new repository.</li>
                <li>Log in to your Cloudflare dashboard and go to Pages.</li>
                <li>Click on "Create a project" and connect your Git account.</li>
                <li>Select the repository you just created.</li>
                <li>In the "Build settings", choose a framework preset like "Vite" or "Create React App". If using a simple setup without a build step, you might need to leave the build command empty and set the output directory to your root folder. For a standard React App, you'd use `npm run build` as build command and `dist` or `build` as output directory.</li>
                <li>Click "Save and Deploy". Cloudflare will handle the rest!</li>
            </ol>
        </div>
    );
}


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-500 dark:text-slate-400">
        <ReadmeInstructions />
        <p className="mt-8 text-sm">
          &copy; {new Date().getFullYear()} ProjectX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
