import React, { useState } from 'react';
import { User, Building2, Bell, Sparkles, Plug, Save, Plus, ShieldCheck, Mail, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Card, CardHeader, CardTitle } from '../components/common/Card';
import { Button } from '../components/common/Button';
import { Input } from '../components/common/Input';
import { Avatar } from '../components/common/Avatar';
import { Modal } from '../components/common/Modal';

export const SettingsPage = () => {
  const { user, members, addWorkspaceMember, updateUserSettings, integrations } = useApp();
  const [activeSection, setActiveSection] = useState('profile');

  // Form states
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [workspaceName, setWorkspaceName] = useState(user.workspace);

  // Invite modal state
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('Member');

  // AI preference states
  const [summaryLength, setSummaryLength] = useState('Balanced');
  const [autoActionItems, setAutoActionItems] = useState(true);
  const [crossMeetingSearch, setCrossMeetingSearch] = useState(true);

  // Notification toggle states
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [actionReminders, setActionReminders] = useState(true);
  const [meetingProcessing, setMeetingProcessing] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(true);

  const sections = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'workspace', label: 'Workspace', icon: Building2 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'ai-preferences', label: 'AI Preferences', icon: Sparkles },
    { id: 'connected-accounts', label: 'Connected Accounts', icon: Plug },
  ];

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateUserSettings({ name, email, role });
  };

  const handleSaveWorkspace = (e) => {
    e.preventDefault();
    updateUserSettings({ workspace: workspaceName });
  };

  const handleInviteSubmit = (e) => {
    e.preventDefault();
    if (inviteEmail.trim()) {
      addWorkspaceMember(inviteEmail.trim(), inviteRole);
      setInviteEmail('');
      setIsInviteModalOpen(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold text-[#202024] tracking-tight">Settings</h1>
        <p className="text-xs sm:text-sm text-[#73737C] mt-1 font-medium">
          Manage your personal account, workspace team members, and AI summarization preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Secondary Left Navigation */}
        <div className="md:col-span-1 space-y-1.5">
          {sections.map((s) => {
            const Icon = s.icon;
            const isActive = activeSection === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-full text-xs font-bold transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-[#6F56C9] text-white shadow-xs'
                    : 'text-[#73737C] hover:bg-[#F8F6FC] hover:text-[#202024]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        {/* Settings Content Area */}
        <div className="md:col-span-3">
          {/* Profile Settings */}
          {activeSection === 'profile' && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
              </CardHeader>
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-[#ECECF1]">
                  <Avatar src={user.avatar} name={user.name} size="xl" />
                  <div>
                    <Button variant="secondary" size="sm">
                      Change Avatar
                    </Button>
                    <p className="text-[11px] text-[#73737C] font-medium mt-1">JPG or PNG under 5MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    label="Work Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    label="Job Title / Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <div>
                    <label className="block text-xs font-semibold text-[#202024] mb-1.5">Timezone</label>
                    <select className="w-full text-xs font-medium rounded-2xl border border-[#ECECF1] bg-white py-2.5 px-3.5 text-[#202024]">
                      <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                      <option>(GMT+00:00) UTC / London</option>
                      <option>(GMT+05:30) India Standard Time</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Button type="submit" variant="primary" size="sm" icon={Save} className="font-bold px-6">
                    Save Changes
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* Workspace Settings */}
          {activeSection === 'workspace' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Workspace General</CardTitle>
                </CardHeader>
                <form onSubmit={handleSaveWorkspace} className="space-y-4">
                  <Input
                    label="Workspace Name"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                  />
                  <div className="pt-2 flex justify-end">
                    <Button type="submit" variant="primary" size="sm" icon={Save} className="font-bold">
                      Update Workspace Name
                    </Button>
                  </div>
                </form>
              </Card>

              {/* Workspace Members Table */}
              <Card>
                <CardHeader>
                  <div>
                    <CardTitle>Workspace Members ({members.length})</CardTitle>
                    <p className="text-xs text-[#73737C] font-medium mt-0.5">
                      Manage workspace team seats and role permissions.
                    </p>
                  </div>
                  <Button variant="secondary" size="sm" icon={Plus} onClick={() => setIsInviteModalOpen(true)}>
                    Invite Member
                  </Button>
                </CardHeader>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#ECECF1] text-[11px] font-bold text-[#A1A1AA] uppercase">
                        <th className="py-2.5 px-3">Member</th>
                        <th className="py-2.5 px-3">Email</th>
                        <th className="py-2.5 px-3">Role</th>
                        <th className="py-2.5 px-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ECECF1] text-[#202024]">
                      {members.map((m) => (
                        <tr key={m.id}>
                          <td className="py-3 px-3 font-bold flex items-center gap-2.5">
                            <Avatar src={m.avatar} name={m.name} size="xs" />
                            <span>{m.name}</span>
                          </td>
                          <td className="py-3 px-3 text-[#73737C] font-medium">{m.email}</td>
                          <td className="py-3 px-3">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F8F6FC] text-[#6F56C9] border border-[#E2D9F7]">
                              {m.role}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right font-semibold text-[#0D9488]">
                            {m.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {/* Notifications */}
          {activeSection === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <div className="space-y-4 text-xs font-medium">
                <div className="flex items-center justify-between py-2.5 border-b border-[#ECECF1]">
                  <div>
                    <span className="font-bold text-[#202024] block">Email Notifications</span>
                    <span className="text-[#73737C] text-[11px]">Receive email notifications when meeting summaries are ready.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={emailNotifs}
                    onChange={(e) => setEmailNotifs(e.target.checked)}
                    className="rounded-full text-[#6F56C9] focus:ring-[#6F56C9]/20 w-4 h-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between py-2.5 border-b border-[#ECECF1]">
                  <div>
                    <span className="font-bold text-[#202024] block">Action Item Reminders</span>
                    <span className="text-[#73737C] text-[11px]">Send reminder 24 hours before an assigned task is due.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={actionReminders}
                    onChange={(e) => setActionReminders(e.target.checked)}
                    className="rounded-full text-[#6F56C9] focus:ring-[#6F56C9]/20 w-4 h-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between py-2.5 border-b border-[#ECECF1]">
                  <div>
                    <span className="font-bold text-[#202024] block">Meeting Processing Notifications</span>
                    <span className="text-[#73737C] text-[11px]">Notify me as soon as video recordings finish processing.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={meetingProcessing}
                    onChange={(e) => setMeetingProcessing(e.target.checked)}
                    className="rounded-full text-[#6F56C9] focus:ring-[#6F56C9]/20 w-4 h-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between py-2.5">
                  <div>
                    <span className="font-bold text-[#202024] block">Weekly Executive Summary</span>
                    <span className="text-[#73737C] text-[11px]">Receive weekly synthesis email of all meeting decisions.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={weeklySummary}
                    onChange={(e) => setWeeklySummary(e.target.checked)}
                    className="rounded-full text-[#6F56C9] focus:ring-[#6F56C9]/20 w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>
            </Card>
          )}

          {/* AI Preferences */}
          {activeSection === 'ai-preferences' && (
            <Card>
              <CardHeader>
                <CardTitle>AI Preferences & Summarization</CardTitle>
              </CardHeader>
              <div className="space-y-5 text-xs font-medium">
                <div>
                  <label className="block text-xs font-bold text-[#202024] mb-1.5">
                    AI Summary Length
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Short', 'Balanced', 'Detailed'].map((len) => (
                      <button
                        key={len}
                        type="button"
                        onClick={() => setSummaryLength(len)}
                        className={`py-2.5 px-3 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                          summaryLength === len
                            ? 'bg-[#6F56C9] text-white border-[#6F56C9] shadow-xs'
                            : 'bg-white text-[#73737C] border-[#ECECF1] hover:border-[#CBB7EC]'
                        }`}
                      >
                        {len}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-t border-[#ECECF1]">
                  <div>
                    <span className="font-bold text-[#202024] block">Automatic Action-Item Extraction</span>
                    <span className="text-[#73737C] text-[11px]">Automatically detect and assign tasks from transcripts.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={autoActionItems}
                    onChange={(e) => setAutoActionItems(e.target.checked)}
                    className="rounded-full text-[#6F56C9] focus:ring-[#6F56C9]/20 w-4 h-4 cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-t border-[#ECECF1]">
                  <div>
                    <span className="font-bold text-[#202024] block">Cross-Meeting RAG Search</span>
                    <span className="text-[#73737C] text-[11px]">Allow AI search to index across all workspace meeting histories.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={crossMeetingSearch}
                    onChange={(e) => setCrossMeetingSearch(e.target.checked)}
                    className="rounded-full text-[#6F56C9] focus:ring-[#6F56C9]/20 w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>
            </Card>
          )}

          {/* Connected Accounts */}
          {activeSection === 'connected-accounts' && (
            <Card>
              <CardHeader>
                <CardTitle>Connected Platform Accounts</CardTitle>
              </CardHeader>
              <div className="space-y-3">
                {integrations.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl border border-[#ECECF1] flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-[#202024] text-sm">{item.name}</span>
                      {item.connected ? (
                        <span className="text-[10px] font-bold text-[#0D9488] bg-[#E8F8F5] px-3 py-1 rounded-full border border-[#CCF0E8]">
                          Connected: {item.connectedAccount}
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-[#73737C] bg-[#FAFAFC] px-3 py-1 rounded-full border border-[#ECECF1]">
                          Not connected
                        </span>
                      )}
                    </div>
                    <span className="text-[#73737C] font-semibold">{item.connected ? 'Auto-sync ON' : 'OFF'}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Invite Member Modal */}
      <Modal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        title="Invite Workspace Member"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleInviteSubmit} className="space-y-4">
          <Input
            label="Work Email Address"
            type="email"
            icon={Mail}
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            placeholder="colleague@acme-corp.com"
            required
          />

          <div>
            <label className="block text-xs font-semibold text-[#202024] mb-1.5">Workspace Role</label>
            <select
              value={inviteRole}
              onChange={(e) => setInviteRole(e.target.value)}
              className="w-full text-xs font-medium rounded-2xl border border-[#ECECF1] bg-white py-2.5 px-3.5 text-[#202024]"
            >
              <option value="Admin">Admin (Full administrative permissions)</option>
              <option value="Member">Member (View & search meetings)</option>
              <option value="Owner">Owner (Billing & workspace owner)</option>
            </select>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button variant="outline" size="sm" onClick={() => setIsInviteModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" size="sm">
              Send Invitation
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
