import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { PlatformBadge } from '../common/PlatformBadge';

export const SourceReferenceCard = ({ source }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/meetings/${source.meetingId}`)}
      className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-xs transition-all cursor-pointer group text-xs"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <PlatformBadge platform={source.platform} showName={false} />
          <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {source.meetingTitle}
          </span>
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
          At {source.timestamp}
        </span>
      </div>

      <p className="text-slate-600 italic text-[11px] leading-relaxed mb-2 bg-slate-50 p-2 rounded border border-slate-100">
        "{source.snippet}"
      </p>

      <div className="flex items-center justify-between text-[10px] text-slate-400 font-medium">
        <span className="text-emerald-700 font-semibold">{source.confidence || '96% Match'}</span>
        <span className="group-hover:text-blue-600 flex items-center gap-1 font-semibold transition-colors">
          Open Meeting Workspace <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
