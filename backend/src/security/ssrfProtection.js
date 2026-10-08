import { URL } from 'url';

const TRUSTED_DOMAINS = [
  'meet.google.com',
  'google.com',
  'googleapis.com',
  'graph.microsoft.com',
  'login.microsoftonline.com',
  'zoom.us',
  'api.zoom.us'
];

export const isUrlAllowedForFetch = (targetUrl) => {
  try {
    const parsed = new URL(targetUrl);
    const hostname = parsed.hostname.toLowerCase();

    // Block local / private IP ranges
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '0.0.0.0' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.16.') ||
      hostname === '169.254.169.254' // AWS Metadata Service
    ) {
      return false;
    }

    // Check allowlist
    return TRUSTED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch (err) {
    return false;
  }
};
