import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Calendar, Clock, ListTodo, ChevronRight } from 'lucide-react';
import { PlatformBadge } from '../common/PlatformBadge';
import { AvatarGroup } from '../common/Avatar';
import { StatusBadge } from '../common/StatusBadge';

export const MeetingTable = ({ meetings = [] }) => {
  const navigate = useNavigate();

  if (meetings.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-200 text-xs">
        No meetings found matching the selected filters.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden">
      {/* Desktop Table View */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <th className="py-3 px-4">Meeting Title</th>
              <th className="py-3 px-4">Platform</th>
              <th className="py-3 px-4">Date & Time</th>
              <th className="py-3 px-4">Duration</th>
              <th className="py-3 px-4">Participants</th>
              <th className="py-3 px-4">AI Summary</th>
              <th className="py-3 px-4 text-center">Action Items</th>
              <th className="py-3 px-4 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {meetings.map((meeting) => (
              <tr
                key={meeting.id}
                onClick={() => navigate(`/meetings/${meeting.id}`)}
                className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
              >
                <td className="py-3.5 px-4 font-semibold text-slate-900 group-hover:text-blue-600">
                  <div className="line-clamp-1 max-w-xs">{meeting.title}</div>
                  {meeting.summary?.overview && (
                    <p className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">
                      {meeting.summary.overview}
                    </p>
                  )}
                </td>
                <td className="py-3.5 px-4">
                  <PlatformBadge platform={meeting.platform} />
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap">
                  <div className="font-medium text-slate-800">{meeting.date}</div>
                  <div className="text-[11px] text-slate-400">{meeting.time}</div>
                </td>
                <td className="py-3.5 px-4 whitespace-nowrap text-slate-600 font-medium">
                  {meeting.duration}
                </td>
                <td className="py-3.5 px-4">
                  <AvatarGroup users={meeting.participants} max={3} size="xs" />
                </td>
                <td className="py-3.5 px-4">
                  {meeting.hasSummary ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      Generated
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-400">Processing...</span>
                  )}
                </td>
                <td className="py-3.5 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    {meeting.actionItemsCount}
                  </span>
                </td>
                <td className="py-3.5 px-4 text-right">
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all inline" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
