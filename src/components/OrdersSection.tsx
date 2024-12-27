import React from 'react';
import { Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import type { Order } from '../types';

interface OrdersSectionProps {
  orders: Order[];
  onUpdateStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersSection({ orders, onUpdateStatus }: OrdersSectionProps) {
  const statusIcons = {
    pending: <Clock className="h-5 w-5 text-yellow-400" />,
    processing: <Package className="h-5 w-5 text-blue-400" />,
    completed: <CheckCircle className="h-5 w-5 text-green-400" />,
    cancelled: <XCircle className="h-5 w-5 text-red-400" />
  };

  const statusColors = {
    pending: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    processing: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    completed: 'bg-green-400/10 text-green-400 border-green-400/20',
    cancelled: 'bg-red-400/10 text-red-400 border-red-400/20'
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-6">
        Recent Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-red-500/20">
              <th className="text-left py-3 px-4 text-gray-300">Order ID</th>
              <th className="text-left py-3 px-4 text-gray-300">Customer</th>
              <th className="text-left py-3 px-4 text-gray-300">Items</th>
              <th className="text-left py-3 px-4 text-gray-300">Total</th>
              <th className="text-left py-3 px-4 text-gray-300">Date</th>
              <th className="text-left py-3 px-4 text-gray-300">Status</th>
              <th className="text-left py-3 px-4 text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-red-500/10">
                <td className="py-3 px-4 text-white font-mono">{order.id.slice(0, 8)}</td>
                <td className="py-3 px-4">
                  <div className="text-white">{order.firstName} {order.lastName}</div>
                  <div className="text-gray-400 text-sm">{order.email}</div>
                </td>
                <td className="py-3 px-4 text-gray-300">
                  {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                </td>
                <td className="py-3 px-4 text-gray-300">${order.total.toFixed(2)}</td>
                <td className="py-3 px-4 text-gray-300">
                  {new Date(order.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-4">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${statusColors[order.status]}`}>
                    {statusIcons[order.status]}
                    <span className="capitalize">{order.status}</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <select
                    value={order.status}
                    onChange={(e) => onUpdateStatus(order.id, e.target.value as Order['status'])}
                    className="bg-black/40 border border-red-500/20 rounded-md px-3 py-1 text-white focus:outline-none focus:border-red-500/40"
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}