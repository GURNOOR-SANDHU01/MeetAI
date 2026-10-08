export const CURRENT_USER = {
  name: "Gurnoor Singh",
  email: "gurnoor@acme-corp.com",
  role: "Head of Product & Engineering",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  workspace: "Acme Corp Workspace",
  plan: "Enterprise Pro",
  initials: "GS",
};

export const PLATFORMS = {
  "google-meet": {
    id: "google-meet",
    name: "Google Meet",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-700",
    color: "#00897B",
    brandColor: "text-emerald-600",
  },
  "teams": {
    id: "teams",
    name: "Microsoft Teams",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    iconBg: "bg-indigo-100 text-indigo-700",
    color: "#464EB8",
    brandColor: "text-indigo-600",
  },
  "zoom": {
    id: "zoom",
    name: "Zoom",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    iconBg: "bg-sky-100 text-sky-700",
    color: "#2D8CFF",
    brandColor: "text-sky-600",
  },
};

export const DASHBOARD_STATS = {
  meetingsThisWeek: 14,
  meetingsChange: "+12% vs last week",
  actionItemsPending: 8,
  actionItemsDueSoon: 3,
  hoursInMeetings: 18.5,
  hoursChange: "-2.4 hrs vs last week",
  unresolvedDecisions: 5,
};

export const UPCOMING_MEETINGS = [
  {
    id: "up-1",
    title: "Executive Board Prep: Q4 Growth Strategy",
    time: "Today, 3:30 PM - 4:30 PM",
    duration: "60 min",
    platform: "google-meet",
    status: "In 30 mins",
    statusType: "urgent",
    participants: [
      { name: "Gurnoor Singh", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Marcus Vance", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
      { name: "Samantha Wright", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
      { name: "David Kim", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
    ]
  },
  {
    id: "up-2",
    title: "Global Engineering All-Hands & Product Roadmap",
    time: "Tomorrow, 10:00 AM - 11:00 AM",
    duration: "60 min",
    platform: "zoom",
    status: "Tomorrow",
    statusType: "upcoming",
    participants: [
      { name: "Gurnoor Singh", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Sarah Chen", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
      { name: "Alex Rivera", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" },
      { name: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80" },
      { name: "+38 others", avatar: null }
    ]
  },
  {
    id: "up-3",
    title: "Security Audit & SOC2 Pre-check with Cloudflare",
    time: "Friday, 2:00 PM - 2:45 PM",
    duration: "45 min",
    platform: "teams",
    status: "Oct 10",
    statusType: "future",
    participants: [
      { name: "Gurnoor Singh", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Robert Taylor", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80" },
      { name: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80" }
    ]
  }
];

export const MOCK_MEETINGS = [
  {
    id: "m1",
    title: "Q3 Product & Engineering Architecture Review",
    date: "Oct 8, 2026",
    time: "10:00 AM - 11:15 AM",
    duration: "75 mins",
    platform: "google-meet",
    status: "Processed",
    hasSummary: true,
    actionItemsCount: 3,
    decisionsCount: 3,
    participants: [
      { name: "Gurnoor Singh", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Sarah Chen", role: "Lead Architect", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
      { name: "Alex Rivera", role: "Principal Engineer", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" },
      { name: "Marcus Vance", role: "Product Director", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
      { name: "Elena Rostova", role: "DevOps Lead", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80" }
    ],
    metadata: {
      recordingUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
      fileSize: "412 MB",
      sentimentScore: 92,
      sentimentText: "Very Positive / High Alignment",
      speechRatio: [
        { name: "Sarah Chen", percentage: 38 },
        { name: "Alex Rivera", percentage: 27 },
        { name: "Gurnoor Singh", percentage: 22 },
        { name: "Marcus Vance", percentage: 13 }
      ]
    },
    summary: {
      overview: "The team evaluated backend infrastructure performance for the upcoming enterprise release. Discussions centered around database sharding, session caching strategies, GraphQL vs REST v3 performance, and OAuth token rotation for microservices.",
      keyPoints: [
        "Evaluated Redis Cluster vs Dragonfly for high-concurrency user session caching and verified sub-5ms latencies.",
        "Decided to pause GraphQL migration for core API endpoints to focus on stabilizing REST v3 rate limiting and response compression.",
        "Agreed to adopt OpenTelemetry across all Node.js and Go microservices for unified tracing.",
        "DevOps team confirmed staging environment will be fully upgraded to Kubernetes 1.30 by Thursday."
      ],
      decisions: [
        {
          id: "dec-1",
          title: "Adopt Redis Cluster for multi-region user session and API response caching",
          impact: "High",
          owner: "Alex Rivera",
          timestamp: "14:32",
          detail: "Selected Redis Cluster with 3 primary and 3 replica nodes to guarantee zero downtime during cloud provider regional failovers."
        },
        {
          id: "dec-2",
          title: "Postpone GraphQL migration to Q4 to prioritize REST API v3 rate-limiting",
          impact: "Medium",
          owner: "Sarah Chen",
          timestamp: "22:10",
          detail: "Enforces strict token bucket rate-limiting on v3 endpoints to protect against client DDoS while preserving current SDK compatibility."
        },
        {
          id: "dec-3",
          title: "Standardize OpenTelemetry distributed tracing across microservices",
          impact: "High",
          owner: "Elena Rostova",
          timestamp: "35:45",
          detail: "All backend services will emit W3C Trace Context headers with Datadog exporter fallback."
        }
      ],
      actionItems: [
        {
          id: "ai-1",
          task: "Benchmark Redis Cluster vs Dragonfly for high-throughput cache nodes",
          assignee: "Alex Rivera",
          assigneeAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 12, 2026",
          status: "Pending",
          priority: "High",
          meetingId: "m1",
          meetingTitle: "Q3 Architecture Review",
          timestamp: "14:32"
        },
        {
          id: "ai-2",
          task: "Draft RFC for OAuth2 token rotation in microservices API gateway",
          assignee: "Sarah Chen",
          assigneeAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 14, 2026",
          status: "In Progress",
          priority: "Medium",
          meetingId: "m1",
          meetingTitle: "Q3 Architecture Review",
          timestamp: "22:10"
        },
        {
          id: "ai-3",
          task: "Update Kubernetes helm charts for staging cluster",
          assignee: "Elena Rostova",
          assigneeAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 10, 2026",
          status: "Completed",
          priority: "Low",
          meetingId: "m1",
          meetingTitle: "Q3 Architecture Review",
          timestamp: "35:45"
        }
      ]
    },
    transcript: [
      {
        id: "t1-1",
        speaker: "Gurnoor Singh",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        timestamp: "01:15",
        text: "Good morning everyone. Let's kick off our Q3 architecture review. Today's focus is on resolving our caching bottlenecks and aligning on the REST v3 API timeline before enterprise onboarding next week."
      },
      {
        id: "t1-2",
        speaker: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
        timestamp: "05:40",
        text: "Thanks Gurnoor. I've prepared the benchmark data. Our current single-node Redis cache is experiencing 88% memory utilization during peak traffic. We need a cluster setup."
      },
      {
        id: "t1-3",
        speaker: "Alex Rivera",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80",
        timestamp: "14:32",
        text: "I strongly recommend we adopt Redis Cluster with 3 primary and 3 replica nodes. I tested Dragonfly as well, but Redis Cluster provides better multi-region stability for our AWS setup. I'll complete full benchmark comparisons by Oct 12."
      },
      {
        id: "t1-4",
        speaker: "Marcus Vance",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        timestamp: "18:05",
        text: "How does this impact our customer facing latency SLA? Nexus Systems is requiring sub-100ms response times for AI search queries."
      },
      {
        id: "t1-5",
        speaker: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
        timestamp: "22:10",
        text: "With Redis Cluster caching search metadata, average response times drop to 42ms. Regarding GraphQL, we decided to postpone the GraphQL migration to Q4 so we can focus on REST API v3 rate-limiting first. I'll write the OAuth2 RFC by Oct 14."
      },
      {
        id: "t1-6",
        speaker: "Elena Rostova",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80",
        timestamp: "35:45",
        text: "On the DevOps side, we are standardizing OpenTelemetry tracing across all backend services. I'll also update our Kubernetes helm charts for staging by Thursday."
      },
      {
        id: "t1-7",
        speaker: "Gurnoor Singh",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        timestamp: "52:18",
        text: "Awesome alignment today. Let's record these decisions and review progress at Friday's standup."
      }
    ]
  },
  {
    id: "m2",
    title: "Enterprise Client Onboarding: Nexus Systems",
    date: "Oct 8, 2026",
    time: "02:00 PM - 02:45 PM",
    duration: "45 mins",
    platform: "teams",
    status: "Processed",
    hasSummary: true,
    actionItemsCount: 2,
    decisionsCount: 2,
    participants: [
      { name: "Gurnoor Singh", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "David Kim", role: "VP Enterprise Sales", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" },
      { name: "Samantha Wright", role: "CTO, Nexus Systems", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" },
      { name: "Robert Taylor", role: "Security Lead, Nexus Systems", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80" }
    ],
    metadata: {
      fileSize: "285 MB",
      sentimentScore: 96,
      sentimentText: "Exceptional / High Trust"
    },
    summary: {
      overview: "Technical onboarding kickoff for Nexus Systems (5,000 user seats). Covered Azure AD SSO integration, SOC2 security validation, dedicated SLA support, and audit log exports.",
      keyPoints: [
        "Nexus Systems agreed to complete SAML 2.0 configuration by Friday using MeetAI's Microsoft Teams integration.",
        "Confirmed enterprise SLA of 99.99% uptime with 15-minute response time for critical incidents.",
        "Discussed IP whitelisting and tenant data isolation in AWS US-East region."
      ],
      decisions: [
        {
          id: "dec-4",
          title: "Enable custom IP whitelisting and SAML SSO for Nexus tenant",
          impact: "High",
          owner: "Gurnoor Singh",
          timestamp: "12:10",
          detail: "Configured dedicated security policy rules in MeetAI enterprise admin settings."
        },
        {
          id: "dec-5",
          title: "Schedule quarterly security penetration review exchanges",
          impact: "Medium",
          owner: "David Kim",
          timestamp: "30:40",
          detail: "Mutual NDA exchange of annual third-party pentest reports."
        }
      ],
      actionItems: [
        {
          id: "ai-4",
          task: "Send SOC2 Type II report & Azure AD SAML config package to Robert",
          assignee: "David Kim",
          assigneeAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 9, 2026",
          status: "Pending",
          priority: "High",
          meetingId: "m2",
          meetingTitle: "Nexus Systems Onboarding",
          timestamp: "08:15"
        },
        {
          id: "ai-5",
          task: "Configure dedicated sandbox tenant for Nexus Systems testing team",
          assignee: "Gurnoor Singh",
          assigneeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 11, 2026",
          status: "Pending",
          priority: "High",
          meetingId: "m2",
          meetingTitle: "Nexus Systems Onboarding",
          timestamp: "24:50"
        }
      ]
    },
    transcript: [
      {
        id: "t2-1",
        speaker: "David Kim",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        timestamp: "02:00",
        text: "Welcome Samantha and Robert! We are thrilled to welcome Nexus Systems to MeetAI. Gurnoor and I are here to walk through technical onboarding."
      },
      {
        id: "t2-2",
        speaker: "Samantha Wright",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        timestamp: "08:15",
        text: "Thanks David. Our executive team is excited. Robert, our Security Lead, wants to make sure SAML SSO and SOC2 reports are finalized."
      },
      {
        id: "t2-3",
        speaker: "Robert Taylor",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80",
        timestamp: "12:10",
        text: "Yes, once we receive the SOC2 compliance package and Azure AD setup guide, we can whitelist the MeetAI domain across our 5,000 employee devices."
      },
      {
        id: "t2-4",
        speaker: "Gurnoor Singh",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        timestamp: "24:50",
        text: "I'll set up a dedicated sandbox tenant for Nexus Systems by Oct 11 so your team can test automated Microsoft Teams meeting transcription."
      }
    ]
  },
  {
    id: "m3",
    title: "Weekly AI & RAG Engine Optimization Sync",
    date: "Oct 7, 2026",
    time: "11:00 AM - 11:50 AM",
    duration: "50 mins",
    platform: "zoom",
    status: "Processed",
    hasSummary: true,
    actionItemsCount: 2,
    decisionsCount: 2,
    participants: [
      { name: "Gurnoor Singh", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Dr. Priya Patel", role: "AI Research Lead", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80" },
      { name: "Alex Rivera", role: "Principal Engineer", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" },
      { name: "Maya Lin", role: "ML Ops Engineer", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80" }
    ],
    metadata: {
      fileSize: "310 MB",
      sentimentScore: 89,
      sentimentText: "Productive / Data Driven"
    },
    summary: {
      overview: "Deep dive into retrieval accuracy for MeetAI's global AI search engine. Benchmarked hybrid vector search (dense embeddings + BM25 keyword reranking) against native semantic search.",
      keyPoints: [
        "Achieved 94.2% top-3 retrieval precision for complex multi-meeting queries.",
        "Demonstrated sub-200ms answer synthesis with cited transcript line numbers.",
        "Agreed to migrate embedding pipeline to OpenAI text-embedding-3-large."
      ],
      decisions: [
        {
          id: "dec-6",
          title: "Upgrade vector index to hybrid search (dense embeddings + BM25 keyword reranking)",
          impact: "High",
          owner: "Dr. Priya Patel",
          timestamp: "10:15",
          detail: "Combines semantic understanding with exact acronym/code word keyword matching."
        },
        {
          id: "dec-7",
          title: "Enforce strict tenant ID metadata filters on vector collection level",
          impact: "High",
          owner: "Alex Rivera",
          timestamp: "28:30",
          detail: "Ensures multi-tenant data isolation at the vector database index partition."
        }
      ],
      actionItems: [
        {
          id: "ai-6",
          task: "Implement Cohere Rerank v3 in RAG search pipeline",
          assignee: "Dr. Priya Patel",
          assigneeAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 15, 2026",
          status: "In Progress",
          priority: "High",
          meetingId: "m3",
          meetingTitle: "AI & RAG Sync",
          timestamp: "10:15"
        },
        {
          id: "ai-7",
          task: "Measure latency impact of chunk size reduction from 512 to 256 tokens",
          assignee: "Maya Lin",
          assigneeAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 13, 2026",
          status: "Pending",
          priority: "Medium",
          meetingId: "m3",
          meetingTitle: "AI & RAG Sync",
          timestamp: "28:30"
        }
      ]
    },
    transcript: [
      {
        id: "t3-1",
        speaker: "Dr. Priya Patel",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
        timestamp: "03:10",
        text: "Our test benchmark across 1,000 synthetic meeting queries showed that hybrid search with BM25 reranking increased precision by 18% compared to vector search alone."
      },
      {
        id: "t3-2",
        speaker: "Gurnoor Singh",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        timestamp: "10:15",
        text: "That's a huge win. Let's move forward with Cohere Rerank v3 integration. We want users to click search results and immediately land on the exact timestamp."
      }
    ]
  },
  {
    id: "m4",
    title: "Design System & UX Alignment (v2.4)",
    date: "Oct 6, 2026",
    time: "04:00 PM - 04:45 PM",
    duration: "45 mins",
    platform: "google-meet",
    status: "Processed",
    hasSummary: true,
    actionItemsCount: 1,
    decisionsCount: 2,
    participants: [
      { name: "Gurnoor Singh", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Chloe Bennett", role: "Lead UI/UX Designer", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Marcus Vance", role: "Product Director", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" }
    ],
    metadata: {
      fileSize: "190 MB",
      sentimentScore: 91,
      sentimentText: "Creative / Aligned"
    },
    summary: {
      overview: "Reviewed updated enterprise UI components, color hierarchy, and mobile drawer navigation patterns for MeetAI v2.4 launch.",
      keyPoints: [
        "Approved clean enterprise aesthetic with subtle slate borders and rich dark mode contrast.",
        "Finalized standard platform badge styles for Google Meet, Microsoft Teams, and Zoom."
      ],
      decisions: [
        {
          id: "dec-8",
          title: "Standardize platform badge colors across web and mobile web app",
          impact: "Low",
          owner: "Chloe Bennett",
          timestamp: "15:20",
          detail: "Emerald for Meet, Indigo for Teams, Sky Blue for Zoom."
        },
        {
          id: "dec-9",
          title: "Adopt responsive overlay drawer for mobile sidebar navigation",
          impact: "Medium",
          owner: "Chloe Bennett",
          timestamp: "32:00",
          detail: "Ensures seamless touch targets on small screens without cluttering header."
        }
      ],
      actionItems: [
        {
          id: "ai-8",
          task: "Publish updated Figma UI kit and token library for MeetAI Web",
          assignee: "Chloe Bennett",
          assigneeAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 10, 2026",
          status: "Completed",
          priority: "Low",
          meetingId: "m4",
          meetingTitle: "Design System & UX Alignment",
          timestamp: "15:20"
        }
      ]
    },
    transcript: [
      {
        id: "t4-1",
        speaker: "Chloe Bennett",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
        timestamp: "05:00",
        text: "Here are the revised design tokens. We've eliminated unnecessary gradients and focused on high typography contrast."
      }
    ]
  },
  {
    id: "m5",
    title: "Q4 Customer Advisory Board Roundtable",
    date: "Oct 5, 2026",
    time: "09:00 AM - 10:30 AM",
    duration: "90 mins",
    platform: "zoom",
    status: "Processed",
    hasSummary: true,
    actionItemsCount: 1,
    decisionsCount: 1,
    participants: [
      { name: "Gurnoor Singh", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Marcus Vance", role: "Product Director", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" },
      { name: "+6 Customer Leaders", avatar: null }
    ],
    metadata: {
      fileSize: "520 MB",
      sentimentScore: 94,
      sentimentText: "Very Enthusiastic"
    },
    summary: {
      overview: "Feedback session with key enterprise customers. High praise for AI summary speed and automated action item extraction. Requested custom Slack notification triggers and multi-language support.",
      keyPoints: [
        "Customers loved the instant action item extraction.",
        "Top feature request: Automated Slack channel summaries after meeting conclusion."
      ],
      decisions: [
        {
          id: "dec-10",
          title: "Prioritize Slack channel auto-posting in Q4 roadmap",
          impact: "High",
          owner: "Marcus Vance",
          timestamp: "45:10",
          detail: "Will allow teams to receive meeting summaries in #proj-updates automatically."
        }
      ],
      actionItems: [
        {
          id: "ai-9",
          task: "Synthesize CAB feedback into product feature priority matrix",
          assignee: "Marcus Vance",
          assigneeAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 16, 2026",
          status: "In Progress",
          priority: "Medium",
          meetingId: "m5",
          meetingTitle: "CAB Roundtable",
          timestamp: "45:10"
        }
      ]
    },
    transcript: [
      {
        id: "t5-1",
        speaker: "Marcus Vance",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        timestamp: "10:00",
        text: "Thank you all for joining today's advisory board. We want your candid input on what features add the most value to your daily workflows."
      }
    ]
  },
  {
    id: "m6",
    title: "Sprint 42 Retrospective & Backlog Refinement",
    date: "Oct 2, 2026",
    time: "03:00 PM - 04:00 PM",
    duration: "60 mins",
    platform: "teams",
    status: "Processed",
    hasSummary: true,
    actionItemsCount: 1,
    decisionsCount: 1,
    participants: [
      { name: "Gurnoor Singh", role: "Head of Product", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" },
      { name: "Sarah Chen", role: "Lead Architect", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" },
      { name: "Alex Rivera", role: "Principal Engineer", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80" },
      { name: "Elena Rostova", role: "DevOps Lead", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80" }
    ],
    metadata: {
      fileSize: "360 MB",
      sentimentScore: 88,
      sentimentText: "Constructive"
    },
    summary: {
      overview: "Sprint 42 completed 94% of planned story points. Team resolved critical WebSocket reconnection bug and improved transcript audio processing throughput by 30%.",
      keyPoints: [
        "Completed 34 out of 36 story points.",
        "Resolved intermittent WebSocket disconnect issue for long meetings."
      ],
      decisions: [
        {
          id: "dec-11",
          title: "Allocate 15% of sprint velocity to technical debt and test suite speedup",
          impact: "Medium",
          owner: "Elena Rostova",
          timestamp: "20:00",
          detail: "Will reduce test run times from 12 minutes to under 4 minutes."
        }
      ],
      actionItems: [
        {
          id: "ai-10",
          task: "Clear flaky end-to-end Cypress test suite failures in CI pipeline",
          assignee: "Elena Rostova",
          assigneeAvatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80",
          dueDate: "Oct 8, 2026",
          status: "Completed",
          priority: "Medium",
          meetingId: "m6",
          meetingTitle: "Sprint 42 Retro",
          timestamp: "20:00"
        }
      ]
    },
    transcript: [
      {
        id: "t6-1",
        speaker: "Elena Rostova",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80",
        timestamp: "05:00",
        text: "Sprint 42 went very well overall. We shipped the WebSocket patch and increased transcript parsing speed."
      }
    ]
  }
];

export const MOCK_INTEGRATIONS = [
  {
    id: "google-meet",
    name: "Google Meet",
    platformKey: "google-meet",
    description: "Import meetings, transcripts and meeting data from Google Meet seamlessly.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg",
    connected: true,
    connectedAccount: "gurnoor@acme-corp.com",
    lastSync: "10 mins ago",
    autoSync: true,
    importRecordings: true,
    importTranscripts: true,
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    platformKey: "teams",
    description: "Connect your Microsoft Teams meetings, recordings, and organization calendar.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
    connected: true,
    connectedAccount: "gurnoor@acme-corp.onmicrosoft.com",
    lastSync: "1 hour ago",
    autoSync: true,
    importRecordings: true,
    importTranscripts: true,
  },
  {
    id: "zoom",
    name: "Zoom",
    platformKey: "zoom",
    description: "Connect your Zoom meetings, cloud recordings, and AI summary transcripts.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
    connected: false,
    connectedAccount: null,
    lastSync: "Never",
    autoSync: false,
    importRecordings: false,
    importTranscripts: false,
  },
  {
    id: "slack",
    name: "Slack Huddles & Channels",
    platformKey: "slack",
    description: "Broadcast meeting takeaways and sync action items directly to Slack channels.",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
    connected: true,
    connectedAccount: "Acme Corp Workspace (#proj-updates)",
    lastSync: "5 mins ago",
    autoSync: true,
    importRecordings: false,
    importTranscripts: true,
  }
];

export const PRESET_SEARCH_QUERIES = [
  "What did we decide about Redis?",
  "Who owns the authentication task?",
  "What were the main concerns raised during the product review?",
  "Summarize SOC2 compliance commitments for Nexus Systems",
  "What is the status of the Kubernetes helm chart update?"
];

export const MOCK_SEARCH_ANSWERS = {
  "What did we decide about Redis?": {
    answer: "During the **Q3 Product & Engineering Architecture Review** (Oct 8, 2026), the team decided to adopt **Redis Cluster with 3 primary and 3 replica nodes** for multi-region user session and API response caching. This setup guarantees zero downtime during cloud provider regional failovers and reduces search metadata latency to **42ms**.",
    sources: [
      {
        meetingId: "m1",
        meetingTitle: "Q3 Product & Engineering Architecture Review",
        platform: "google-meet",
        timestamp: "14:32",
        snippet: "Alex Rivera: 'I strongly recommend we adopt Redis Cluster with 3 primary and 3 replica nodes... Redis Cluster provides better multi-region stability for our AWS setup.'",
        confidence: "98% Match"
      },
      {
        meetingId: "m1",
        meetingTitle: "Q3 Product & Engineering Architecture Review",
        platform: "google-meet",
        timestamp: "22:10",
        snippet: "Sarah Chen: 'With Redis Cluster caching search metadata, average response times drop to 42ms.'",
        confidence: "94% Match"
      }
    ]
  },
  "Who owns the authentication task?": {
    answer: "**Sarah Chen** (Lead Architect) owns the authentication and gateway task to **'Draft RFC for OAuth2 token rotation in microservices API gateway'**, which is currently **In Progress** with a due date of **October 14, 2026**.",
    sources: [
      {
        meetingId: "m1",
        meetingTitle: "Q3 Product & Engineering Architecture Review",
        platform: "google-meet",
        timestamp: "22:10",
        snippet: "Sarah Chen: 'I'll write the OAuth2 RFC by Oct 14.'",
        confidence: "96% Match"
      }
    ]
  },
  "What were the main concerns raised during the product review?": {
    answer: "The primary concerns raised during recent reviews included:\n1. **Single-node Redis memory pressure**: Operating at 88% capacity during peak load (Q3 Architecture Review).\n2. **Enterprise Latency Requirements**: Nexus Systems requiring sub-100ms response time for AI search.\n3. **Test Suite Flakiness**: Cypress end-to-end testing pipeline taking 12 minutes in CI.",
    sources: [
      {
        meetingId: "m1",
        meetingTitle: "Q3 Product & Engineering Architecture Review",
        platform: "google-meet",
        timestamp: "05:40",
        snippet: "Sarah Chen: 'Our current single-node Redis cache is experiencing 88% memory utilization during peak traffic.'",
        confidence: "95% Match"
      },
      {
        meetingId: "m2",
        meetingTitle: "Enterprise Client Onboarding: Nexus Systems",
        platform: "teams",
        timestamp: "12:10",
        snippet: "Robert Taylor: 'We need SAML 2.0 configuration and IP whitelisting across 5,000 devices.'",
        confidence: "91% Match"
      }
    ]
  },
  "Summarize SOC2 compliance commitments for Nexus Systems": {
    answer: "For Nexus Systems, MeetAI committed to providing the complete **SOC2 Type II compliance package**, configuring Azure AD SAML 2.0 SSO, enabling IP whitelisting in tenant settings, and exchanging annual third-party security penetration reports.",
    sources: [
      {
        meetingId: "m2",
        meetingTitle: "Enterprise Client Onboarding: Nexus Systems",
        platform: "teams",
        timestamp: "08:15",
        snippet: "David Kim & Robert Taylor discussing SOC2 package delivery and SAML SSO integration.",
        confidence: "97% Match"
      }
    ]
  },
  "What is the status of the Kubernetes helm chart update?": {
    answer: "The task **'Update Kubernetes helm charts for staging cluster'** was assigned to **Elena Rostova** and is marked as **Completed** (Oct 10, 2026 target).",
    sources: [
      {
        meetingId: "m1",
        meetingTitle: "Q3 Product & Engineering Architecture Review",
        platform: "google-meet",
        timestamp: "35:45",
        snippet: "Elena Rostova: 'I'll also update our Kubernetes helm charts for staging by Thursday.'",
        confidence: "99% Match"
      }
    ]
  }
};
