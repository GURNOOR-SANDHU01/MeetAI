import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, ListTodo, Sparkles, ChevronRight } from 'lucide-react';
import { Card } from '../common/Card';
import { PlatformBadge } from '../common/PlatformBadge';
import { AvatarGroup } from '../common/Avatar';

export const MeetingGrid = ({ meetings = [] }) => {
  const navigate = useNavigate();

  if (meetings.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200 text-xs">
        No meetings found matching the selected filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {meetings.map((meeting) => (
        <Card
          key={meeting.id}
          hover
          onClick={() => navigate(`/meetings/${meeting.id}`)}
          className="flex flex-col justify-between h-full border-slate-200"
        >
          <div>
            <div className="flex items-center justify-between mb-2">
              <PlatformBadge platform={meeting.platform} />
              <span className="text-[11px] font-semibold text-slate-500">{meeting.date}</span>
            </div>
            <h4 className="font-semibold text-slate-900 text-sm mb-1 line-clamp-1">{meeting.title}</h4>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{meeting.duration}</span>
              <span>•</span>
              <span>{meeting.time}</span>
            </div>
            {meeting.summary?.overview && (
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                {meeting.summary.overview}
              </p>
            )}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <AvatarGroup users={meeting.participants} max={3} size="xs" />
            <div className="flex items-center gap-2">
              {meeting.hasSummary && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  AI Summary
                </span>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
