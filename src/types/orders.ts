export interface CustomerOrder {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  items: OrderItem[];
  total: number;
  date: Date;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
}

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderStats {
  totalOrders: number;
  totalRevenue: number;
  averageOrderValue: number;
  pendingOrders: number;
}