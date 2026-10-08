import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Sparkles, Clock, Video, CheckCircle2, X, ArrowRight } from 'lucide-react';
import { Modal } from '../common/Modal';
import { useApp } from '../../context/AppContext';

export const GlobalSearchModal = () => {
  const { searchModalOpen, setSearchModalOpen, meetings } = useApp();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const recentSearches = [
    'What did we decide about Redis?',
    'Who owns the authentication task?',
    'Backend Architecture Review',
    'PostgreSQL identity schema'
  ];

  const suggestedSearches = [
    'What were the main decisions in the last sync?',
    'Summarize SOC2 compliance commitments',
    'What is the status of PR #42 review?'
  ];

  const handleSelectSearch = (term) => {
    setSearchModalOpen(false);
    navigate(`/ai-search?q=${encodeURIComponent(term)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      handleSelectSearch(query.trim());
    }
  };

  return (
    <Modal
      isOpen={searchModalOpen}
      onClose={() => setSearchModalOpen(false)}
      title="Global AI Search"
      maxWidth="max-w-2xl"
    >
      <div className="space-y-5">
        {/* Search Input Box */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search meetings, people, decisions (e.g., 'What did we decide about Redis?')..."
            className="w-full pl-11 pr-20 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all font-medium"
            autoFocus
          />
          <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
            <button
              type="submit"
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Search</span>
            </button>
          </div>
        </form>

        {/* Recent Searches */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Recent Searches
          </h4>
          <div className="space-y-1.5">
            {recentSearches.map((term, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectSearch(term)}
                className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-slate-100/80 text-xs text-slate-700 text-left transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                  <span className="font-medium group-hover:text-blue-600">{term}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>

        {/* Suggested AI Queries */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Suggested AI Queries
          </h4>
          <div className="flex flex-wrap gap-2">
            {suggestedSearches.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectSearch(q)}
                className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors font-medium text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Meetings Snippets */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
            Recent Meeting Workspaces
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {meetings.slice(0, 2).map((m) => (
              <div
                key={m.id}
                onClick={() => {
                  setSearchModalOpen(false);
                  navigate(`/meetings/${m.id}`);
                }}
                className="p-2.5 rounded-lg border border-slate-200/80 hover:border-blue-300 hover:bg-slate-50 transition-all cursor-pointer text-xs"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Video className="w-3.5 h-3.5 text-slate-500" />
                  <span className="font-semibold text-slate-900 truncate">{m.title}</span>
                </div>
                <span className="text-[11px] text-slate-400">{m.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
