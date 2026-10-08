import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AIInsightCard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 rounded-[24px] bg-[#F8F6FC] border border-[#E2D9F7] text-[#202024] space-y-3 shadow-2xs hover:-translate-y-0.5 transition-all">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-full bg-[#6F56C9] text-white shadow-2xs">
          <Sparkles className="w-4 h-4" />
        </div>
        <span className="text-xs font-bold text-[#6F56C9] uppercase tracking-wider">
          AI Meeting Insights
        </span>
      </div>

      <h4 className="text-base font-bold text-[#202024]">
        3 action items are due this week across your meetings
      </h4>

      <p className="text-xs text-[#73737C] leading-relaxed font-medium">
        Two recent meetings discussed the authentication architecture. Rahul Sharma and Sarah Chen are assigned to PostgreSQL identity migrations.
      </p>

      <div className="pt-2">
        <button
          onClick={() => navigate('/tasks')}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-white text-[#6F56C9] border border-[#E2D9F7] hover:bg-[#6F56C9] hover:text-white transition-all shadow-2xs cursor-pointer"
        >
          <span>View Insights & Tasks</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
