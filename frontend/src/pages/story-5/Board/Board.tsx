'use client';

import { useState } from 'react';
import { BoardColumn, Task } from './Board.types';

const INITIAL_COLUMNS: BoardColumn[] = [
  { id: '1', title: 'To Do', status: 'todo' },
  { id: '2', title: 'In Progress', status: 'in-progress' },
  { id: '3', title: 'Done', status: 'done' },
];

const INITIAL_TASKS: Task[] = [
  { id: 't1', title: 'Setup Project', status: 'todo', priority: 'high' },
  { id: 't2', title: 'Design System', status: 'in-progress', priority: 'medium' },
];

export const Board = () => {
  const [tasks] = useState<Task[]>(INITIAL_TASKS);

  return (
    <div className="flex h-full w-full gap-4 p-6 overflow-x-auto bg-[var(--color-bg-secondary)]">
      {INITIAL_COLUMNS.map((column) => (
        <div key={column.id} className="flex flex-col w-80 shrink-0 gap-4">
          <h2 className="font-bold text-[var(--color-text-primary)]">{column.title}</h2>
          <div className="flex flex-col gap-2">
            {tasks
              .filter((task) => task.status === column.status)
              .map((task) => (
                <div
                  key={task.id}
                  className="p-4 rounded-lg bg-[var(--color-bg-primary)] shadow-sm border border-[var(--color-border)] cursor-pointer hover:border-[var(--color-primary)] transition-colors"
                >
                  <p className="font-medium text-[var(--color-text-primary)]">{task.title}</p>
                  <span className={`text-xs px-2 py-1 rounded ${task.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                    {task.priority}
                  </span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
