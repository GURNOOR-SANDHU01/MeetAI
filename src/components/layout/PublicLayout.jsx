import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Bot, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

export const PublicLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased">
      {/* Public Navigation Bar */}
      <header className="h-16 bg-white/90 backdrop-blur-md border-b border-slate-200/90 sticky top-0 z-30 px-4 md:px-8">
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-base tracking-tight leading-tight">MeetAI</span>
              <span className="text-[10px] text-slate-400 font-medium">Meeting Intelligence</span>
            </div>
          </NavLink>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
            <a href="/#platforms" className="hover:text-slate-900 transition-colors">Platforms</a>
            <a href="/#how-it-works" className="hover:text-slate-900 transition-colors">How it works</a>
            <a href="/#features" className="hover:text-slate-900 transition-colors">Features</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
              Sign in
            </Button>
            <Button variant="brand" size="sm" icon={ArrowRight} iconPosition="right" onClick={() => navigate('/signup')}>
              Get started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Public Footer */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <Bot className="w-5 h-5 text-blue-500" />
              <span>MeetAI</span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Every meeting. One intelligent workspace. Connect Google Meet, Microsoft Teams, and Zoom to turn conversations into searchable action items and decisions.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Type II Certified & Enterprise Encrypted</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><NavLink to="/dashboard" className="hover:text-white transition-colors">Dashboard</NavLink></li>
              <li><NavLink to="/meetings" className="hover:text-white transition-colors">Meeting Workspace</NavLink></li>
              <li><NavLink to="/ai-search" className="hover:text-white transition-colors">AI Search RAG</NavLink></li>
              <li><NavLink to="/integrations" className="hover:text-white transition-colors">Integrations</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#api" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security Overview</a></li>
              <li><a href="#status" className="hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-3">Company & Legal</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">About MeetAI</a></li>
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <span>© 2026 MeetAI Platform Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300">Privacy</a>
            <a href="#terms" className="hover:text-slate-300">Terms</a>
            <a href="#cookies" className="hover:text-slate-300">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
