import { TProducts } from '../../types/types';
import Button from '../../shared/button';
import { useAppDispatch } from '../../types/store';
import { productsSlice } from '../../store/slice/products';

type TProductProps = {
  item: TProducts;
};
function ProductCard({ item }: TProductProps) {
  const dispatch = useAppDispatch();
  const addBasket = (product: TProducts) => {
    dispatch(productsSlice.actions.addBasket(product));
  };
  return (
    <li className='product__item'>
      <div className='product__photo'>
        <img
          src={item.img}
          loading='lazy'
          alt='photo product'
          width={583}
          height={547.26}
        />
      </div>
      <div className='product__info-wrapper'>
        <div className='product__description'>
          <p className='product__description-title'>
            <span>{item.title}</span>
          </p>
          <p className='product__description-quality'>
            <span>{item.quality}</span>
          </p>
          <p className='product__description-compound'>
            Состав: <span>{item.compound}</span>
          </p>
          <p className='product__description-conditions'>
            Условия хранения: <span>{item.storage_conditions}</span>
          </p>
          <p className='product__description-date'>
            Срок годности: <span>{item.best_before_date}</span>
          </p>
          <p className='product__description-weight'>
            Масса нетто: <span>{item.weight}</span>
          </p>
          <p className='product__description-price'>
            Цена: <span>{item.price} ₽</span>
          </p>
        </div>

        <Button
          text='Купить'
          onClick={() => addBasket(item)}
          cls='button--bordered product__button'
        />
      </div>
    </li>
  );
}

export default ProductCard;
