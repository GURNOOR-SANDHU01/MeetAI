import { v4 as uuidv4 } from 'uuid';

const MEMORY_AUDIT_LOGS = [
  {
    id: 'log-1',
    workspaceId: 'ws-acme-corp',
    actorId: 'u1',
    actorEmail: 'gurnoor@acme-corp.com',
    action: 'USER_LOGIN',
    resource: 'Auth',
    resourceId: 'u1',
    ipAddress: '127.0.0.1',
    createdAt: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 'log-2',
    workspaceId: 'ws-acme-corp',
    actorId: 'u1',
    actorEmail: 'gurnoor@acme-corp.com',
    action: 'INTEGRATION_CONNECTED',
    resource: 'Integration',
    resourceId: 'google-meet',
    ipAddress: '127.0.0.1',
    createdAt: new Date(Date.now() - 1800000).toISOString()
  }
];

export const auditService = {
  async logEvent({ workspaceId, actorId, actorEmail, action, resource, resourceId, requestId, ipAddress, details }) {
    const entry = {
      id: `log-${uuidv4()}`,
      workspaceId: workspaceId || 'ws-acme-corp',
      actorId: actorId || 'system',
      actorEmail: actorEmail || 'system@meetai.com',
      action,
      resource,
      resourceId,
      requestId,
      ipAddress,
      details,
      createdAt: new Date().toISOString()
    };
    MEMORY_AUDIT_LOGS.unshift(entry);
    return entry;
  },

  async listAuditLogs(workspaceId) {
    return MEMORY_AUDIT_LOGS.filter((l) => l.workspaceId === workspaceId);
  }
};
