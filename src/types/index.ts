export interface Sticker {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  dimensions: string;
  stock: number;
  created_at: string;
}

export interface CustomSticker {
  id: string;
  user_id: string;
  image_url: string;
  dimensions: string;
  quantity: number;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  type: 'preset' | 'custom';
  sticker: Sticker | CustomSticker;
}

export interface Order {
  id: string;
  user_id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shipping_address: string;
  tracking_number?: string;
  created_at: string;
}
