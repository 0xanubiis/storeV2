import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ConfirmDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  type?: 'danger' | 'success' | 'info';
}

export function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  type = 'info'
}: ConfirmDialogProps) {
  if (!isOpen) return null;

  const getColors = () => {
    switch (type) {
      case 'danger':
        return 'from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600';
      case 'success':
        return 'from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600';
      default:
        return 'from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600';
    }
  };

  return (
    <div className="fixed inset-0 z-[70] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
        <div className="bg-black border border-red-500/20 rounded-lg p-6 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            {type === 'danger' && (
              <AlertTriangle className="h-6 w-6 text-red-500" />
            )}
            <h2 className="text-xl font-semibold text-white">{title}</h2>
          </div>
          
          <p className="text-gray-300 mb-6">{message}</p>
          
          <div className="flex justify-end gap-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className={`px-4 py-2 bg-gradient-to-r ${getColors()} text-white rounded-md transition-all duration-300`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}