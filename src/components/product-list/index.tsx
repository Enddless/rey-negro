import { TProducts } from '../../types/types';
import ProductCard from '../product-card';
import Spinner from '../spinner';

type ProductListProps = {
  items: TProducts[];
  isLoading: boolean;
};

function ProductList({ items, isLoading }: ProductListProps) {
  return (
    <section className='section section--product' id='Каталог'>
      <div className='section__body'>
        <div className='product container'>
          <div className='product__inner'>
            {isLoading ? (
              <Spinner />
            ) : (
              <ul className='product__list grid grid--3'>
                {items.map((item) => {
                  return <ProductCard key={item.id} item={item} />;
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
