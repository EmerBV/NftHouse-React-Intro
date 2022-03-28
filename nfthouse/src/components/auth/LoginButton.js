import { useContext } from "react";
import { Link } from "react-router-dom";

import { logout } from "../auth/service";
import AuthContext from "./context";

import { IoMdWallet } from "react-icons/io";

const style = {
  loginButton:
    "text-[#8a939b] text-[38px] font-extrabold hover:text-white duration-500 cursor-pointer md:my-0 my-7 px-0 md:px-3 flex md:flex items-center justify-between",
  loginText: "font-extrabold text-[20px] pl-3",
};

function LoginButton({ className }) {
  const { isLogged, handleLogout: onLogout } = useContext(AuthContext);

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <button
      className={`${style.loginButton} ${className}`}
      onClick={handleLogoutClick}
      title="Logout"
    >
      <IoMdWallet />
      <span className={style.loginText}>Logout</span>
    </button>
  ) : (
    <button
      as={Link}
      to="/login"
      className={`${style.loginButton} ${className}`}
      title="Login"
    >
      <IoMdWallet />
      <span className={style.loginText}>Login</span>
    </button>
  );
}

export default LoginButton;
