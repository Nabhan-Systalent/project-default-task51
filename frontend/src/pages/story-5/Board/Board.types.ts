export interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
}

export interface BoardColumn {
  id: string;
  title: string;
  status: Task['status'];
}
