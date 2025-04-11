/*
  # Initial Schema Setup for Sticker Store

  1. New Tables
    - users (managed by Supabase Auth)
    - stickers (preset stickers)
    - custom_stickers (user-uploaded designs)
    - orders (customer orders)
    - order_items (items in each order)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Preset stickers table
CREATE TABLE stickers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  image_url text NOT NULL,
  dimensions text NOT NULL,
  stock integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Custom sticker uploads
CREATE TABLE custom_stickers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  image_url text NOT NULL,
  dimensions text NOT NULL,
  quantity integer NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Orders
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  total decimal(10,2) NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  shipping_address text NOT NULL,
  tracking_number text,
  created_at timestamptz DEFAULT now()
);

-- Order items
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders NOT NULL,
  sticker_id uuid REFERENCES stickers,
  custom_sticker_id uuid REFERENCES custom_stickers,
  quantity integer NOT NULL,
  price_at_time decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now(),
  CHECK (
    (sticker_id IS NOT NULL AND custom_sticker_id IS NULL) OR
    (sticker_id IS NULL AND custom_sticker_id IS NOT NULL)
  )
);

-- Enable RLS
ALTER TABLE stickers ENABLE ROW LEVEL SECURITY;
ALTER TABLE custom_stickers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Anyone can view stickers"
  ON stickers FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can view their custom stickers"
  ON custom_stickers FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create custom stickers"
  ON custom_stickers FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their order items"
  ON order_items FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );
