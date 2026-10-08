import React, { createContext, useContext, useState, useMemo } from 'react';
import { MOCK_MEETINGS, UPCOMING_MEETINGS } from '../data/mockMeetings';
import { MOCK_INTEGRATIONS } from '../data/mockIntegrations';
import { CURRENT_USER, WORKSPACE_MEMBERS } from '../data/mockUsers';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [meetings, setMeetings] = useState(MOCK_MEETINGS);
  const [integrations, setIntegrations] = useState(MOCK_INTEGRATIONS);
  const [user, setUser] = useState(CURRENT_USER);
  const [members, setMembers] = useState(WORKSPACE_MEMBERS);
  const [toast, setToast] = useState(null);

  // Search Modal state
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Integration Connect Modal state
  const [connectModalIntegration, setConnectModalIntegration] = useState(null);

  // Extract initial tasks list from mockMeetings
  const initialTasks = useMemo(() => {
    const list = [];
    MOCK_MEETINGS.forEach((m) => {
      if (m.summary && m.summary.actionItems) {
        list.push(...m.summary.actionItems);
      }
    });
    return list;
  }, []);

  const [tasks, setTasks] = useState(initialTasks);

  const showToast = (message, type = 'info') => {
    setToast({ id: Date.now(), message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const toggleTaskStatus = (taskId, forcedStatus = null) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          let nextStatus;
          if (forcedStatus) {
            nextStatus = forcedStatus;
          } else {
            nextStatus = task.status === 'Completed' ? 'Pending' : 'Completed';
          }
          showToast(`Task "${task.task.substring(0, 30)}..." updated to ${nextStatus}`, 'success');
          return { ...task, status: nextStatus };
        }
        return task;
      })
    );
  };

  const addTask = (newTask) => {
    const taskObj = {
      id: `task-${Date.now()}`,
      task: newTask.title || newTask.task,
      assignee: newTask.assignee || user.name,
      assigneeAvatar: user.avatar,
      dueDate: newTask.dueDate || 'Oct 15, 2026',
      priority: newTask.priority || 'Medium',
      status: 'Pending',
      meetingId: newTask.meetingId || 'm1',
      meetingTitle: newTask.meetingTitle || 'Backend Architecture Review',
      timestamp: '10:30'
    };
    setTasks((prev) => [taskObj, ...prev]);
    showToast('New action item created', 'success');
  };

  const toggleIntegration = (integrationId) => {
    setIntegrations((prev) =>
      prev.map((item) => {
        if (item.id === integrationId) {
          const nextState = !item.connected;
          showToast(
            `${item.name} is now ${nextState ? 'connected' : 'disconnected'}`,
            nextState ? 'success' : 'info'
          );
          return {
            ...item,
            connected: nextState,
            connectedAccount: nextState ? user.email : null,
            lastSync: nextState ? 'Just now' : 'Never',
          };
        }
        return item;
      })
    );
  };

  const updateUserSettings = (updatedFields) => {
    setUser((prev) => ({ ...prev, ...updatedFields }));
    showToast('Settings saved successfully', 'success');
  };

  const addWorkspaceMember = (email, role) => {
    const nameFromEmail = email.split('@')[0].replace('.', ' ');
    const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
    const newMember = {
      id: `u-${Date.now()}`,
      name: formattedName,
      email,
      role: role || 'Member',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80`,
      status: 'Active'
    };
    setMembers((prev) => [...prev, newMember]);
    showToast(`Invited ${email} as ${role}`, 'success');
  };

  return (
    <AppContext.Provider
      value={{
        meetings,
        setMeetings,
        tasks,
        setTasks,
        toggleTaskStatus,
        addTask,
        integrations,
        toggleIntegration,
        user,
        members,
        addWorkspaceMember,
        updateUserSettings,
        upcomingMeetings: UPCOMING_MEETINGS,
        toast,
        showToast,
        searchModalOpen,
        setSearchModalOpen,
        connectModalIntegration,
        setConnectModalIntegration,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
