import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Video,
  Play,
  Share2,
  Download,
  Calendar,
  Clock,
  Sparkles,
  FileText,
  CheckCircle2,
  ListTodo,
  Bot,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PlatformBadge } from '../components/common/PlatformBadge';
import { AvatarGroup } from '../components/common/Avatar';
import { Button } from '../components/common/Button';
import { Tabs } from '../components/common/Tabs';
import { Modal } from '../components/common/Modal';
import { AISummaryCard } from '../components/meetings/AISummaryCard';
import { Transcript } from '../components/meetings/Transcript';
import { AskAIChat } from '../components/meetings/AskAIChat';
import { TaskTable } from '../components/tasks/TaskTable';
import { Card, CardHeader, CardTitle } from '../components/common/Card';

export const MeetingDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { meetings, tasks, showToast } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  const [isPlayingRecording, setIsPlayingRecording] = useState(false);

  // Find target meeting or fallback to first meeting
  const meeting = meetings.find((m) => m.id === id) || meetings[0];

  // Filter tasks specific to this meeting
  const meetingTasks = tasks.filter((t) => t.meetingId === meeting.id);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'transcript', label: 'Transcript', icon: Sparkles, count: meeting.transcript?.length || 0 },
    { id: 'action-items', label: 'Action Items', icon: ListTodo, count: meetingTasks.length },
    { id: 'decisions', label: 'Decisions', icon: CheckCircle2, count: meeting.summary?.decisions?.length || 0 },
    { id: 'ask-ai', label: 'Ask AI', icon: Bot },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Navigation & Header */}
      <div>
        <button
          onClick={() => navigate('/meetings')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-3 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Meetings</span>
        </button>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <PlatformBadge platform={meeting.platform} />
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {meeting.date} ({meeting.time})
              </span>
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
              {meeting.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {meeting.duration}
              </span>
              <span>•</span>
              <span>{meeting.participants.length} Participants</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <AvatarGroup users={meeting.participants} max={4} size="md" />

            <div className="h-8 w-px bg-slate-200 mx-1 hidden sm:block" />

            <Button
              variant="secondary"
              size="sm"
              icon={Play}
              onClick={() => setIsPlayingRecording(true)}
            >
              Play Recording
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={Share2}
              onClick={() => showToast('Meeting link copied to clipboard')}
            >
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Main Workspace Navigation Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* Tab Contents */}
      <div className="pt-2">
        {activeTab === 'overview' && <AISummaryCard meeting={meeting} />}

        {activeTab === 'transcript' && (
          <Transcript transcript={meeting.transcript || []} participants={meeting.participants} />
        )}

        {activeTab === 'action-items' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">
                Action Items Extracted from "{meeting.title}"
              </h3>
            </div>
            <TaskTable tasks={meetingTasks} />
          </div>
        )}

        {activeTab === 'decisions' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">
                Decisions Recorded ({meeting.summary?.decisions?.length || 0})
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {meeting.summary?.decisions?.map((dec) => (
                <Card key={dec.id} className="bg-white border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Impact: {dec.impact}
                    </span>
                    <span className="text-xs text-slate-400 font-mono font-medium">
                      At {dec.timestamp}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-2">{dec.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">{dec.detail}</p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Decider / Owner:</span>
                    <strong className="text-slate-800">{dec.owner}</strong>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'ask-ai' && <AskAIChat meeting={meeting} />}
      </div>

      {/* Video Player Modal */}
      <Modal
        isOpen={isPlayingRecording}
        onClose={() => setIsPlayingRecording(false)}
        title={`Meeting Recording: ${meeting.title}`}
        maxWidth="max-w-3xl"
      >
        <div className="space-y-4">
          <div className="relative aspect-video bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center border border-slate-800 shadow-md">
            <div className="text-center p-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-lg">
                <Play className="w-7 h-7 fill-current translate-x-0.5" />
              </div>
              <p className="text-sm font-semibold text-white">{meeting.title}</p>
              <p className="text-xs text-slate-400">
                Recorded on {meeting.date} ({meeting.duration}) • SOC2 Encrypted Stream
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>Video Resolution: 1080p HD (30fps)</span>
            <Button
              variant="outline"
              size="sm"
              icon={Download}
              onClick={() => showToast('Downloading MP4 recording file...')}
            >
              Download MP4
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
