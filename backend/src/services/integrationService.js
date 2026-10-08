import { encrypt, decrypt } from '../utils/encryption.js';

const MEMORY_INTEGRATIONS = [
  {
    id: 'google-meet',
    workspaceId: 'ws-acme-corp',
    platformKey: 'google-meet',
    name: 'Google Meet',
    description: 'Import Google Meet meetings, transcripts and meeting data.',
    connected: true,
    connectedAccount: 'gurnoor@acme-corp.com',
    lastSync: '10 mins ago',
    autoSync: true
  },
  {
    id: 'teams',
    workspaceId: 'ws-acme-corp',
    platformKey: 'teams',
    name: 'Microsoft Teams',
    description: 'Bring Microsoft Teams meetings into your MeetAI workspace.',
    connected: true,
    connectedAccount: 'gurnoor@acme-corp.onmicrosoft.com',
    lastSync: '1 hour ago',
    autoSync: true
  },
  {
    id: 'zoom',
    workspaceId: 'ws-acme-corp',
    platformKey: 'zoom',
    name: 'Zoom',
    description: 'Import Zoom meetings, recordings and transcripts.',
    connected: false,
    connectedAccount: null,
    lastSync: 'Never',
    autoSync: false
  }
];

export const integrationService = {
  async listIntegrations(workspaceId) {
    return MEMORY_INTEGRATIONS.filter((i) => i.workspaceId === workspaceId);
  },

  async connectIntegration(workspaceId, provider, { code, connectedAccount }) {
    const item = MEMORY_INTEGRATIONS.find((i) => i.workspaceId === workspaceId && i.platformKey === provider);
    if (!item) {
      const err = new Error(`Integration provider '${provider}' not found`);
      err.statusCode = 404;
      throw err;
    }

    // Encrypt OAuth credentials with AES-256-GCM before storing
    const mockAccessToken = `oauth_token_${provider}_${Date.now()}`;
    const encryptedToken = encrypt(mockAccessToken);

    item.connected = true;
    item.connectedAccount = connectedAccount || 'gurnoor@acme-corp.com';
    item.lastSync = 'Just now';

    return {
      integration: item,
      tokenEncrypted: true
    };
  },

  async disconnectIntegration(workspaceId, provider) {
    const item = MEMORY_INTEGRATIONS.find((i) => i.workspaceId === workspaceId && i.platformKey === provider);
    if (!item) {
      const err = new Error(`Integration provider '${provider}' not found`);
      err.statusCode = 404;
      throw err;
    }

    item.connected = false;
    item.connectedAccount = null;
    item.lastSync = 'Never';

    return { success: true, provider };
  }
};
