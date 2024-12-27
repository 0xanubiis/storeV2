import React, { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';
import type { NewProduct, Product } from '../types';

interface AddProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (product: NewProduct) => void;
  initialData?: Product | null;
}

export function AddProductForm({ isOpen, onClose, onSubmit, initialData }: AddProductFormProps) {
  const [formData, setFormData] = useState<NewProduct>({
    name: '',
    description: '',
    price: 0,
    category: '',
    image: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        description: initialData.description,
        price: initialData.price,
        category: initialData.category,
        image: initialData.image
      });
      setImagePreview(initialData.image);
    } else {
      setFormData({
        name: '',
        description: '',
        price: 0,
        category: '',
        image: ''
      });
      setImagePreview(null);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImagePreview(imageUrl);
        setFormData(prev => ({ ...prev, image: imageUrl }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative min-h-screen md:flex md:items-center md:justify-center">
        <div className="relative w-full max-w-md mx-auto bg-black border border-red-500/20 rounded-lg p-6 my-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              {initialData ? 'Edit Product' : 'Add New Product'}
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-full">
              <X className="h-6 w-6 text-gray-300" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-black/40 border border-red-500/20 rounded-md text-white focus:outline-none focus:border-red-500/40"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-4 py-2 bg-black/40 border border-red-500/20 rounded-md text-white focus:outline-none focus:border-red-500/40 h-24"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
                className="w-full px-4 py-2 bg-black/40 border border-red-500/20 rounded-md text-white focus:outline-none focus:border-red-500/40"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-2 bg-black/40 border border-red-500/20 rounded-md text-white focus:outline-none focus:border-red-500/40"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-red-500/20 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                    <div className="mb-4">
                      <img src={imagePreview} alt="Preview" className="mx-auto h-32 w-32 object-cover rounded-md" />
                    </div>
                  ) : (
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  )}
                  <div className="flex text-sm text-gray-400">
                    <label className="relative cursor-pointer bg-black rounded-md font-medium text-red-400 hover:text-red-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={handleImageUpload}
                        required={!initialData}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-md hover:from-red-600 hover:to-pink-600 transition-all duration-300"
            >
              {initialData ? 'Update Product' : 'Add Product'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}