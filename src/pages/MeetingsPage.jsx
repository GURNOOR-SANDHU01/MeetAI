import React, { useState, useMemo } from 'react';
import { Video, Filter, Plus, Calendar, Sparkles, LayoutList, LayoutGrid, ArrowUpDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MeetingTable } from '../components/meetings/MeetingTable';
import { MeetingGrid } from '../components/meetings/MeetingGrid';
import { SearchInput } from '../components/common/Input';
import { Button } from '../components/common/Button';

export const MeetingsPage = () => {
  const { meetings } = useApp();
  const [search, setSearch] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('ALL');
  const [selectedDateFilter, setSelectedDateFilter] = useState('ALL');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [sortBy, setSortBy] = useState('DATE_DESC');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredMeetings = useMemo(() => {
    let list = meetings.filter((m) => {
      const matchesSearch =
        search === '' ||
        m.title.toLowerCase().includes(search.toLowerCase()) ||
        m.participants.some((p) => p.name.toLowerCase().includes(search.toLowerCase()));

      const matchesPlatform = selectedPlatform === 'ALL' || m.platform === selectedPlatform;
      const matchesStatus = selectedStatus === 'ALL' || m.status.toLowerCase() === selectedStatus.toLowerCase();

      return matchesSearch && matchesPlatform && matchesStatus;
    });

    if (sortBy === 'TITLE_ASC') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Default DATE_DESC
      list.sort((a, b) => b.id.localeCompare(a.id));
    }

    return list;
  }, [meetings, search, selectedPlatform, selectedStatus, sortBy]);

  const visibleMeetings = filteredMeetings.slice(0, visibleCount);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Meetings</h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            All your conversations in one place across Google Meet, Microsoft Teams, and Zoom.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* View Toggle */}
          <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs">
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1 transition-colors ${
                viewMode === 'list'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="List View"
            >
              <LayoutList className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>

          <Button variant="brand" size="sm" icon={Plus}>
            Import Meeting
          </Button>
        </div>
      </div>

      {/* Controls & Filter Bar */}
      <div className="p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-72">
          <SearchInput
            placeholder="Search meetings by title or person..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClear={() => setSearch('')}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-start md:justify-end">
          {/* Platform Filter */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-400 font-medium">Platform:</span>
            <select
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            >
              <option value="ALL">All Platforms</option>
              <option value="google-meet">Google Meet</option>
              <option value="teams">Microsoft Teams</option>
              <option value="zoom">Zoom</option>
            </select>
          </div>

          {/* Date Filter */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-400 font-medium">Date:</span>
            <select
              value={selectedDateFilter}
              onChange={(e) => setSelectedDateFilter(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            >
              <option value="ALL">All Time</option>
              <option value="TODAY">Today</option>
              <option value="THIS_WEEK">This Week</option>
              <option value="THIS_MONTH">This Month</option>
            </select>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-400 font-medium">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20"
            >
              <option value="DATE_DESC">Newest First</option>
              <option value="TITLE_ASC">Title A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Render Table or Grid */}
      {viewMode === 'list' ? (
        <MeetingTable meetings={visibleMeetings} />
      ) : (
        <MeetingGrid meetings={visibleMeetings} />
      )}

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-slate-500 font-medium">
          Showing {visibleMeetings.length} of {filteredMeetings.length} meetings
        </span>
        {visibleMeetings.length < filteredMeetings.length && (
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            Load More Meetings
          </Button>
        )}
      </div>
    </div>
  );
};
