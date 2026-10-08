import React from 'react';
import { Video, Users, Monitor } from 'lucide-react';

export const PlatformBadge = ({ platform, showName = true, className = '' }) => {
  const configs = {
    'google-meet': {
      name: 'Google Meet',
      badgeBg: 'bg-[#E8F8F5] text-[#0D9488] border-[#CCF0E8]',
      icon: Video,
    },
    'teams': {
      name: 'Microsoft Teams',
      badgeBg: 'bg-[#F0EBFA] text-[#6F56C9] border-[#E2D9F7]',
      icon: Users,
    },
    'zoom': {
      name: 'Zoom',
      badgeBg: 'bg-[#EDF5FD] text-[#0284C7] border-[#D0E6FC]',
      icon: Monitor,
    }
  };

  const config = configs[platform] || {
    name: platform,
    badgeBg: 'bg-[#F8F6FC] text-[#6F56C9] border-[#E2D9F7]',
    icon: Video,
  };

  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${config.badgeBg} ${className}`}
    >
      <Icon className="w-3.5 h-3.5 shrink-0" />
      {showName && <span>{config.name}</span>}
    </span>
  );
};
