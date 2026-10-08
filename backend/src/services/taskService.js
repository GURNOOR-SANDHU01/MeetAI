import { v4 as uuidv4 } from 'uuid';

const MEMORY_TASKS = [
  {
    id: 'ai-1',
    workspaceId: 'ws-acme-corp',
    task: 'Benchmark Redis vs Dragonfly for high-throughput cache nodes',
    assignee: 'Alex Rivera',
    assigneeAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
    dueDate: 'Oct 12, 2026',
    status: 'Pending',
    priority: 'High',
    meetingId: 'm1',
    meetingTitle: 'Q3 Product Architecture Review',
    timestamp: '14:32'
  },
  {
    id: 'ai-2',
    workspaceId: 'ws-acme-corp',
    task: 'Draft RFC for OAuth2 token rotation in microservices gateway',
    assignee: 'Sarah Chen',
    assigneeAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    dueDate: 'Oct 14, 2026',
    status: 'In Progress',
    priority: 'Medium',
    meetingId: 'm1',
    meetingTitle: 'Q3 Product Architecture Review',
    timestamp: '22:10'
  },
  {
    id: 'ai-3',
    workspaceId: 'ws-acme-corp',
    task: 'Send SOC2 compliance package & Azure AD setup guide to Robert',
    assignee: 'David Kim',
    assigneeAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    dueDate: 'Oct 9, 2026',
    status: 'Pending',
    priority: 'High',
    meetingId: 'm2',
    meetingTitle: 'Nexus Systems Onboarding',
    timestamp: '08:15'
  }
];

export const taskService = {
  async listTasks(workspaceId, { status, priority, search }) {
    let list = MEMORY_TASKS.filter((t) => t.workspaceId === workspaceId);

    if (status) {
      list = list.filter((t) => t.status.toLowerCase() === status.toLowerCase());
    }
    if (priority) {
      list = list.filter((t) => t.priority.toLowerCase() === priority.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((t) => t.task.toLowerCase().includes(q) || t.assignee.toLowerCase().includes(q));
    }

    return list;
  },

  async updateTaskStatus(workspaceId, taskId, status) {
    const task = MEMORY_TASKS.find((t) => t.id === taskId);
    if (!task) {
      const err = new Error('Task not found');
      err.statusCode = 404;
      err.code = 'TASK_NOT_FOUND';
      throw err;
    }

    // Verify workspace ownership
    if (task.workspaceId !== workspaceId) {
      const err = new Error('Access denied to task in another workspace');
      err.statusCode = 403;
      err.code = 'WORKSPACE_MISMATCH';
      throw err;
    }

    task.status = status;
    return task;
  }
};
