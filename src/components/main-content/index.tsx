import Approach from '../approach';
import GetPrice from '../getPrice';
import Hero from '../hero';
import Price from '../price';
import ProductList from '../product-list';
import { productList } from '../../mock/mock';
import Quality from '../quality';

function MainContent() {
  const itemsPerPage = 3;

  return (
    <main className='content'>
      <Hero />
      <ProductList items={productList.slice(0, itemsPerPage)} />
      <Quality />
      <ProductList items={productList.slice(itemsPerPage, itemsPerPage * 2)} />
      <Approach />
      <ProductList items={productList.slice(itemsPerPage * 2)} />
      <Price />
      <GetPrice />
    </main>
  );
}

export default MainContent;
