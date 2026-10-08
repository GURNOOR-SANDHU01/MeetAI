import React from 'react';
import { Card } from '../common/Card';

export const StatCard = ({ title, value, change, icon: Icon, color = 'purple', subtitle }) => {
  const pastelStyles = {
    purple: {
      bg: 'bg-[#F8F6FC]',
      border: 'border-[#E2D9F7]',
      iconBg: 'bg-[#6F56C9] text-white',
    },
    blue: {
      bg: 'bg-[#EDF5FD]',
      border: 'border-[#D0E6FC]',
      iconBg: 'bg-[#0284C7] text-white',
    },
    peach: {
      bg: 'bg-[#FFF8F0]',
      border: 'border-[#FDE68A]',
      iconBg: 'bg-[#D97706] text-white',
    },
    cyan: {
      bg: 'bg-[#E6F9FB]',
      border: 'border-[#B5F0F5]',
      iconBg: 'bg-[#0097A7] text-white',
    },
  };

  const current = pastelStyles[color] || pastelStyles.purple;

  return (
    <div className={`p-6 rounded-[24px] border ${current.bg} ${current.border} transition-all hover:-translate-y-1`}>
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#73737C]">{title}</span>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-[#202024] tracking-tight">{value}</span>
          </div>
          {change && (
            <p className="mt-1.5 text-xs font-semibold text-[#0D9488]">
              {change}
            </p>
          )}
          {subtitle && <p className="mt-1.5 text-xs text-[#73737C] font-medium">{subtitle}</p>}
        </div>

        {Icon && (
          <div className={`p-3 rounded-2xl ${current.iconBg} shadow-xs`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  );
};
