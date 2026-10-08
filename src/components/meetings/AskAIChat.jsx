import React, { useState } from 'react';
import { Sparkles, Send, Bot, User, FileText } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

export const AskAIChat = ({ meeting }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: `Hello Gurnoor! I am your MeetAI assistant for **"${meeting.title}"**. Ask me anything about decisions, technical architecture, or action items from this call.`,
      references: [],
      timestamp: 'Just now',
    },
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const presetQuestions = [
    'What did we decide about the backend architecture?',
    'What action items were assigned to Sarah Chen?',
    'What were the main performance concerns raised?',
  ];

  const handleSend = (queryText) => {
    const textToSend = queryText || inputQuery;
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      let aiResponseText = `Based on the transcript for **${meeting.title}**:`;
      let references = [];

      const lower = textToSend.toLowerCase();

      if (lower.includes('architecture') || lower.includes('backend') || lower.includes('redis')) {
        aiResponseText = `According to **${meeting.title}** at timestamp **10:32**, the team agreed to move authentication into a dedicated microservice. Gurnoor and Rahul confirmed that **Redis will be used for active token caching**, while PostgreSQL remains the primary database source of truth.`;
        references = [
          { timestamp: '10:32', speaker: 'Gurnoor Singh', snippet: 'Would Redis be useful for session management and fast cache lookups?' },
          { timestamp: '10:33', speaker: 'Rahul Sharma', snippet: 'Yes, Redis for active tokens, but PostgreSQL should remain the source of truth.' }
        ];
      } else if (lower.includes('sarah') || lower.includes('action')) {
        aiResponseText = `At timestamp **10:35**, Sarah Chen was assigned the action item: **"Complete authentication API specification and OpenAPI docs"**, with a due date of **Today** (Status: In Progress).`;
        references = [
          { timestamp: '10:35', speaker: 'Sarah Chen', snippet: 'Agreed. I will complete the authentication API specification by tomorrow and write the OpenAPI docs.' }
        ];
      } else {
        aiResponseText = `In this call (**${meeting.title}**), key discussion points included microservice decoupling, session token management, and PostgreSQL database migrations.`;
        references = [
          { timestamp: '10:31', speaker: 'Rahul Sharma', snippet: 'I think we should move authentication into a dedicated microservice.' }
        ];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: aiResponseText,
          references,
          timestamp: 'Just now',
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="bg-white rounded-[24px] border border-[#ECECF1] flex flex-col h-[650px] overflow-hidden shadow-2xs">
      {/* Header Banner */}
      <div className="p-5 border-b border-[#ECECF1] bg-[#F8F6FC] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-[#6F56C9] flex items-center justify-center text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#202024]">Ask AI (Grounded RAG)</h4>
            <p className="text-[11px] text-[#73737C] font-medium">Answers grounded strictly in meeting data</p>
          </div>
        </div>
        <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white text-[#6F56C9] border border-[#E2D9F7]">
          Single Meeting Scope
        </span>
      </div>

      {/* Message History */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#FAFAFC]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs shrink-0 ${
                msg.sender === 'user'
                  ? 'bg-[#202024] text-white font-bold'
                  : 'bg-[#6F56C9] text-white'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-lg rounded-2xl p-4 text-xs sm:text-sm leading-relaxed font-medium ${
                msg.sender === 'user'
                  ? 'bg-[#6F56C9] text-white shadow-xs'
                  : 'bg-white text-[#202024] border border-[#ECECF1] shadow-2xs'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>

              {/* Source References Pill */}
              {msg.references && msg.references.length > 0 && (
                <div className="mt-3 pt-3 border-t border-[#ECECF1] space-y-2">
                  <span className="text-[10px] font-bold text-[#73737C] uppercase tracking-wider block">
                    Grounded Transcript References:
                  </span>
                  {msg.references.map((ref, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#F8F6FC] border border-[#E2D9F7] text-[11px] text-[#202024]"
                    >
                      <div className="flex items-center gap-1.5 font-bold text-[#6F56C9] mb-0.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>According to {meeting.title} at {ref.timestamp}</span>
                        <span className="text-[#73737C] font-normal">({ref.speaker})</span>
                      </div>
                      <p className="text-[#73737C] italic">"{ref.snippet}"</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-[#73737C] font-medium pl-10">
            <Sparkles className="w-3.5 h-3.5 text-[#6F56C9] animate-spin" />
            <span>Analyzing meeting transcript vectors...</span>
          </div>
        )}
      </div>

      {/* Preset Questions Chips */}
      <div className="px-5 py-2.5 bg-white border-t border-[#ECECF1] flex items-center gap-2 overflow-x-auto">
        <span className="text-[11px] font-semibold text-[#73737C] shrink-0">Try asking:</span>
        {presetQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="text-[11px] bg-[#F8F6FC] hover:bg-[#F0EBFA] text-[#6F56C9] px-3 py-1 rounded-full border border-[#E2D9F7] shrink-0 font-semibold transition-colors cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-4 bg-white border-t border-[#ECECF1]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Ask a question about this meeting..."
            className="flex-1 text-xs sm:text-sm px-4 py-3 bg-[#FAFAFC] border border-[#ECECF1] rounded-full text-[#202024] font-medium focus:outline-none focus:ring-2 focus:ring-[#6F56C9]/20 focus:border-[#6F56C9] focus:bg-white transition-all"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            icon={Send}
            disabled={!inputQuery.trim() || isTyping}
            className="px-5 py-2.5 font-bold"
          >
            Ask
          </Button>
        </form>
      </div>
    </div>
  );
};
