import React from 'react';

export const Tabs = ({ tabs = [], activeTab, onChange, className = '' }) => {
  return (
    <div className={`flex flex-wrap gap-2 p-1.5 bg-[#F8F6FC] rounded-full border border-[#ECECF1] inline-flex ${className}`}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#6F56C9] text-white shadow-xs'
                : 'text-[#73737C] hover:text-[#202024] hover:bg-white/80'
            }`}
          >
            {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#A1A1AA]'}`} />}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span
                className={`ml-1 px-2 py-0.5 text-[10px] font-bold rounded-full ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-white text-[#73737C] border border-[#ECECF1]'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
