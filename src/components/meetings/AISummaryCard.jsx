import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  ListTodo,
  FileText,
  Clock,
  HardDrive,
  Smile,
  ShieldCheck
} from 'lucide-react';
import { Card, CardHeader, CardTitle } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { StatusBadge } from '../common/StatusBadge';
import { useApp } from '../../context/AppContext';

export const AISummaryCard = ({ meeting }) => {
  const { toggleTaskStatus, tasks } = useApp();
  const summary = meeting.summary || {};

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main 2 Columns */}
      <div className="lg:col-span-2 space-y-6">
        {/* Executive Summary Card with Lavender Accent */}
        <div className="p-6 rounded-[24px] bg-[#F8F6FC] border border-[#E2D9F7] space-y-3 shadow-2xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#E2D9F7]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-full bg-[#6F56C9] text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-[#202024] text-base">AI Executive Summary</h3>
            </div>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#E8F8F5] text-[#0D9488] border border-[#CCF0E8]">
              98% Confidence Score
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#ECECF1] text-xs sm:text-sm text-[#202024] leading-relaxed font-medium">
            {summary.overview || 'No summary available.'}
          </div>
        </div>

        {/* Key Discussion Points */}
        {summary.keyPoints && summary.keyPoints.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#6F56C9]" />
                <CardTitle>Key Discussion Points</CardTitle>
              </div>
            </CardHeader>
            <ul className="space-y-3">
              {summary.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm text-[#202024] font-medium">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F8F6FC] text-xs font-bold text-[#6F56C9] mt-0.5 border border-[#E2D9F7]">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Decisions Card */}
        {summary.decisions && summary.decisions.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0D9488]" />
                <CardTitle>Decisions Made ({summary.decisions.length})</CardTitle>
              </div>
            </CardHeader>
            <div className="space-y-3">
              {summary.decisions.map((dec) => (
                <div
                  key={dec.id}
                  className="p-4 rounded-2xl bg-[#E8F8F5]/60 border border-[#CCF0E8] text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-[#202024] text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
                      {dec.title}
                    </h5>
                    <span className="text-[10px] font-bold text-[#0D9488] bg-white px-2.5 py-0.5 rounded-full border border-[#CCF0E8]">
                      {dec.timestamp}
                    </span>
                  </div>
                  <p className="text-[#73737C] font-medium leading-relaxed">{dec.description || dec.detail}</p>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-[#73737C] font-semibold border-t border-[#CCF0E8]/60">
                    <span>Decider: <strong className="text-[#202024]">{dec.owner}</strong></span>
                    <span>Impact: <strong className="text-[#0D9488]">{dec.impact}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Action Items */}
        {summary.actionItems && summary.actionItems.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ListTodo className="w-5 h-5 text-[#6F56C9]" />
                <CardTitle>Extracted Action Items ({summary.actionItems.length})</CardTitle>
              </div>
            </CardHeader>
            <div className="space-y-3">
              {summary.actionItems.map((item) => {
                const liveTask = tasks.find((t) => t.id === item.id) || item;
                const isDone = liveTask.status === 'Completed';

                return (
                  <div
                    key={item.id}
                    onClick={() => toggleTaskStatus(item.id)}
                    className={`flex items-start justify-between p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isDone
                        ? 'bg-[#FAFAFC] border-[#ECECF1] opacity-75'
                        : 'bg-white border-[#ECECF1] hover:border-[#CBB7EC]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => toggleTaskStatus(item.id)}
                        className="mt-1 rounded-full text-[#6F56C9] focus:ring-[#6F56C9]/20 cursor-pointer"
                      />
                      <div>
                        <p
                          className={`text-xs font-bold ${
                            isDone ? 'line-through text-[#A1A1AA]' : 'text-[#202024]'
                          }`}
                        >
                          {item.task}
                        </p>
                        <div className="flex items-center gap-3 text-[11px] text-[#73737C] font-medium mt-1">
                          <span>Assignee: {item.assignee}</span>
                          <span>•</span>
                          <span>Due: {item.dueDate}</span>
                        </div>
                      </div>
                    </div>
                    <StatusBadge status={liveTask.status} />
                  </div>
                );
              })}
            </div>
          </Card>
        )}
      </div>

      {/* Sidebar Metadata */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Meeting Metadata</CardTitle>
          </CardHeader>
          <div className="space-y-3 text-xs font-medium">
            <div className="flex items-center justify-between py-1.5 border-b border-[#ECECF1]">
              <span className="text-[#73737C] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A1A1AA]" /> Duration
              </span>
              <span className="font-bold text-[#202024]">{meeting.duration}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-[#ECECF1]">
              <span className="text-[#73737C] flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-[#A1A1AA]" /> Storage Size
              </span>
              <span className="font-bold text-[#202024]">{meeting.metadata?.fileSize || '380 MB'}</span>
            </div>
            <div className="flex items-center justify-between py-1.5 border-b border-[#ECECF1]">
              <span className="text-[#73737C] flex items-center gap-2">
                <Smile className="w-4 h-4 text-[#A1A1AA]" /> Sentiment
              </span>
              <span className="font-bold text-[#0D9488] bg-[#E8F8F5] px-2.5 py-0.5 rounded-full border border-[#CCF0E8]">
                Positive / Aligned
              </span>
            </div>
            <div className="flex items-center justify-between py-1.5">
              <span className="text-[#73737C] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A1A1AA]" /> Encryption
              </span>
              <span className="font-bold text-[#202024]">SOC2 AES-256</span>
            </div>
          </div>
        </Card>

        {/* Participants */}
        <Card>
          <CardHeader>
            <CardTitle>Participants ({meeting.participants.length})</CardTitle>
          </CardHeader>
          <div className="space-y-3">
            {meeting.participants.map((p, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs">
                <Avatar src={p.avatar} name={p.name} size="sm" />
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-[#202024] truncate">{p.name}</span>
                  <span className="text-[11px] text-[#73737C] font-medium truncate">{p.role || 'Attendee'}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
