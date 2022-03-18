import React from 'react'

import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const style = {
  loginButton: `text-[#8a939b] text-[38px] font-extrabold hover:text-white duration-500 cursor-pointer flex md:flex items-center`,
  loginText: `font-extrabold text-[20px] text-[#8a939b] hover:text-white duration-500 pl-3`,
}

export const LoginButton = () => {
  return (
    <button className={style.loginButton} title="Login / Logout">
        <MdOutlineAccountBalanceWallet  />
        <span className={style.loginText}>Login</span>
    </button>
  )
}

export default LoginButton;
