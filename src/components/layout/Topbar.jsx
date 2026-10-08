import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Search, Bell, Sparkles, CheckCircle2, User } from 'lucide-react';
import { Button } from '../common/Button';
import { Dropdown } from '../common/Dropdown';
import { Avatar } from '../common/Avatar';
import { useApp } from '../../context/AppContext';

export const Topbar = ({ onOpenMobileSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast, setSearchModalOpen, user } = useApp();
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  const notifications = [
    {
      id: 1,
      title: 'AI Summary Generated',
      text: 'Backend Architecture Review summary & 3 action items ready.',
      time: '10m ago',
    },
    {
      id: 2,
      title: 'New Meeting Imported',
      text: 'Design Review & Component Tokens imported from Teams.',
      time: '1h ago',
    },
    {
      id: 3,
      title: 'Action Item Due Soon',
      text: 'Complete authentication API due today.',
      time: '3h ago',
    }
  ];

  const getBreadcrumbs = () => {
    const path = location.pathname;
    if (path.startsWith('/meetings/')) {
      return 'Meetings / Meeting Workspace';
    }
    switch (path) {
      case '/dashboard': return 'Dashboard';
      case '/meetings': return 'Meetings';
      case '/tasks': return 'Action Items';
      case '/ai-search': return 'Global AI Search';
      case '/integrations': return 'Platform Integrations';
      case '/settings': return 'Settings';
      default: return 'MeetAI';
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200/90 px-4 md:px-6 flex items-center justify-between sticky top-0 z-20 shadow-2xs">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-700">{getBreadcrumbs()}</span>
        </div>
      </div>

      {/* Center: Global Search Trigger */}
      <div className="flex-1 max-w-md mx-4">
        <button
          onClick={() => setSearchModalOpen(true)}
          className="w-full flex items-center justify-between pl-3.5 pr-3 py-1.5 text-xs bg-slate-50 hover:bg-slate-100/80 border border-slate-200/90 rounded-lg text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all cursor-pointer shadow-2xs"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400" />
            <span className="font-medium text-slate-500">Search meetings, people, decisions...</span>
          </div>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white border border-slate-200 rounded">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2.5">
        <Button
          variant="brand"
          size="sm"
          icon={Sparkles}
          onClick={() => navigate('/ai-search')}
        >
          <span className="hidden sm:inline">Ask AI Search</span>
          <span className="sm:hidden">Ask AI</span>
        </Button>

        {/* Notifications Bell */}
        <Dropdown
          align="right"
          trigger={
            <button className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
              <Bell className="w-4 h-4" />
              {unreadNotifications > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-blue-600 ring-2 ring-white" />
              )}
            </button>
          }
          items={[
            {
              label: 'Notifications',
              onClick: () => {
                setUnreadNotifications(0);
                showToast('Notifications marked as read');
              }
            },
            { divider: true },
            ...notifications.map((n) => ({
              label: `${n.title}: ${n.text}`,
              icon: CheckCircle2,
              onClick: () => navigate('/meetings')
            }))
          ]}
        />

        {/* User Avatar Quick Trigger */}
        <button
          onClick={() => navigate('/settings')}
          className="hover:opacity-80 transition-opacity"
          title="Account Settings"
        >
          <Avatar src={user.avatar} name={user.name} size="sm" />
        </button>
      </div>
    </header>
  );
};
