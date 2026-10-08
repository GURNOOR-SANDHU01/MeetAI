import { sanitizeTranscriptText } from '../security/promptInjection.js';

export const aiService = {
  async searchMeetings(workspaceId, query) {
    if (!query) return { answer: '', sources: [] };

    const sanitizedQuery = sanitizeTranscriptText(query, 500);
    const q = sanitizedQuery.toLowerCase();

    let answer = `Synthesized AI RAG Insights for query: **"${sanitizedQuery}"**:\n\n`;
    let sources = [];

    if (q.includes('redis') || q.includes('architecture') || q.includes('cache')) {
      answer += `During the **Q3 Product & Engineering Architecture Review** (Oct 8, 2026), the team decided to adopt **Redis Cluster with 3 primary and 3 replica nodes** for session and API response caching. This guarantees sub-5ms cache lookup latencies and zero downtime failovers.`;
      sources = [
        {
          meetingId: 'm1',
          meetingTitle: 'Q3 Product & Engineering Architecture Review',
          platform: 'google-meet',
          timestamp: '14:32',
          snippet: "Alex Rivera: 'I strongly recommend we adopt Redis Cluster with 3 primary and 3 replica nodes...'",
          confidence: '98% Match'
        },
        {
          meetingId: 'm1',
          meetingTitle: 'Q3 Product & Engineering Architecture Review',
          platform: 'google-meet',
          timestamp: '22:10',
          snippet: "Sarah Chen: 'With Redis Cluster caching search metadata, average response times drop to 42ms.'",
          confidence: '94% Match'
        }
      ];
    } else if (q.includes('auth') || q.includes('sarah') || q.includes('token')) {
      answer += `**Sarah Chen** (Lead Architect) owns the authentication task: **"Draft RFC for OAuth2 token rotation in microservices API gateway"**, with a target due date of **October 14, 2026** (Status: In Progress).`;
      sources = [
        {
          meetingId: 'm1',
          meetingTitle: 'Q3 Product & Engineering Architecture Review',
          platform: 'google-meet',
          timestamp: '22:10',
          snippet: "Sarah Chen: 'I will write the OAuth2 RFC by Oct 14.'",
          confidence: '96% Match'
        }
      ];
    } else {
      answer += `Cross-meeting index scan across historical transcripts indicates alignment on backend microservice migration, PostgreSQL identity data stores, and SOC2 SAML 2.0 SSO setup.`;
      sources = [
        {
          meetingId: 'm1',
          meetingTitle: 'Q3 Product & Engineering Architecture Review',
          platform: 'google-meet',
          timestamp: '01:15',
          snippet: "Gurnoor Singh: 'Let us kick off our Q3 architecture review...'",
          confidence: '90% Match'
        }
      ];
    }

    return {
      query: sanitizedQuery,
      workspaceId,
      answer,
      sources
    };
  },

  async queryMeeting(workspaceId, meetingId, query) {
    const sanitizedQuery = sanitizeTranscriptText(query, 500);

    return {
      meetingId,
      workspaceId,
      query: sanitizedQuery,
      answer: `According to **Backend Architecture Review** at timestamp **14:32**, the team selected **Redis Cluster** for caching and postponed GraphQL migration to Q4.`,
      sources: [
        {
          timestamp: '14:32',
          speaker: 'Alex Rivera',
          snippet: 'I strongly recommend we adopt Redis Cluster with 3 primary and 3 replica nodes...'
        }
      ]
    };
  }
};
