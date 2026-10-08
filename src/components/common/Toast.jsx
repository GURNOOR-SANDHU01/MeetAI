import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Toast = () => {
  const { toast } = useApp();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />,
    info: <Info className="w-4 h-4 text-blue-600 shrink-0" />,
  };

  const bgStyles = {
    success: 'bg-slate-900 text-white border-slate-800',
    error: 'bg-slate-900 text-white border-slate-800',
    info: 'bg-slate-900 text-white border-slate-800',
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 animate-fade-in pointer-events-auto">
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-xl border text-xs font-medium ${
          bgStyles[toast.type] || bgStyles.info
        }`}
      >
        {icons[toast.type] || icons.info}
        <span className="text-slate-100">{toast.message}</span>
      </div>
    </div>
  );
};
