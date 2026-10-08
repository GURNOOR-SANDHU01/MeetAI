import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, CheckCircle2, ListTodo, Sparkles } from 'lucide-react';
import { Card } from '../common/Card';
import { PlatformBadge } from '../common/PlatformBadge';
import { StatusBadge } from '../common/StatusBadge';
import { AvatarGroup } from '../common/Avatar';
import { Button } from '../common/Button';

export const UpcomingMeetingCard = ({ meeting }) => {
  return (
    <Card hover className="flex flex-col justify-between h-full border-slate-200">
      <div>
        <div className="flex items-center justify-between mb-2">
          <PlatformBadge platform={meeting.platform} />
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {meeting.status}
          </span>
        </div>
        <h4 className="font-semibold text-slate-900 text-sm mb-1.5 line-clamp-1">{meeting.title}</h4>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{meeting.time}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <AvatarGroup users={meeting.participants} max={3} size="xs" />
        <Button
          variant="secondary"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            window.open('https://meet.google.com', '_blank');
          }}
        >
          Join Meeting
        </Button>
      </div>
    </Card>
  );
};

export const RecentMeetingRow = ({ meeting }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/meetings/${meeting.id}`)}
      className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl transition-all cursor-pointer gap-3 shadow-2xs"
    >
      <div className="flex items-start sm:items-center gap-3.5 min-w-0">
        <PlatformBadge platform={meeting.platform} showName={false} className="shrink-0 mt-0.5 sm:mt-0" />
        <div className="min-w-0">
          <h4 className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors truncate">
            {meeting.title}
          </h4>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-0.5">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              {meeting.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {meeting.duration}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
        <div className="flex items-center gap-2">
          {meeting.hasSummary && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              Summary Ready
            </span>
          )}
          {meeting.actionItemsCount > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
              <ListTodo className="w-3 h-3 text-slate-500" />
              {meeting.actionItemsCount} Action Items
            </span>
          )}
        </div>

        <AvatarGroup users={meeting.participants} max={3} size="xs" />

        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all hidden sm:block" />
      </div>
    </div>
  );
};
