import React from 'react';
import { Plug, ArrowRight, ShieldCheck, CheckCircle2, Zap, Search, Bot } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { IntegrationCard } from '../components/integrations/IntegrationCard';
import { Card } from '../components/common/Card';

export const IntegrationsPage = () => {
  const { integrations } = useApp();

  const workflowSteps = [
    {
      step: '1',
      title: 'Connect Account',
      desc: 'Authenticate Google Meet, Teams, or Zoom accounts with one click via OAuth 2.0.',
      icon: Plug,
      badgeStyle: 'bg-[#F8F6FC] text-[#6F56C9] border-[#E2D9F7]',
    },
    {
      step: '2',
      title: 'Meeting Event Received',
      desc: 'MeetAI automatically listens for completed meeting recordings and cloud captions.',
      icon: Zap,
      badgeStyle: 'bg-[#EDF5FD] text-[#0284C7] border-[#D0E6FC]',
    },
    {
      step: '3',
      title: 'Transcript Processed',
      desc: 'Transcripts are cleaned, anonymized, and indexed for sub-second retrieval.',
      icon: Bot,
      badgeStyle: 'bg-[#FFF8F0] text-[#D97706] border-[#FDE68A]',
    },
    {
      step: '4',
      title: 'AI Insights Generated',
      desc: 'Executive summaries, action items, and key decisions are extracted.',
      icon: CheckCircle2,
      badgeStyle: 'bg-[#E8F8F5] text-[#0D9488] border-[#CCF0E8]',
    },
    {
      step: '5',
      title: 'Search Everything',
      desc: 'Query across months of historical meetings and track action items from one place.',
      icon: Search,
      badgeStyle: 'bg-[#F8F6FC] text-[#6F56C9] border-[#E2D9F7]',
    },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-[#202024] tracking-tight">Integrations</h1>
        <p className="text-sm text-[#73737C] mt-1 font-medium">
          Connect your meeting platforms and bring everything into MeetAI.
        </p>
      </div>

      {/* Integration Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {integrations.map((item) => (
          <IntegrationCard key={item.id} integration={item} />
        ))}
      </div>

      {/* "How MeetAI Integrations Work" Section */}
      <section className="pt-8 border-t border-[#ECECF1] space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#6F56C9] uppercase tracking-wider bg-[#F8F6FC] px-3 py-1 rounded-full border border-[#E2D9F7]">
            INTEGRATION PIPELINE
          </span>
          <h2 className="text-2xl font-extrabold text-[#202024]">How MeetAI integrations work</h2>
          <p className="text-xs text-[#73737C] font-medium">
            MeetAI connects via OAuth 2.0 API integrations to deliver automated meeting intelligence without installing bot callers.
          </p>
        </div>

        {/* 5-Step Visual Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {workflowSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative bg-white p-5 rounded-[24px] border border-[#ECECF1] shadow-2xs flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center border ${s.badgeStyle}`}>
                      {s.step}
                    </span>
                    <Icon className="w-4 h-4 text-[#73737C]" />
                  </div>
                  <h4 className="font-bold text-[#202024] text-xs mb-1.5">{s.title}</h4>
                  <p className="text-[11px] text-[#73737C] font-medium leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
