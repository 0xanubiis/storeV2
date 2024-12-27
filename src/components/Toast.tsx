import React, { useEffect } from 'react';
import { CheckCircle, XCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type = 'success', onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const Icon = {
    success: CheckCircle,
    error: XCircle,
    info: Info
  }[type];

  const colors = {
    success: 'border-green-500/20 bg-green-500/10',
    error: 'border-red-500/20 bg-red-500/10',
    info: 'border-blue-500/20 bg-blue-500/10'
  }[type];

  return (
    <div className={`fixed bottom-4 left-4 z-[80] max-w-md border ${colors} rounded-lg p-4 shadow-lg backdrop-blur-sm`}>
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-white" />
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
}