export const PLATFORMS = {
  "google-meet": {
    id: "google-meet",
    name: "Google Meet",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-100 text-emerald-700",
    brandColor: "text-emerald-600",
  },
  "teams": {
    id: "teams",
    name: "Microsoft Teams",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    iconBg: "bg-indigo-100 text-indigo-700",
    brandColor: "text-indigo-600",
  },
  "zoom": {
    id: "zoom",
    name: "Zoom",
    badgeBg: "bg-sky-50 text-sky-700 border-sky-200",
    iconBg: "bg-sky-100 text-sky-700",
    brandColor: "text-sky-600",
  },
};

export const MOCK_INTEGRATIONS = [
  {
    id: "google-meet",
    name: "Google Meet",
    platformKey: "google-meet",
    description: "Import Google Meet meetings, transcripts and meeting data.",
    connected: true,
    connectedAccount: "gurnoor@acme-corp.com",
    lastSync: "10 mins ago",
    autoSync: true,
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    platformKey: "teams",
    description: "Bring Microsoft Teams meetings into your MeetAI workspace.",
    connected: true,
    connectedAccount: "gurnoor@acme-corp.onmicrosoft.com",
    lastSync: "1 hour ago",
    autoSync: true,
  },
  {
    id: "zoom",
    name: "Zoom",
    platformKey: "zoom",
    description: "Import Zoom meetings, recordings and transcripts.",
    connected: false,
    connectedAccount: null,
    lastSync: "Never",
    autoSync: false,
  }
];
