import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bot, ArrowRight, Lock, Mail, User, Building2, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { useApp } from '../context/AppContext';

export const SignupPage = () => {
  const navigate = useNavigate();
  const { showToast } = useApp();
  const [name, setName] = useState('Gurnoor Singh');
  const [email, setEmail] = useState('gurnoor@acme-corp.com');
  const [workspace, setWorkspace] = useState('Acme Corp Workspace');
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      showToast('Please accept the Terms of Service to continue', 'error');
      return;
    }
    showToast('Workspace created! Welcome to MeetAI', 'success');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row bg-slate-50 font-sans">
      {/* Desktop Left Side Banner */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 text-white p-12 flex-col justify-between border-r border-slate-800 relative overflow-hidden">
        <div className="space-y-6 relative z-10 max-w-lg">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>14-Day Free Enterprise Trial</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white leading-tight">
            Connect all your meeting platforms in 60 seconds.
          </h1>

          <p className="text-slate-300 text-sm leading-relaxed font-normal">
            No credit card required. Invite your entire engineering team and start searching across Google Meet, Microsoft Teams, and Zoom meetings immediately.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Unlimited meeting transcripts & automated AI summaries</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>SOC2 Type II security & AES-256 data encryption</span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-1 relative z-10">
          <div className="font-semibold text-white">Dedicated Enterprise Onboarding</div>
          <p className="text-slate-300 text-[11px]">
            Includes custom Azure AD SAML SSO setup and dedicated customer success support.
          </p>
        </div>
      </div>

      {/* Right Side Signup Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-6">
          <div className="text-center lg:text-left space-y-2">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shadow-xs mb-2">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Create your MeetAI workspace</h2>
            <p className="text-xs text-slate-500">
              Start your free 14-day enterprise trial. No credit card required.
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow-md border border-slate-200/90 rounded-2xl sm:px-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                label="Full Name"
                type="text"
                icon={User}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <Input
                label="Work Email"
                type="email"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Workspace Name"
                type="text"
                icon={Building2}
                value={workspace}
                onChange={(e) => setWorkspace(e.target.value)}
                required
              />

              <Input
                label="Password"
                type="password"
                icon={Lock}
                placeholder="Create strong password"
                required
              />

              <div className="flex items-start gap-2 pt-1">
                <input
                  id="agree-terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <label htmlFor="agree-terms" className="text-xs text-slate-600 cursor-pointer leading-tight">
                  I agree to MeetAI's <a href="#terms" className="text-blue-600 underline">Terms of Service</a> and <a href="#privacy" className="text-blue-600 underline">Privacy Policy</a>.
                </label>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="brand" className="w-full py-2.5 font-semibold" icon={ArrowRight} iconPosition="right">
                  Create Workspace
                </Button>
              </div>
            </form>

            <div className="mt-6 border-t border-slate-100 pt-6">
              <Button
                variant="outline"
                size="sm"
                className="w-full py-2"
                onClick={() => {
                  showToast('Creating workspace with Google SSO...', 'info');
                  navigate('/dashboard');
                }}
              >
                Sign up with Google
              </Button>
            </div>
          </div>

          <p className="text-center text-xs text-slate-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
