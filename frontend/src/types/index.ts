export type Category = {
  id: number;
  name: string;
  slug: string;
  subcategories: Subcategory[];
};

export type Subcategory = {
  id: number;
  name: string;
  slug: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  discount: number;
  category: string;
  subcategory: string;
  images: string[];
  variants: Variant[];
};

export type Variant = {
  id: number;
  color: string;
  images?: string[];
  sizes: Size[];
};

export type Size = {
  size: string;
  quantity: number;
};
