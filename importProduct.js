import { db } from './src/config/firebase-config.js';
import { productList } from './src/mock/mock.js';
import { collection, addDoc } from 'firebase/firestore';

async function importProducts() {
  const productsCollection = collection(db, 'products');

  for (const product of productList) {
    try {
      await addDoc(productsCollection, product);
      console.log(`Продукт ${product.title} добавлен в Firestore`);
    } catch (error) {
      console.error('Ошибка добавления продукта:', error);
    }
  }
}

importProducts();
