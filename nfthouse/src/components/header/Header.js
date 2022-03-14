import React, { useState } from "react";

import "../../index.css";

import Logo from '../../assets/nftHouse-brand.png';

import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const style = {
    navWrapper: `min-w-full min-h-full bg-[#04111d] py-[0.2rem] items-center h-[95px] sticky top-0 z-[110] transition-[top] duration-[0.5s] ease-[0s] flex md:flex shadow-lg`,
    //navWrapper: `shadow-lg w-full h-[72px] top-0 sticky z-[110] block flex`,
    //navContainer: `flex items-center justify-between bg-[#04111d] md:px-10 px-7`,
    logoContainer: `md:flex items-center pl-[20px]`,
    logo: `flex items-center ml-[8px]`,
    logoImg: `block items-center`,
    //brandName: `block w-[130px] mb-[2px] ml-[10px]`,
    //searchBar: `hidden lg:flex md:flex flex-1 bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] items-center  text-center`,
    searchBar: `flex w-full items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] md:my-0 my-7 font-extrabold text-[20px]`,
    searchIcon: `text-[#8a939b] text-3xl mx-6 items-center`,
    //searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    searchInput: `md:flex md:items-center h-[60px] w-full border-0 bg-transparent outline-0 ring-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    //headerItems: `hidden lg:flex md:flex justify-end items-center`,
    headerItems: `md:flex items-center md:bg-[#04111d] w-full justify-between md:px-3 px-0`,
    //headerItem: `lg:px-4 md:px-3 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    //headerItemContainer: `md:flex m-0`,
    headerItem: `font-extrabold text-[20px] text-[#c8cacd] hover:text-white duration-500 cursor-pointer md:my-0 my-7 md:px-3 px-0 flex items-center justify-between`,
    //headerIcon: `text-[#8a939b] text-3xl font-black lg:px-4 md:px-3 hover:text-white cursor-pointer`,
    headerIconContainer: `md:flex`,
    headerIcon: `text-[#8a939b] text-[38px] font-extrabold hover:text-white duration-500 cursor-pointer md:my-0 my-7 px-0 md:px-3 flex md:flex items-center justify-between`,
    menuBtn: `text-[38px] font-extrabold text-white absolute right-8 top-8 cursor-pointer md:hidden items-center text-center`,
    itemsContainer: `md:flex items-center absolute md:static bg-[#262626] left-0 w-full md:px-0 px-10`, 
}

const Header = () => {

  const [open,setOpen] = useState(false);
  
  return (
    
    <nav className={style.navWrapper}>
      
      <a className={style.logoContainer} href="index.html">
        <div className={style.logo}>
          <img className={style.logoImg} src={Logo} width="220px" alt="logo" />
        </div>
      </a>

      <div onClick={() => setOpen(!open)} className={style.menuBtn}>
        {!open ? (<AiOutlineMenu />):(<AiOutlineClose />)}
      </div>

      <div className={`${style.itemsContainer} ${open ? 'top-[95px]':'top-[-490px]'}`}>
        <div className={style.headerItems}>
          <div className={style.searchBar}>
            <div className={style.searchIcon}>
              <AiOutlineSearch />
            </div>
            <input className={style.searchInput} placeholder="Search items, collections and accounts" />
          </div>
          
          <div className={style.headerItem}>
            <a href="collections.html">
              Collections
            </a>
          </div>
          <div className={style.headerItem}>
            <a href="stats.html">
              Stats
            </a>
          </div>
          <div className={style.headerItem}>
            <a href="resources.html">
              Resources
            </a>
          </div>
          <div className={style.headerItem}>
            <a href="create.html">
              Create
            </a>
          </div>
          <div className={style.headerIconContainer}>
            <div className={style.headerIcon}>
              <a href="login.html">
                <CgProfile title="Account" />
              </a>
            </div>
            <div className={style.headerIcon}>
              <a href="login.html">
                <MdOutlineAccountBalanceWallet title="Login / Logout" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </nav>

  );
  
};

export default Header;
