'use client';

import React from 'react';
import { ProjectListProps } from './ProjectManager.types';

export const ProjectManager: React.FC<ProjectListProps> = ({
  projects,
  isLoading = false,
  error = null,
  onProjectClick,
  onCreateClick,
}) => {
  if (isLoading) {
    return (
      <div className="w-full p-8 animate-pulse space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-[var(--color-surface-dim)] rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-[var(--color-error)]">
        <p>Error loading projects: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Projects</h1>
        <button
          onClick={onCreateClick}
          className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-on-primary)] rounded-md hover:opacity-90 transition-opacity"
        >
          Create Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.length === 0 ? (
          <div className="p-12 text-center text-[var(--color-text-secondary)] border border-dashed border-[var(--color-border)] rounded-lg">
            No projects found. Create your first one to get started.
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick?.(project.id)}
              className="p-6 border border-[var(--color-border)] rounded-lg hover:border-[var(--color-primary)] cursor-pointer transition-colors bg-[var(--color-surface)]"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{project.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">{project.description}</p>
              <div className="flex gap-4 mt-4 text-xs text-[var(--color-text-tertiary)]">
                <span>{project.memberCount} members</span>
                <span>Updated {project.lastUpdated}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
