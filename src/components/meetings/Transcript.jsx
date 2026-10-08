import React, { useState, useMemo } from 'react';
import { Search, Filter, Play, Copy, Check, MessageSquare } from 'lucide-react';
import { Avatar } from '../common/Avatar';
import { SearchInput } from '../common/Input';
import { useApp } from '../../context/AppContext';

export const Transcript = ({ transcript = [], participants = [] }) => {
  const { showToast } = useApp();
  const [search, setSearch] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState('ALL');
  const [copiedId, setCopiedId] = useState(null);

  const speakers = useMemo(() => {
    const list = new Set();
    transcript.forEach((t) => list.add(t.speaker));
    return Array.from(list);
  }, [transcript]);

  const filtered = useMemo(() => {
    return transcript.filter((item) => {
      const matchesSearch =
        search === '' ||
        item.text.toLowerCase().includes(search.toLowerCase()) ||
        item.speaker.toLowerCase().includes(search.toLowerCase());
      const matchesSpeaker = selectedSpeaker === 'ALL' || item.speaker === selectedSpeaker;
      return matchesSearch && matchesSpeaker;
    });
  }, [transcript, search, selectedSpeaker]);

  const handleCopyText = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Transcript line copied to clipboard');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-white rounded-[24px] border border-[#ECECF1] shadow-2xs overflow-hidden">
      {/* Transcript Toolbar */}
      <div className="p-5 border-b border-[#ECECF1] bg-[#FAFAFC] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-80">
          <SearchInput
            placeholder="Search transcript text..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
            size="sm"
          />
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#A1A1AA]" />
            <select
              value={selectedSpeaker}
              onChange={(e) => setSelectedSpeaker(e.target.value)}
              className="text-xs bg-white border border-[#ECECF1] rounded-full px-3 py-1.5 text-[#202024] font-semibold focus:outline-none focus:ring-2 focus:ring-[#6F56C9]/20"
            >
              <option value="ALL">All Speakers ({speakers.length})</option>
              {speakers.map((sp) => (
                <option key={sp} value={sp}>
                  {sp}
                </option>
              ))}
            </select>
          </div>

          <span className="text-xs text-[#73737C] font-medium">
            Showing {filtered.length} entries
          </span>
        </div>
      </div>

      {/* Conversation Style Message Stream */}
      <div className="p-6 space-y-6 max-h-[650px] overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="py-12 text-center text-xs text-[#A1A1AA] font-medium">
            No matching transcript entries found.
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#F8F6FC] transition-colors border border-transparent hover:border-[#E2D9F7]"
            >
              <Avatar src={item.avatar} name={item.speaker} size="md" className="shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-[#202024]">{item.speaker}</span>
                    <button
                      type="button"
                      onClick={() => showToast(`Seeked audio to ${item.timestamp}`)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#6F56C9] bg-[#F8F6FC] hover:bg-[#F0EBFA] px-2 py-0.5 rounded-full border border-[#E2D9F7] transition-colors cursor-pointer"
                      title="Jump to audio timestamp"
                    >
                      <Play className="w-2.5 h-2.5 fill-current" />
                      {item.timestamp}
                    </button>
                  </div>
                  <button
                    onClick={() => handleCopyText(`${item.speaker} (${item.timestamp}): ${item.text}`, item.id)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-[#A1A1AA] hover:text-[#6F56C9] rounded-full"
                    title="Copy transcript line"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-[#0D9488]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-[#ECECF1] shadow-2xs text-xs sm:text-sm text-[#202024] leading-relaxed font-medium">
                  {item.text}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
