import { v4 as uuidv4 } from 'uuid';

const MEMORY_MEETINGS = [
  {
    id: 'm1',
    workspaceId: 'ws-acme-corp',
    title: 'Q3 Product & Engineering Architecture Review',
    date: 'Oct 8, 2026',
    time: '10:00 AM - 11:15 AM',
    duration: '75 mins',
    platform: 'google-meet',
    status: 'Processed',
    hasSummary: true,
    actionItemsCount: 3,
    decisionsCount: 3,
    participants: [
      { name: 'Gurnoor Singh', role: 'Head of Product', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
      { name: 'Sarah Chen', role: 'Lead Architect', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80' },
      { name: 'Alex Rivera', role: 'Principal Engineer', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80' }
    ],
    metadata: {
      fileSize: '412 MB',
      sentimentScore: 92,
      sentimentText: 'Very Positive / High Alignment'
    },
    summary: {
      overview: 'Evaluated backend infrastructure performance for the upcoming enterprise release. Decided to adopt Redis Cluster for caching and postpone GraphQL migration to Q4.',
      keyPoints: [
        'Adopt Redis Cluster with 3 primary and 3 replica nodes.',
        'Postpone GraphQL migration to Q4 to prioritize REST API v3 rate-limiting.',
        'Standardize OpenTelemetry distributed tracing across backend services.'
      ],
      decisions: [
        {
          id: 'dec-1',
          title: 'Adopt Redis Cluster for session & API response caching',
          description: 'Ensures sub-5ms cache lookup and zero downtime during failovers.',
          owner: 'Alex Rivera',
          timestamp: '14:32',
          impact: 'High'
        },
        {
          id: 'dec-2',
          title: 'Postpone GraphQL migration to Q4',
          description: 'Enforces REST API v3 rate-limiting first for maximum SDK backwards compatibility.',
          owner: 'Sarah Chen',
          timestamp: '22:10',
          impact: 'Medium'
        }
      ],
      actionItems: [
        {
          id: 'ai-1',
          task: 'Benchmark Redis vs Dragonfly for high-throughput cache nodes',
          assignee: 'Alex Rivera',
          dueDate: 'Oct 12, 2026',
          status: 'Pending',
          priority: 'High',
          meetingId: 'm1',
          meetingTitle: 'Q3 Product Architecture Review',
          timestamp: '14:32'
        },
        {
          id: 'ai-2',
          task: 'Draft RFC for OAuth2 token rotation in microservices gateway',
          assignee: 'Sarah Chen',
          dueDate: 'Oct 14, 2026',
          status: 'In Progress',
          priority: 'Medium',
          meetingId: 'm1',
          meetingTitle: 'Q3 Product Architecture Review',
          timestamp: '22:10'
        }
      ]
    },
    transcript: [
      {
        id: 't1-1',
        speaker: 'Gurnoor Singh',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        timestamp: '01:15',
        text: "Good morning everyone. Let's kick off our Q3 architecture review. Today's focus is on resolving our caching bottlenecks."
      },
      {
        id: 't1-2',
        speaker: 'Alex Rivera',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
        timestamp: '14:32',
        text: "I strongly recommend we adopt Redis Cluster with 3 primary and 3 replica nodes. I'll complete full benchmark comparisons by Oct 12."
      }
    ]
  },
  {
    id: 'm2',
    workspaceId: 'ws-acme-corp',
    title: 'Enterprise Client Onboarding: Nexus Systems',
    date: 'Oct 8, 2026',
    time: '02:00 PM - 02:45 PM',
    duration: '45 mins',
    platform: 'teams',
    status: 'Processed',
    hasSummary: true,
    actionItemsCount: 2,
    decisionsCount: 1,
    participants: [
      { name: 'Gurnoor Singh', role: 'Head of Product', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
      { name: 'David Kim', role: 'VP Sales', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80' }
    ],
    summary: {
      overview: 'Technical onboarding kickoff for Nexus Systems (5,000 user seats). Discussed Azure AD SAML SSO setup and SOC2 compliance package delivery.',
      keyPoints: [
        'Complete Azure AD SAML 2.0 config by Friday.',
        'Deliver SOC2 Type II compliance package to Nexus Security lead.'
      ],
      decisions: [
        {
          id: 'dec-3',
          title: 'Enable custom IP whitelisting for Nexus tenant',
          description: 'Configured dedicated security policy rules in MeetAI enterprise admin settings.',
          owner: 'Gurnoor Singh',
          timestamp: '12:10',
          impact: 'High'
        }
      ],
      actionItems: [
        {
          id: 'ai-3',
          task: 'Send SOC2 compliance package & Azure AD setup guide to Robert',
          assignee: 'David Kim',
          dueDate: 'Oct 9, 2026',
          status: 'Pending',
          priority: 'High',
          meetingId: 'm2',
          meetingTitle: 'Nexus Systems Onboarding',
          timestamp: '08:15'
        }
      ]
    },
    transcript: [
      {
        id: 't2-1',
        speaker: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        timestamp: '02:00',
        text: 'Welcome everyone! We are thrilled to welcome Nexus Systems to MeetAI. Gurnoor and I are here to walk through technical onboarding.'
      }
    ]
  }
];

export const meetingService = {
  async listMeetings(workspaceId, { page = 1, limit = 20, platform, search, status }) {
    let list = MEMORY_MEETINGS.filter((m) => m.workspaceId === workspaceId);

    if (platform && platform !== 'ALL') {
      list = list.filter((m) => m.platform === platform);
    }
    if (status && status !== 'ALL') {
      list = list.filter((m) => m.status.toLowerCase() === status.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((m) => m.title.toLowerCase().includes(q));
    }

    const total = list.length;
    const startIndex = (page - 1) * limit;
    const items = list.slice(startIndex, startIndex + limit);

    return {
      meetings: items,
      meta: {
        page: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit)
      }
    };
  },

  async getMeeting(workspaceId, meetingId) {
    const meeting = MEMORY_MEETINGS.find((m) => m.id === meetingId);
    if (!meeting) {
      const err = new Error('Meeting not found');
      err.statusCode = 404;
      err.code = 'MEETING_NOT_FOUND';
      throw err;
    }

    // Verify workspace isolation (BOLA/IDOR defense)
    if (meeting.workspaceId !== workspaceId) {
      const err = new Error('Access denied to meeting in another workspace');
      err.statusCode = 403;
      err.code = 'WORKSPACE_MISMATCH';
      throw err;
    }

    return meeting;
  },

  async getTranscript(workspaceId, meetingId) {
    const meeting = await this.getMeeting(workspaceId, meetingId);
    return {
      meetingId: meeting.id,
      transcript: meeting.transcript || []
    };
  },

  async getSummary(workspaceId, meetingId) {
    const meeting = await this.getMeeting(workspaceId, meetingId);
    return {
      meetingId: meeting.id,
      summary: meeting.summary || {}
    };
  },

  async getDecisions(workspaceId, meetingId) {
    const meeting = await this.getMeeting(workspaceId, meetingId);
    return {
      meetingId: meeting.id,
      decisions: meeting.summary?.decisions || []
    };
  },

  async getActionItems(workspaceId, meetingId) {
    const meeting = await this.getMeeting(workspaceId, meetingId);
    return {
      meetingId: meeting.id,
      actionItems: meeting.summary?.actionItems || []
    };
  }
};
