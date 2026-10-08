import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Video,
  Search,
  ListTodo,
  FileText,
  ShieldCheck,
  Bot,
  Zap,
  Users,
  Play,
  MessageSquare,
  Check
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { PlatformBadge } from '../components/common/PlatformBadge';
import { Card } from '../components/common/Card';

export const LandingPage = () => {
  const navigate = useNavigate();

  const howItWorks = [
    {
      step: "01",
      title: "Connect your meetings",
      desc: "One-click OAuth for Google Meet, Microsoft Teams, and Zoom. Zero bot setup required.",
      icon: Video
    },
    {
      step: "02",
      title: "Meet normally",
      desc: "Conduct calls as usual. MeetAI securely captures encrypted audio, video, and caption data.",
      icon: Users
    },
    {
      step: "03",
      title: "MeetAI processes conversation",
      desc: "Our neural RAG engine cleans transcripts, extracts key decisions, and assigns owner action items.",
      icon: Bot
    },
    {
      step: "04",
      title: "Search, summarize & act",
      desc: "Query across months of meeting history with instant cited answers and task status tracking.",
      icon: Search
    }
  ];

  const features = [
    {
      title: "AI Summaries",
      desc: "Instant executive summaries with key discussion points and sentiment breakdown within 60 seconds.",
      icon: Sparkles,
      accentBg: "bg-[#F8F6FC] text-[#6F56C9]"
    },
    {
      title: "Meeting Search (RAG)",
      desc: "Ask natural language questions like 'What did we decide about Redis?' and get grounded timestamped answers.",
      icon: Search,
      accentBg: "bg-[#EDF5FD] text-[#0284C7]"
    },
    {
      title: "Action Items",
      desc: "Automated task detection with assignee tagging, due dates, and single-click completion tracking.",
      icon: ListTodo,
      accentBg: "bg-[#FFF8F0] text-[#D97706]"
    },
    {
      title: "Decisions Registry",
      desc: "Structured registry of key architecture and business decisions with decider attribution.",
      icon: CheckCircle2,
      accentBg: "bg-[#E8F8F5] text-[#0D9488]"
    },
    {
      title: "Transcript Intelligence",
      desc: "Speaker-segmented, searchable transcripts with clickable audio playback jumps.",
      icon: FileText,
      accentBg: "bg-[#F8F6FC] text-[#6F56C9]"
    },
    {
      title: "Cross-Meeting Knowledge",
      desc: "Unified meeting intelligence repository across Google Meet, Microsoft Teams, and Zoom.",
      icon: ShieldCheck,
      accentBg: "bg-[#EDF5FD] text-[#0284C7]"
    }
  ];

  return (
    <div className="space-y-24 py-12 md:py-20 bg-organic-lines">
      {/* Two-Column Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text & CTAs (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F6FC] border border-[#E2D9F7] text-[#6F56C9] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#6F56C9]" />
            <span>AI MEETING INTELLIGENCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#202024] tracking-tight leading-[1.1]">
            Meetings, without <br className="hidden sm:inline" />
            <span className="text-[#6F56C9]">the busywork.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#73737C] max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Connect Google Meet, Microsoft Teams and Zoom. Turn conversations into searchable knowledge, decisions and action items.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => navigate('/signup')}
              className="w-full sm:w-auto font-bold px-7 py-3.5 text-sm"
            >
              Get started free
            </Button>
            <Button
              variant="secondary"
              size="lg"
              icon={Play}
              onClick={() => navigate('/dashboard')}
              className="w-full sm:w-auto font-bold px-7 py-3.5 text-sm"
            >
              View live demo
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-[#73737C] font-semibold pt-2">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0D9488]" /> No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0D9488]" /> SOC2 Type II Certified
            </span>
          </div>
        </div>

        {/* Right Column Abstract Meeting Network Visual Illustration (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          {/* Subtle Organic Background Glow Shapes */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#CBB7EC]/30 via-[#AFD4EE]/30 to-[#F5D6B7]/30 rounded-[40px] filter blur-2xl opacity-60" />

          {/* Abstract Network Cards Container */}
          <div className="relative w-full max-w-md p-6 bg-white rounded-[32px] border border-[#ECECF1] shadow-lg space-y-4">
            {/* Top Card: Live Meeting Node */}
            <div className="p-4 rounded-2xl bg-[#F8F6FC] border border-[#E2D9F7] flex items-center justify-between animate-float shadow-xs">
              <div className="flex items-center gap-3">
                <PlatformBadge platform="google-meet" showName={false} />
                <div>
                  <h4 className="font-bold text-[#202024] text-xs">Product Architecture Review</h4>
                  <span className="text-[10px] font-semibold text-[#6F56C9]">10:30 AM • 4 participants</span>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#E8F8F5] text-[#0D9488] border border-[#CCF0E8]">
                AI Processing
              </span>
            </div>

            {/* Connecting Organic Line SVG */}
            <svg className="w-full h-8 text-[#CBB7EC]/60 overflow-visible" viewBox="0 0 300 30" fill="none">
              <path d="M 50 0 C 50 15, 250 15, 250 30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Middle Row: Floating AI Answer & Decision Pills */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#EDF5FD] border border-[#D0E6FC] space-y-1 animate-float-slow">
                <span className="text-[10px] font-bold text-[#0284C7] uppercase tracking-wider block">Decision Made</span>
                <p className="text-[11px] font-bold text-[#202024]">Use Redis for caching</p>
                <span className="text-[10px] text-[#73737C]">Owner: Sarah Chen</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFF8F0] border border-[#FDE68A] space-y-1 animate-float">
                <span className="text-[10px] font-bold text-[#D97706] uppercase tracking-wider block">Action Item</span>
                <p className="text-[11px] font-bold text-[#202024]">Draft auth RFC</p>
                <span className="text-[10px] text-[#73737C]">Due Oct 14</span>
              </div>
            </div>

            {/* Bottom Card: RAG Query Bar Pill */}
            <div className="p-3 rounded-full bg-white border border-[#6F56C9]/30 shadow-xs flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 pl-2 text-[#73737C]">
                <Sparkles className="w-4 h-4 text-[#6F56C9]" />
                <span className="font-medium text-[11px] text-[#202024]">"What did we decide about Redis?"</span>
              </div>
              <span className="px-3 py-1 bg-[#6F56C9] text-white font-bold text-[10px] rounded-full">
                Answered
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section id="platforms" className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold text-[#73737C] uppercase tracking-wider">
            SUPPORTED MEETING PLATFORMS
          </span>
          <p className="text-xl font-extrabold text-[#202024]">Connects seamlessly with your existing video stack</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6 space-y-3 hover:border-[#CCF0E8] transition-all">
            <PlatformBadge platform="google-meet" className="mx-auto" />
            <h4 className="font-bold text-[#202024] text-sm">Google Meet</h4>
            <p className="text-xs text-[#73737C] font-medium leading-relaxed">
              Auto-sync Google Calendar events, recordings, and automated transcripts.
            </p>
          </Card>
          <Card className="text-center p-6 space-y-3 hover:border-[#E2D9F7] transition-all">
            <PlatformBadge platform="teams" className="mx-auto" />
            <h4 className="font-bold text-[#202024] text-sm">Microsoft Teams</h4>
            <p className="text-xs text-[#73737C] font-medium leading-relaxed">
              Import organization Teams calls and Azure AD authenticated meeting notes.
            </p>
          </Card>
          <Card className="text-center p-6 space-y-3 hover:border-[#D0E6FC] transition-all">
            <PlatformBadge platform="zoom" className="mx-auto" />
            <h4 className="font-bold text-[#202024] text-sm">Zoom</h4>
            <p className="text-xs text-[#73737C] font-medium leading-relaxed">
              Import Zoom cloud recordings, chat logs, and speaker-segmented transcripts.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-bold text-[#6F56C9] uppercase tracking-wider bg-[#F8F6FC] px-3 py-1 rounded-full border border-[#E2D9F7]">
            4-STEP WORKFLOW
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#202024]">How MeetAI works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {howItWorks.map((hw, idx) => {
            const Icon = hw.icon;
            return (
              <div key={idx} className="p-6 bg-white rounded-[24px] border border-[#ECECF1] shadow-2xs space-y-3 hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#6F56C9] bg-[#F8F6FC] px-2.5 py-1 rounded-full border border-[#E2D9F7]">
                    {hw.step}
                  </span>
                  <Icon className="w-5 h-5 text-[#73737C]" />
                </div>
                <h4 className="font-bold text-[#202024] text-sm">{hw.title}</h4>
                <p className="text-xs text-[#73737C] leading-relaxed font-medium">{hw.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-5xl mx-auto px-4">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#202024]">
            Built for modern engineering & product leaders
          </h2>
          <p className="text-xs text-[#73737C] font-medium max-w-md mx-auto">
            Stop losing critical context in long video calls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div key={idx} className="p-6 bg-white rounded-[24px] border border-[#ECECF1] shadow-2xs space-y-3 hover:-translate-y-1 transition-all">
                <div className={`w-10 h-10 rounded-2xl ${f.accentBg} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#202024] text-sm">{f.title}</h4>
                <p className="text-xs text-[#73737C] leading-relaxed font-medium">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-[#6F56C9] text-white rounded-[32px] p-8 md:p-12 text-center space-y-5 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold border border-white/30">
            <Bot className="w-4 h-4 text-white" />
            <span>Enterprise Meeting Intelligence</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
            Bring your meetings into one intelligent workspace.
          </h2>
          <p className="text-xs md:text-sm text-white/90 max-w-lg mx-auto leading-relaxed font-medium">
            Join thousands of product managers and engineering leaders who turn hours of meetings into instant action.
          </p>
          <div className="pt-2">
            <Button
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => navigate('/signup')}
              className="font-bold px-8 py-3.5 bg-white text-[#6F56C9] hover:bg-[#FAFAFC]"
            >
              Start free trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
