import React from 'react';
import { Sparkles, CheckCircle2, FileText, Database, Share2, Copy } from 'lucide-react';
import { Card } from '../common/Card';
import { SourceReferenceCard } from './SourceReference';
import { useApp } from '../../context/AppContext';

export const AIAnswerCard = ({ query, answerData }) => {
  const { showToast } = useApp();

  const handleCopy = () => {
    navigator.clipboard.writeText(answerData.answer);
    showToast('AI answer copied to clipboard', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Synthesized AI Answer Card with Light Lavender Background */}
      <div className="bg-[#F8F6FC] rounded-[24px] border border-[#E2D9F7] p-6 shadow-2xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#E2D9F7]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#6F56C9] flex items-center justify-center text-white shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#202024]">Synthesized AI Answer</h3>
              <span className="text-[11px] font-semibold text-[#6F56C9]">Grounded RAG synthesis across historical meeting transcripts</span>
            </div>
          </div>
          <button
            onClick={handleCopy}
            className="p-2 text-[#73737C] hover:text-[#6F56C9] rounded-full hover:bg-white transition-colors"
            title="Copy answer"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>

        {/* Formatted Answer Body */}
        <div className="bg-white p-5 rounded-2xl border border-[#ECECF1] text-xs sm:text-sm text-[#202024] leading-relaxed font-medium space-y-3">
          <p className="whitespace-pre-line leading-relaxed">
            {answerData.answer}
          </p>
        </div>
      </div>

      {/* Grounded Sources & Relevant Meetings */}
      {answerData.sources && answerData.sources.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#73737C] flex items-center gap-2">
              <Database className="w-4 h-4 text-[#6F56C9]" />
              Grounded Meeting Sources ({answerData.sources.length})
            </h4>
            <span className="text-xs text-[#73737C] font-semibold">Click source to open meeting</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {answerData.sources.map((src, index) => (
              <SourceReferenceCard key={index} source={src} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
