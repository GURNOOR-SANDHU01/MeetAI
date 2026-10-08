import React from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { PlatformBadge } from '../common/PlatformBadge';
import { useApp } from '../../context/AppContext';

export const IntegrationModal = () => {
  const { connectModalIntegration, setConnectModalIntegration, toggleIntegration } = useApp();

  if (!connectModalIntegration) return null;

  const handleContinue = () => {
    toggleIntegration(connectModalIntegration.id);
    setConnectModalIntegration(null);
  };

  return (
    <Modal
      isOpen={!!connectModalIntegration}
      onClose={() => setConnectModalIntegration(null)}
      title={`Connect ${connectModalIntegration.name}`}
      maxWidth="max-w-md"
    >
      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
          <PlatformBadge platform={connectModalIntegration.platformKey} />
          <div>
            <h4 className="text-xs font-bold text-slate-900">{connectModalIntegration.name} OAuth Sync</h4>
            <p className="text-[11px] text-slate-500">Enterprise meeting intelligence setup</p>
          </div>
        </div>

        <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
          <p>
            MeetAI will request read-only permissions to securely import:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-700 font-medium">
            <li>Calendar meeting event metadata</li>
            <li>Cloud meeting audio & video recordings</li>
            <li>Automated closed caption transcripts</li>
          </ul>
        </div>

        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200/80 text-[11px] text-emerald-800 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>SOC2 Type II Compliant. Data is encrypted in transit and at rest.</span>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setConnectModalIntegration(null)}
          >
            Cancel
          </Button>
          <Button
            variant="brand"
            size="sm"
            onClick={handleContinue}
          >
            Authorize & Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
};
