import { Link } from 'react-router-dom';
import logo from 'public/logo.svg';
function Logo() {
  return (
    <Link to='/' className='logo'>
      <img src={logo} loading='lazy' alt='' />
    </Link>
  );
}

export default Logo;
