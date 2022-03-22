import { Link } from 'react-router-dom';

import { logout } from '../auth/service';
import { useAuth } from './context';

import { IoMdWallet } from 'react-icons/io'

const style = {
  loginButton: `text-[#8a939b] text-[38px] font-extrabold hover:text-white duration-500 cursor-pointer flex md:flex items-center`,
  loginText: `font-extrabold text-[20px] text-[#8a939b] hover:text-white duration-500 pl-3`,
}

function LoginButton({ className }) {

  const { isLogged, handleLogout: onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <button className={`${style.loginButton} ${className}`} onClick={handleLogoutClick} title="Login / Logout">
        <IoMdWallet  />
        <span className={style.loginText}>Logout</span>
    </button>
  ) : (
    <button as={Link} to="/login" className={`${style.loginButton} ${className}`} title="Login / Logout">
        <IoMdWallet  />
        <span className={style.loginText}>Login</span>
    </button>
  )
}

export default LoginButton;
