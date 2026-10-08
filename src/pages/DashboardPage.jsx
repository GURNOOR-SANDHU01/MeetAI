import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Video,
  ListTodo,
  Clock,
  HelpCircle,
  Plus,
  ArrowRight,
  Sparkles,
  Calendar,
  CheckSquare
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StatCard } from '../components/dashboard/StatCard';
import { UpcomingMeetingCard, RecentMeetingRow } from '../components/dashboard/MeetingCard';
import { AIInsightCard } from '../components/dashboard/AIInsightCard';
import { Card, CardHeader, CardTitle } from '../components/common/Card';
import { Button } from '../components/common/Button';

export const DashboardPage = () => {
  const { user, meetings, upcomingMeetings, tasks, toggleTaskStatus } = useApp();
  const navigate = useNavigate();

  const activeTasks = tasks.slice(0, 4);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-[#202024] tracking-tight">
            Good morning, {user.name.split(' ')[0]}
          </h1>
          <p className="text-sm text-[#73737C] mt-1 font-medium">
            Here's what is happening across your meetings.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" icon={Sparkles} onClick={() => navigate('/ai-search')}>
            Ask AI
          </Button>
          <Button variant="primary" size="sm" icon={Video} onClick={() => navigate('/meetings')}>
            View All Meetings
          </Button>
        </div>
      </div>

      {/* Top Stat Cards: Lavender, Blue, Peach, Cyan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Meetings This Week"
          value="12"
          change="+18% vs last week"
          icon={Video}
          color="purple"
        />
        <StatCard
          title="Action Items"
          value="8"
          subtitle="3 due this week"
          icon={ListTodo}
          color="blue"
        />
        <StatCard
          title="Meeting Hours"
          value="18.5h"
          change="-2.4 hrs vs last week"
          icon={Clock}
          color="peach"
        />
        <StatCard
          title="Unresolved"
          value="3"
          subtitle="Requires owner sign-off"
          icon={HelpCircle}
          color="cyan"
        />
      </div>

      {/* Upcoming Meetings Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#202024] flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#6F56C9]" />
            Upcoming Meetings
          </h3>
          <span className="text-xs text-[#73737C] font-semibold">Today's Schedule</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingMeetings.map((up) => (
            <UpcomingMeetingCard key={up.id} meeting={up} />
          ))}
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recent Meetings */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#202024] flex items-center gap-2">
              <Video className="w-5 h-5 text-[#73737C]" />
              Recent Meetings
            </h3>
            <button
              onClick={() => navigate('/meetings')}
              className="text-xs font-bold text-[#6F56C9] hover:underline flex items-center gap-1"
            >
              <span>View all meetings ({meetings.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {meetings.slice(0, 4).map((meeting) => (
              <RecentMeetingRow key={meeting.id} meeting={meeting} />
            ))}
          </div>
        </div>

        {/* Right Column: AI Insights & My Action Items */}
        <div className="space-y-6">
          <AIInsightCard />

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-[#6F56C9]" />
                <CardTitle>My Action Items</CardTitle>
              </div>
              <button
                onClick={() => navigate('/tasks')}
                className="text-xs font-bold text-[#6F56C9] hover:underline"
              >
                View all
              </button>
            </CardHeader>

            <div className="space-y-3">
              {activeTasks.map((t) => {
                const isDone = t.status === 'Completed';
                return (
                  <div
                    key={t.id}
                    onClick={() => toggleTaskStatus(t.id)}
                    className="p-3.5 rounded-2xl border border-[#ECECF1] hover:border-[#CBB7EC] bg-[#FAFAFC] hover:bg-[#F8F6FC] transition-all cursor-pointer text-xs"
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => toggleTaskStatus(t.id)}
                        className="mt-0.5 rounded-full text-[#6F56C9] focus:ring-[#6F56C9]/20 cursor-pointer"
                      />
                      <div className="min-w-0 flex-1">
                        <p className={`font-bold ${isDone ? 'line-through text-[#A1A1AA]' : 'text-[#202024]'}`}>
                          {t.task}
                        </p>
                        <div className="flex items-center justify-between text-[11px] text-[#73737C] mt-1.5 font-medium">
                          <span className="truncate max-w-[140px]">
                            {t.meetingTitle}
                          </span>
                          <span className="shrink-0 text-[#A1A1AA]">{t.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
