export interface ICategory {
  id: number;
  name: string;
  slug: string;
  subcategories: ISubcategory[];
}

export interface ISubcategory {
  id: number;
  name: string;
  slug: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  category: string;
  subcategory: string;
  images: string[];
  variants: IVariant[];
}

export interface IVariant {
  id: number;
  color: string;
  images?: string[];
  sizes: ISize[];
}

export interface ISize {
  size: string;
  quantity: number;
}
