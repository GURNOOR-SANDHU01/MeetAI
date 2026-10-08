import { MeetingProvider } from '../MeetingProvider.js';
import { logger } from '../../utils/logger.js';

export class GoogleMeetProvider extends MeetingProvider {
  constructor() {
    super('google-meet');
  }

  async connect(workspaceId, code, redirectUri) {
    logger.info({ workspaceId }, 'Connecting Google Meet OAuth credentials');
    return {
      connected: true,
      account: 'gurnoor@acme-corp.com',
      expiresIn: 3600
    };
  }

  async disconnect(workspaceId) {
    logger.info({ workspaceId }, 'Disconnecting Google Meet OAuth credentials');
    return { success: true };
  }

  async listMeetings(workspaceId, options = {}) {
    return [
      {
        id: 'gm-101',
        title: 'Q3 Product & Engineering Architecture Review',
        platform: 'google-meet',
        date: 'Oct 8, 2026',
        duration: '75 mins'
      }
    ];
  }

  async getMeeting(meetingId) {
    return { id: meetingId, platform: 'google-meet', title: 'Google Meet Session' };
  }

  async getParticipants(meetingId) {
    return [{ name: 'Gurnoor Singh' }, { name: 'Sarah Chen' }];
  }

  async getTranscript(meetingId) {
    return { meetingId, text: 'Google Meet automated transcript content...' };
  }

  async getRecording(meetingId) {
    return { url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' };
  }

  async subscribeToEvents(workspaceId) {
    return { subscriptionId: `gmeet-sub-${Date.now()}` };
  }
}
