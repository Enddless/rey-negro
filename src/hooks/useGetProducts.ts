import { useQuery } from '@tanstack/react-query';
import { collection, onSnapshot } from '@firebase/firestore';
import { db } from '../store/firebase-config';
import { FirebaseError } from 'firebase/app';
import { TProducts } from '../types/types';

const fetchProducts = async (): Promise<TProducts[]> => {
  return new Promise((resolve, reject) => {
    const productsCollectionDB = collection(db, 'products');

    const unsubscribe = onSnapshot(
      productsCollectionDB,
      (snapshot) => {
        const products: TProducts[] = snapshot.docs.map((doc) => ({
          id: doc.data().id,
          best_before_date: doc.data().best_before_date,
          compound: doc.data().compound,
          img: doc.data().img,
          price: doc.data().price,
          quality: doc.data().quality,
          storage_conditions: doc.data().storage_conditions,
          title: doc.data().title,
          weight: doc.data().weight
        }));
        resolve(products);
      },
      (error) => {
        console.error('Ошибка при получении данных:', error.message);
        reject(error);
      }
    );

    return () => unsubscribe();
  });
};

function useGetProducts() {
  const { data, error, isLoading } = useQuery<TProducts[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    refetchOnWindowFocus: true,
    retry: (error: unknown) => {
      if (error instanceof FirebaseError && error.code === 'unavailable') {
        return true;
      }
      return false;
    }
  });

  if (isLoading) {
    return { products: [], isLoading: true, error: null };
  }

  if (error) {
    console.error('Не удалось получить данные:', (error as FirebaseError).message);
    return { products: [], isLoading: false, error };
  }

  return { products: data || [], isLoading: false, error: null };
}

export default useGetProducts;
