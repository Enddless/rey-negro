import { Link } from 'react-router-dom';
import Logo from '../../shared/logo';
import { useAppSelector } from '../../types/store';

function Header() {
  const lengthBasket = useAppSelector((state) => state.products.basket).length;
  return (
    <header className='header'>
      <div className='header__inner  container'>
        <Logo />
        <nav className='header__menu'>
          <ul className='header__menu-list'>
            <li className='header__menu-item'>
              <Link to='/' className='header__menu-link'>
                Главная
              </Link>
            </li>
            <li className='header__menu-item'>
              <Link to='/' className='header__menu-link'>
                Наш товар
              </Link>
            </li>
            <li className='header__menu-item'>
              <Link to='/' className='header__menu-link'>
                Получить прайс
              </Link>
            </li>
            <li className='header__menu-item header__menu-item--basket-container'>
              <Link to='/basket'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <g clipPath='url(#clip0_1222_32391)'>
                    <path
                      d='M17.4026 10.7144H5.7169L4.28833 3.57153H18.574C18.6786 3.57192 18.7816 3.5952 18.8761 3.63978C18.9706 3.68433 19.0541 3.74909 19.1209 3.82946C19.1877 3.90982 19.236 4.00386 19.2624 4.10492C19.2889 4.20599 19.2929 4.31162 19.274 4.41439L18.1026 10.1287C18.0753 10.2939 17.9896 10.4438 17.8611 10.5513C17.7327 10.6588 17.57 10.7166 17.4026 10.7144Z'
                      stroke='white'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M4.28835 3.5715L3.68835 1.28578C3.65542 1.12445 3.56775 0.979441 3.44019 0.875311C3.31263 0.771181 3.15302 0.714321 2.98835 0.714355H0.716919'
                      stroke='white'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M5.71692 10.7144L6.31692 13.7144C6.34985 13.8757 6.43752 14.0207 6.56508 14.1248C6.69263 14.229 6.85226 14.2858 7.01692 14.2858H15.7169'
                      stroke='white'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15.0026 19.2857C14.6082 19.2857 14.2883 18.9659 14.2883 18.5715C14.2883 18.177 14.6082 17.8572 15.0026 17.8572C15.3972 17.8572 15.7169 18.177 15.7169 18.5715C15.7169 18.9659 15.3972 19.2857 15.0026 19.2857Z'
                      stroke='white'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M7.85979 19.2857C7.46531 19.2857 7.14551 18.9659 7.14551 18.5715C7.14551 18.177 7.46531 17.8572 7.85979 17.8572C8.25428 17.8572 8.57408 18.177 8.57408 18.5715C8.57408 18.9659 8.25428 19.2857 7.85979 19.2857Z'
                      stroke='white'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1222_32391'>
                      <rect width='20' height='20' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <div className=' header__menu-item--basket'>{lengthBasket}</div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
