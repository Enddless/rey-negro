import { useEffect, useState } from 'react';
import { productsSlice } from '../../store/slice/products';
import { useAppDispatch } from '../../types/store';
import { TProductsBasket } from '../../types/types';

type TProductProps = {
  item: TProductsBasket;
};

function BasketCard({ item }: TProductProps) {
  const dispatch = useAppDispatch();

  const handleDeleteProduct = () => {
    dispatch(productsSlice.actions.deleteProduct({ id: item.id }));
  };
  const handleIncrement = () => {
    dispatch(productsSlice.actions.increment({ id: item.id }));
  };

  const handleDecrement = () => {
    dispatch(productsSlice.actions.decrement({ id: item.id }));
  };

  const [total, setTotal] = useState(0);
  useEffect(() => {
    const result = item.count * item.price;
    setTotal(result);
  }, [item.count, item.price]);

  return (
    <div className='basket__data'>
      <div className='basket__data-icon' onClick={handleDeleteProduct}>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_1222_37750)'>
            <path
              d='M1.42859 5H18.5714'
              stroke='white'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M3.57141 5H16.4286V17.8571C16.4286 18.236 16.278 18.5994 16.0101 18.8673C15.7423 19.1351 15.3788 19.2857 15 19.2857H4.99998C4.6211 19.2857 4.25774 19.1351 3.98983 18.8673C3.72193 18.5994 3.57141 18.236 3.57141 17.8571V5Z'
              stroke='white'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M6.42859 5.00007V4.28578C6.42859 3.33858 6.80486 2.43017 7.47463 1.7604C8.1444 1.09063 9.05282 0.714355 10 0.714355C10.9472 0.714355 11.8556 1.09063 12.5254 1.7604C13.1952 2.43017 13.5714 3.33858 13.5714 4.28578V5.00007'
              stroke='white'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M7.85718 9.28784V15.0043'
              stroke='white'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M12.1428 9.28784V15.0043'
              stroke='white'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_1222_37750'>
              <rect width='20' height='20' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className='basket__data-top'>
        <img
          src={item.img}
          loading='lazy'
          alt=' photo product'
          width={200}
          height={200}
        />
        <div className='basket__count'>
          <div
            className='basket__count-previos'
            data-count='-'
            onClick={handleDecrement}></div>
          <div className='basket__count-current'>{item.count}</div>
          <div
            className='basket__count-next'
            data-count='+'
            onClick={handleIncrement}></div>
        </div>
      </div>
      <div className='basket__content'>
        <p className='basket__content-title'>{item.title}</p>
        <p className='basket__content-price'>{item.price} ₽</p>
      </div>
      <div className='basket__total'>{total} ₽</div>
    </div>
  );
}

export default BasketCard;
