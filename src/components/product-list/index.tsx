import { TProducts } from '../../types/types';
import ProductCard from '../product-card';

type ProductListProps = {
  items: TProducts[];
};

function ProductList({ items }: ProductListProps) {
  return (
    <section className='section section--product'>
      <div className='section__body'>
        <div className='product container'>
          <div className='product__inner'>
            <ul className='product__list grid grid--3'>
              {items.map((item) => {
                return <ProductCard key={item.id} item={item} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
