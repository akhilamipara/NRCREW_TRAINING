export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'All' | 'Electronics' | 'Accessories' | 'Audio' | 'Computer' | 'Gaming' | 'Smart Home';

export type Page = 'products' | 'cart' | 'categories';
