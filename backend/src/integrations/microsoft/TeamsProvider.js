import { MeetingProvider } from '../MeetingProvider.js';
import { logger } from '../../utils/logger.js';

export class TeamsProvider extends MeetingProvider {
  constructor() {
    super('teams');
  }

  async connect(workspaceId, code, redirectUri) {
    logger.info({ workspaceId }, 'Connecting Microsoft Teams OAuth credentials');
    return {
      connected: true,
      account: 'gurnoor@acme-corp.onmicrosoft.com',
      expiresIn: 3600
    };
  }

  async disconnect(workspaceId) {
    logger.info({ workspaceId }, 'Disconnecting Microsoft Teams OAuth credentials');
    return { success: true };
  }

  async listMeetings(workspaceId, options = {}) {
    return [
      {
        id: 'teams-201',
        title: 'Enterprise Client Onboarding: Nexus Systems',
        platform: 'teams',
        date: 'Oct 8, 2026',
        duration: '45 mins'
      }
    ];
  }

  async getMeeting(meetingId) {
    return { id: meetingId, platform: 'teams', title: 'Microsoft Teams Call' };
  }

  async getParticipants(meetingId) {
    return [{ name: 'Gurnoor Singh' }, { name: 'Samantha Wright' }];
  }

  async getTranscript(meetingId) {
    // Graceful handling of Graph permission / tenant restriction
    return { meetingId, text: 'Teams call transcript content...' };
  }

  async getRecording(meetingId) {
    return { url: null, status: 'NO_RECORDING_PERMISSION' };
  }

  async subscribeToEvents(workspaceId) {
    return { subscriptionId: `teams-sub-${Date.now()}` };
  }
}
