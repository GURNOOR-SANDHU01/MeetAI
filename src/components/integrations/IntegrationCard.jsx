import React from 'react';
import { CheckCircle2, ShieldCheck, RefreshCw, Power } from 'lucide-react';
import { Button } from '../common/Button';
import { PlatformBadge } from '../common/PlatformBadge';
import { useApp } from '../../context/AppContext';

export const IntegrationCard = ({ integration }) => {
  const { toggleIntegration, setConnectModalIntegration } = useApp();

  const handleConnectClick = () => {
    if (integration.connected) {
      toggleIntegration(integration.id);
    } else {
      setConnectModalIntegration(integration);
    }
  };

  return (
    <div className="bg-white rounded-[26px] border border-[#ECECF1] p-7 shadow-2xs hover:border-[#CBB7EC] transition-all hover:-translate-y-1 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <PlatformBadge platform={integration.platformKey} />
          {integration.connected ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#E8F8F5] text-[#0D9488] border border-[#CCF0E8]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Connected
            </span>
          ) : (
            <span className="text-xs font-semibold text-[#73737C] bg-[#FAFAFC] px-3 py-1 rounded-full border border-[#ECECF1]">
              Not Connected
            </span>
          )}
        </div>

        <h3 className="font-extrabold text-[#202024] text-lg mb-2">{integration.name}</h3>
        <p className="text-xs sm:text-sm text-[#73737C] leading-relaxed font-medium mb-6">
          {integration.description}
        </p>

        {integration.connected && (
          <div className="p-4 rounded-2xl bg-[#F8F6FC] border border-[#E2D9F7] text-xs space-y-2 mb-6 font-medium">
            <div className="flex justify-between text-[#73737C]">
              <span>Account:</span>
              <strong className="text-[#202024] font-bold">{integration.connectedAccount}</strong>
            </div>
            <div className="flex justify-between text-[#73737C]">
              <span>Last Sync:</span>
              <span className="text-[#6F56C9] font-bold">{integration.lastSync}</span>
            </div>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-[#ECECF1] flex items-center justify-between gap-3">
        {integration.connected ? (
          <>
            <div className="flex items-center gap-2 text-xs text-[#73737C] font-semibold">
              <RefreshCw className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Auto-sync active</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleConnectClick}
              className="text-rose-600 hover:bg-rose-50 border-rose-200"
            >
              Disconnect
            </Button>
          </>
        ) : (
          <>
            <span className="text-xs text-[#73737C] font-medium">OAuth 2.0 Ready</span>
            <Button
              variant="primary"
              size="sm"
              onClick={handleConnectClick}
              className="font-bold px-5 py-2.5"
            >
              Connect {integration.name}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
