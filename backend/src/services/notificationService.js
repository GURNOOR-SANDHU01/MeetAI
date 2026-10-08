const MEMORY_NOTIFICATIONS = [
  {
    id: 'notif-1',
    userId: 'u1',
    workspaceId: 'ws-acme-corp',
    title: 'AI Summary Generated',
    text: 'Q3 Architecture Review summary & 3 action items ready.',
    type: 'info',
    isRead: false,
    createdAt: new Date(Date.now() - 600000).toISOString()
  },
  {
    id: 'notif-2',
    userId: 'u1',
    workspaceId: 'ws-acme-corp',
    title: 'New Meeting Imported',
    text: 'Nexus Systems Onboarding imported from Microsoft Teams.',
    type: 'info',
    isRead: false,
    createdAt: new Date(Date.now() - 3600000).toISOString()
  }
];

export const notificationService = {
  async listNotifications(userId, workspaceId) {
    return MEMORY_NOTIFICATIONS.filter(
      (n) => n.userId === userId && n.workspaceId === workspaceId
    );
  },

  async markAsRead(userId, notificationId) {
    const item = MEMORY_NOTIFICATIONS.find((n) => n.id === notificationId && n.userId === userId);
    if (item) item.isRead = true;
    return item;
  }
};
