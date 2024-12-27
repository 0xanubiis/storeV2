import React from 'react';
import { Pencil, Trash2, Star } from 'lucide-react';

interface ProductActionsProps {
  onEdit: () => void;
  onDelete: () => void;
  onToggleFeatured: () => void;
  isFeatured?: boolean;
}

export function ProductActions({ onEdit, onDelete, onToggleFeatured, isFeatured }: ProductActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onEdit}
        className="p-1 hover:bg-gray-800 rounded-full transition-colors"
        title="Edit product"
      >
        <Pencil className="h-4 w-4 text-blue-400" />
      </button>
      <button
        onClick={onToggleFeatured}
        className="p-1 hover:bg-gray-800 rounded-full transition-colors"
        title={isFeatured ? "Remove from featured" : "Add to featured"}
      >
        <Star className={`h-4 w-4 ${isFeatured ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`} />
      </button>
      <button
        onClick={onDelete}
        className="p-1 hover:bg-gray-800 rounded-full transition-colors"
        title="Delete product"
      >
        <Trash2 className="h-4 w-4 text-red-400" />
      </button>
    </div>
  );
}