import React from 'react';

export const StatusBadge = ({ status, className = '' }) => {
  let style = 'bg-[#F8F6FC] text-[#73737C] border-[#ECECF1]';
  let dotColor = 'bg-[#A1A1AA]';

  const lower = (status || '').toLowerCase();

  if (lower === 'processed' || lower === 'completed') {
    style = 'bg-[#E8F8F5] text-[#0D9488] border-[#CCF0E8]';
    dotColor = 'bg-[#0D9488]';
  } else if (lower === 'in progress' || lower === 'processing') {
    style = 'bg-[#F0EBFA] text-[#6F56C9] border-[#E2D9F7]';
    dotColor = 'bg-[#6F56C9] animate-pulse';
  } else if (lower === 'pending' || lower === 'scheduled') {
    style = 'bg-[#FFF8F0] text-[#D97706] border-[#FDE68A]';
    dotColor = 'bg-[#D97706]';
  } else if (lower === 'high' || lower === 'urgent') {
    style = 'bg-[#FFE4E6] text-[#E11D48] border-[#FECDD3]';
    dotColor = 'bg-[#E11D48]';
  } else if (lower === 'medium') {
    style = 'bg-[#F0EBFA] text-[#6F56C9] border-[#E2D9F7]';
    dotColor = 'bg-[#6F56C9]';
  } else if (lower === 'low') {
    style = 'bg-[#FAFAFC] text-[#73737C] border-[#ECECF1]';
    dotColor = 'bg-[#A1A1AA]';
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${style} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span>{status}</span>
    </span>
  );
};
