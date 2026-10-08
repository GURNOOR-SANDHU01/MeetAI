export const MOCK_MEETINGS = [
  {
    id: "m1",
    title: "Backend Architecture Review",
    date: "Sep 18, 2026",
    time: "10:30 AM - 11:15 AM",
    duration: "45 min",
    platform: "google-meet",
    status: "Processed",
    recordingAvailable: true,
    hasSummary: true,
    actionItemsCount: 3,
    decisionsCount: 3,
    participants: [
      { name: "Gurnoor Singh", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Rahul Sharma", role: "Lead Architect", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
      { name: "Sarah Chen", role: "Backend Lead", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
      { name: "Alex Rivera", role: "Principal Engineer", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" }
    ],
    summary: {
      overview: "This meeting focused on migrating the authentication system to a centralized identity service. The team agreed to use JWT-based access tokens with rotating refresh tokens and select PostgreSQL as the primary data store with Redis for session caching.",
      keyPoints: [
        "Move authentication into a dedicated microservice architecture.",
        "Use PostgreSQL as the primary source of truth for identity data.",
        "Use Redis for high-throughput session-related caching.",
        "Add refresh-token rotation to mitigate OAuth token theft risks."
      ],
      decisions: [
        {
          id: "dec-1",
          title: "Use PostgreSQL as the primary identity database",
          description: "Guarantees strict ACID compliance and relational integrity for tenant user records.",
          owner: "Rahul Sharma",
          timestamp: "10:33",
          impact: "High"
        },
        {
          id: "dec-2",
          title: "Use Redis for caching and rate limiting",
          description: "Provides sub-5ms cache lookup and token bucket rate-limiting across API gateways.",
          owner: "Sarah Chen",
          timestamp: "10:32",
          impact: "High"
        },
        {
          id: "dec-3",
          title: "Implement rotating refresh tokens for OAuth2 gateway",
          description: "Rotates refresh tokens on every renewal request to prevent replay attacks.",
          owner: "Alex Rivera",
          timestamp: "10:35",
          impact: "Medium"
        }
      ],
      actionItems: [
        {
          id: "t1",
          task: "Complete authentication API specification and OpenAPI docs",
          assignee: "Sarah Chen",
          assigneeAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
          dueDate: "Today",
          priority: "High",
          status: "In Progress",
          meetingId: "m1",
          meetingTitle: "Backend Architecture Review",
          timestamp: "10:31"
        },
        {
          id: "t2",
          task: "Finalize database schema migration scripts for PostgreSQL",
          assignee: "Rahul Sharma",
          assigneeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
          dueDate: "Tomorrow",
          priority: "High",
          status: "Pending",
          meetingId: "m1",
          meetingTitle: "Backend Architecture Review",
          timestamp: "10:33"
        },
        {
          id: "t3",
          task: "Prepare architecture RFC document for executive team review",
          assignee: "Gurnoor Singh",
          assigneeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 12, 2026",
          status: "Pending",
          priority: "Medium",
          meetingId: "m1",
          meetingTitle: "Backend Architecture Review",
          timestamp: "10:40"
        }
      ]
    },
    transcript: [
      {
        id: "tr-1",
        speaker: "Rahul Sharma",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        timestamp: "10:31",
        text: "I think we should move authentication into a dedicated microservice to decouple session state from monolith deployments."
      },
      {
        id: "tr-2",
        speaker: "Gurnoor Singh",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        timestamp: "10:32",
        text: "Would Redis be useful for session management and fast cache lookups?"
      },
      {
        id: "tr-3",
        speaker: "Rahul Sharma",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        timestamp: "10:33",
        text: "Yes, Redis for active tokens, but PostgreSQL should remain the source of truth for user profile records and permissions."
      },
      {
        id: "tr-4",
        speaker: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
        timestamp: "10:35",
        text: "Agreed. I'll complete the authentication API specification by tomorrow and write the OpenAPI docs."
      }
    ]
  },
  {
    id: "m2",
    title: "Design Review & Component Tokens",
    date: "Sep 20, 2026",
    time: "01:00 PM - 01:30 PM",
    duration: "30 min",
    platform: "teams",
    status: "Processed",
    recordingAvailable: true,
    hasSummary: true,
    actionItemsCount: 2,
    decisionsCount: 1,
    participants: [
      { name: "Gurnoor Singh", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Chloe Bennett", role: "UI/UX Designer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" }
    ],
    summary: {
      overview: "Aligned on design tokens, mobile navigation drawers, and dark/light color palette guidelines for MeetAI Web v2.",
      keyPoints: [
        "Adopt clean enterprise Tailwind CSS tokens.",
        "Ensure single-click interactive task completion in list views."
      ],
      decisions: [
        {
          id: "dec-4",
          title: "Use subtle border shadows and slate palette",
          description: "Clean enterprise look avoiding heavy glassmorphism.",
          owner: "Chloe Bennett",
          timestamp: "01:12",
          impact: "Medium"
        }
      ],
      actionItems: [
        {
          id: "t4",
          task: "Review PR #42 for Design System v2 integration",
          assignee: "Gurnoor Singh",
          assigneeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 10, 2026",
          priority: "High",
          status: "In Progress",
          meetingId: "m2",
          meetingTitle: "Design Review",
          timestamp: "01:20"
        }
      ]
    },
    transcript: [
      {
        id: "tr-5",
        speaker: "Chloe Bennett",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        timestamp: "01:05",
        text: "Here is the updated design system palette. We are prioritizing crisp typography and subtle card borders."
      }
    ]
  },
  {
    id: "m3",
    title: "Sprint Planning & Backlog Grooming",
    date: "Sep 22, 2026",
    time: "03:30 PM - 04:30 PM",
    duration: "60 min",
    platform: "zoom",
    status: "Processed",
    recordingAvailable: true,
    hasSummary: true,
    actionItemsCount: 2,
    decisionsCount: 2,
    participants: [
      { name: "Gurnoor Singh", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Marcus Vance", role: "Product Manager", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
      { name: "Elena Rostova", role: "DevOps Engineer", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80" }
    ],
    summary: {
      overview: "Sprint 43 story allocation. Planned vector search optimization, Zoom recording webhook listeners, and task status filters.",
      keyPoints: [
        "Commit 38 story points to Sprint 43.",
        "Prioritize global RAG search latency reduction."
      ],
      decisions: [
        {
          id: "dec-5",
          title: "Allocate 20% sprint points to vector retrieval optimization",
          description: "Target sub-150ms semantic search queries.",
          owner: "Marcus Vance",
          timestamp: "03:45",
          impact: "High"
        }
      ],
      actionItems: [
        {
          id: "t5",
          task: "Setup automated Cypress end-to-end testing pipeline",
          assignee: "Elena Rostova",
          assigneeAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 14, 2026",
          priority: "Low",
          status: "Completed",
          meetingId: "m3",
          meetingTitle: "Sprint Planning",
          timestamp: "04:10"
        }
      ]
    },
    transcript: [
      {
        id: "tr-6",
        speaker: "Marcus Vance",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        timestamp: "03:35",
        text: "Let's review our sprint capacity. We have 38 points total for this iteration."
      }
    ]
  }
];

export const UPCOMING_MEETINGS = [
  {
    id: "up-1",
    title: "Product Architecture Review",
    time: "10:30 AM",
    duration: "45 min",
    platform: "google-meet",
    status: "In 30 min",
    participants: [
      { name: "Gurnoor Singh", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Rahul Sharma", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
      { name: "Sarah Chen", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "up-2",
    title: "Design Sync",
    time: "1:00 PM",
    duration: "30 min",
    platform: "teams",
    status: "Today",
    participants: [
      { name: "Gurnoor Singh", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Chloe Bennett", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" }
    ]
  },
  {
    id: "up-3",
    title: "Sprint Planning",
    time: "3:30 PM",
    duration: "60 min",
    platform: "zoom",
    status: "Today",
    participants: [
      { name: "Gurnoor Singh", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Marcus Vance", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
      { name: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80" }
    ]
  }
];
