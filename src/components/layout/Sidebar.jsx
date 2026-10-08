import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Video,
  CheckSquare,
  Sparkles,
  Plug,
  Settings,
  ChevronUp,
  LogOut,
  User,
  Building2,
  X,
  Bot
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Avatar } from '../common/Avatar';
import { Dropdown } from '../common/Dropdown';

export const Sidebar = ({ mobileOpen, setMobileOpen }) => {
  const { user } = useApp();
  const navigate = useNavigate();

  const mainNav = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Meetings', path: '/meetings', icon: Video },
    { label: 'Tasks', path: '/tasks', icon: CheckSquare, badge: '3' },
    { label: 'AI Search', path: '/ai-search', icon: Sparkles, highlight: true },
  ];

  const workspaceNav = [
    { label: 'Integrations', path: '/integrations', icon: Plug },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const userMenuItems = [
    { label: 'Profile & Account', icon: User, onClick: () => navigate('/settings') },
    { label: 'Workspace Settings', icon: Building2, onClick: () => navigate('/settings') },
    { divider: true },
    { label: 'Sign out', icon: LogOut, danger: true, onClick: handleLogout },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white text-[#202024] w-64 border-r border-[#ECECF1]">
      {/* Brand Header */}
      <div className="flex items-center justify-between h-20 px-6 border-b border-[#ECECF1]/70">
        <NavLink to="/dashboard" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-[#6F56C9] flex items-center justify-center text-white shadow-xs">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[#202024] text-lg tracking-tight leading-tight">MeetAI</span>
            <span className="text-[10px] text-[#73737C] font-semibold">Meeting Intelligence</span>
          </div>
        </NavLink>
        {setMobileOpen && (
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden text-[#73737C] hover:text-[#202024] p-1.5 rounded-full hover:bg-[#F8F6FC]"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Body */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6">
        {/* Main Section */}
        <div>
          <div className="px-3 mb-2.5 text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider">
            Main
          </div>
          <nav className="space-y-1">
            {mainNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen && setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#F8F6FC] text-[#6F56C9] border border-[#E2D9F7] shadow-2xs'
                        : 'text-[#73737C] hover:bg-[#FAFAFC] hover:text-[#202024]'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#FFF8F0] text-[#D97706] border border-[#FDE68A]">
                      {item.badge}
                    </span>
                  )}
                  {item.highlight && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6F56C9] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6F56C9]"></span>
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Workspace Section */}
        <div>
          <div className="px-3 mb-2.5 text-[11px] font-bold text-[#A1A1AA] uppercase tracking-wider">
            Workspace
          </div>
          <nav className="space-y-1">
            {workspaceNav.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen && setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#F8F6FC] text-[#6F56C9] border border-[#E2D9F7] shadow-2xs'
                        : 'text-[#73737C] hover:bg-[#FAFAFC] hover:text-[#202024]'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Workspace Info Pill */}
        <div className="pt-2">
          <div className="p-3.5 rounded-2xl bg-[#F8F6FC] border border-[#E2D9F7] text-xs space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#6F56C9]">Current Team</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#6F56C9] text-white">
                PRO
              </span>
            </div>
            <div className="font-bold text-[#202024] truncate">{user.workspace}</div>
          </div>
        </div>
      </div>

      {/* User Footer Profile */}
      <div className="p-4 border-t border-[#ECECF1]/80">
        <Dropdown
          align="left"
          className="w-full"
          trigger={
            <button className="w-full flex items-center justify-between p-2 rounded-2xl hover:bg-[#F8F6FC] transition-colors text-left group border border-transparent hover:border-[#E2D9F7]">
              <div className="flex items-center gap-3 min-w-0">
                <Avatar src={user.avatar} name={user.name} size="sm" />
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-[#202024] truncate">{user.name}</span>
                  <span className="text-[10px] text-[#73737C] truncate">{user.email}</span>
                </div>
              </div>
              <ChevronUp className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#6F56C9] shrink-0" />
            </button>
          }
          items={userMenuItems}
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:block shrink-0 h-screen sticky top-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-[#202024]/40 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 animate-fade-in">{sidebarContent}</div>
        </div>
      )}
    </>
  );
};
