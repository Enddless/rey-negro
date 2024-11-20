export type TProducts = {
  id: number;
  img: string;
  title: string;
  quality: string;
  compound?: string;
  storage_conditions: string;
  best_before_date: string;
  weight: string;
  price: number;
};

export type TProductsBasket = TProducts & {
  count: number;
};
