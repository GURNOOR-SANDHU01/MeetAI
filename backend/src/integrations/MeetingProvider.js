export class MeetingProvider {
  constructor(providerKey) {
    this.providerKey = providerKey;
  }

  async connect(workspaceId, code, redirectUri) {
    throw new Error('Method connect() must be implemented by subclass');
  }

  async disconnect(workspaceId) {
    throw new Error('Method disconnect() must be implemented by subclass');
  }

  async listMeetings(workspaceId, options = {}) {
    throw new Error('Method listMeetings() must be implemented by subclass');
  }

  async getMeeting(meetingId) {
    throw new Error('Method getMeeting() must be implemented by subclass');
  }

  async getParticipants(meetingId) {
    throw new Error('Method getParticipants() must be implemented by subclass');
  }

  async getTranscript(meetingId) {
    throw new Error('Method getTranscript() must be implemented by subclass');
  }

  async getRecording(meetingId) {
    throw new Error('Method getRecording() must be implemented by subclass');
  }

  async subscribeToEvents(workspaceId) {
    throw new Error('Method subscribeToEvents() must be implemented by subclass');
  }
}
