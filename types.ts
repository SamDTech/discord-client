export interface Product {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  price: string;
  categories?: any[];
  category?: any;
  subs?: any[];
  shipping?: string;
  quantity: string;
  images?: any[];
  colors?: string[];
  brands?: string[];
  dentDescription?: string;
  dent?: string;
  color?: string;
  brand?: string;
  ratings?: [];
  count?: number;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  token: string;
  cart?: [];
}

export interface Sub {
  _id?: string;
  name: string;
  slug?: string;
  parent: string;
}

export interface Category {
  _id?: string;
  name: string;
  slug?: string;
}

export interface Coupon {
  _id?: string;
  name: string;
  expiry: Date;
  discount: number;
}
