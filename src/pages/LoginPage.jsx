import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bot, ArrowRight, Lock, Mail, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { useApp } from '../context/AppContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { showToast } = useApp();
  const [email, setEmail] = useState('gurnoor@acme-corp.com');
  const [password, setPassword] = useState('••••••••••••');

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Signed in successfully as Gurnoor Singh', 'success');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row bg-slate-50 font-sans">
      {/* Desktop Left Side Branding Banner (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 text-white p-12 flex-col justify-between border-r border-slate-800 relative overflow-hidden">
        <div className="space-y-6 relative z-10 max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>MeetAI Enterprise v2.4</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
            Turn hours of meeting recordings into instant action.
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed font-normal">
            MeetAI automatically imports transcripts across Google Meet, Microsoft Teams, and Zoom to extract decisions, action items, and cross-meeting RAG intelligence.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>SOC2 Type II & Azure AD SAML 2.0 Compliant</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sub-200ms vector retrieval accuracy</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Single-click team action item management</span>
            </div>
          </div>
        </div>

        {/* Customer Testimonial Card */}
        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-2 relative z-10">
          <p className="text-slate-200 italic">
            "MeetAI saved our engineering leads over 4 hours every week. The cross-meeting search alone is indispensable."
          </p>
          <div className="font-semibold text-white text-[11px]">
            — Samantha Wright, CTO at Nexus Systems
          </div>
        </div>
      </div>

      {/* Right Side Form (Single Column on Mobile) */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-6">
          <div className="text-center lg:text-left space-y-2">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shadow-xs mb-2">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Sign in to MeetAI</h2>
            <p className="text-xs text-slate-500">
              Enter your work credentials to access your workspace.
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow-md border border-slate-200/90 rounded-2xl sm:px-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                label="Work Email"
                type="email"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-medium text-slate-700">Password</label>
                  <a href="#forgot" className="text-xs text-blue-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Input
                  type="password"
                  icon={Lock}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" variant="brand" className="w-full py-2.5 font-semibold" icon={ArrowRight} iconPosition="right">
                Sign In to Workspace
              </Button>
            </form>

            <div className="mt-6 border-t border-slate-100 pt-6">
              <div className="relative mb-4 text-center">
                <span className="bg-white px-2 text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                  Or continue with SSO
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    showToast('SSO Redirecting via Google...', 'info');
                    navigate('/dashboard');
                  }}
                >
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    showToast('SSO Redirecting via Microsoft...', 'info');
                    navigate('/dashboard');
                  }}
                >
                  Continue with Microsoft
                </Button>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500">
            Don't have an enterprise account?{' '}
            <Link to="/signup" className="font-semibold text-blue-600 hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
