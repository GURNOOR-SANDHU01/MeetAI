import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sparkles, Search, Bot, Database, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { AIAnswerCard } from '../components/ai-search/AIAnswerCard';
import { PRESET_SEARCH_QUERIES, MOCK_SEARCH_ANSWERS } from '../data/mockData';

export const AISearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [activeResult, setActiveResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      executeSearch(initialQuery);
    }
  }, [initialQuery]);

  const executeSearch = (searchQuery) => {
    if (!searchQuery.trim()) return;

    setQuery(searchQuery);
    setSearchParams({ q: searchQuery });
    setIsSearching(true);

    setTimeout(() => {
      const found = MOCK_SEARCH_ANSWERS[searchQuery] || {
        answer: `Synthesized RAG response for **"${searchQuery}"**:\n\nBased on index scan across historical transcripts, team discussions indicate alignment on microservice migration and security SLAs. Alex Rivera and Sarah Chen lead technical architecture execution.`,
        sources: [
          {
            meetingId: "m1",
            meetingTitle: "Backend Architecture Review",
            platform: "google-meet",
            timestamp: "10:32",
            snippet: "Gurnoor Singh: 'Would Redis be useful for session management and fast cache lookups?'",
            confidence: "98% Match"
          },
          {
            meetingId: "m1",
            meetingTitle: "Backend Architecture Review",
            platform: "google-meet",
            timestamp: "10:33",
            snippet: "Rahul Sharma: 'Yes, Redis for active tokens, but PostgreSQL should remain the source of truth.'",
            confidence: "95% Match"
          }
        ]
      };

      setActiveResult(found);
      setIsSearching(false);
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="text-center space-y-3 pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8F6FC] border border-[#E2D9F7] text-[#6F56C9] text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#6F56C9]" />
          Cross-Meeting AI Search (RAG)
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#202024] tracking-tight">
          Ask anything about your meetings.
        </h1>
        <p className="text-xs sm:text-sm text-[#73737C] max-w-lg mx-auto leading-relaxed font-medium">
          Instant answers grounded directly in your historical transcripts, action items, and executive decisions.
        </p>
      </div>

      {/* Prominent Large Rounded Search Box */}
      <div className="relative bg-white rounded-full border border-[#ECECF1] shadow-md p-2 hover:border-[#CBB7EC] transition-all">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            executeSearch(query);
          }}
          className="flex items-center gap-2"
        >
          <div className="pl-4 text-[#A1A1AA]">
            <Search className="w-5 h-5 text-[#6F56C9]" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What did we decide about Redis?"
            className="flex-1 py-3 px-2 text-sm text-[#202024] placeholder-[#A1A1AA] focus:outline-none bg-transparent font-medium"
          />
          <Button
            type="submit"
            variant="primary"
            size="md"
            icon={Sparkles}
            disabled={!query.trim() || isSearching}
            className="px-6 py-3 font-bold"
          >
            {isSearching ? 'Searching...' : 'Ask AI'}
          </Button>
        </form>
      </div>

      {/* Pill-Shaped Suggested Question Chips */}
      <div className="space-y-2.5 text-center">
        <span className="text-xs font-semibold text-[#73737C] block">
          Suggested questions:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {PRESET_SEARCH_QUERIES.map((q, idx) => (
            <button
              key={idx}
              onClick={() => executeSearch(q)}
              className="text-xs bg-white hover:bg-[#F8F6FC] text-[#202024] hover:text-[#6F56C9] px-4 py-2 rounded-full border border-[#ECECF1] hover:border-[#E2D9F7] shadow-2xs transition-all duration-150 font-semibold cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Search Results Display */}
      {isSearching ? (
        <div className="p-12 text-center space-y-3 bg-white rounded-[24px] border border-[#ECECF1] shadow-2xs">
          <Sparkles className="w-8 h-8 text-[#6F56C9] animate-spin mx-auto" />
          <h4 className="text-sm font-bold text-[#202024]">Querying Transcript Vector Index...</h4>
          <p className="text-xs text-[#73737C]">Retrieving timestamp matches from historical meetings</p>
        </div>
      ) : activeResult ? (
        <AIAnswerCard query={query} answerData={activeResult} />
      ) : (
        <div className="p-12 text-center text-xs text-[#A1A1AA] border border-dashed border-[#ECECF1] rounded-[24px] bg-[#FAFAFC] font-medium">
          Type a question above or select a suggested question pill to inspect AI search results.
        </div>
      )}
    </div>
  );
};
