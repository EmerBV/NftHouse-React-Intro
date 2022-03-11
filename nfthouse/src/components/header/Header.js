import React, { useState } from "react";

import "../../index.css";

import Logo from '../../assets/nftHouse-logo-2.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

const style = {
    //navWrapper: `max-w-full bg-[#04111d] px-[1.2rem] py-[0.2rem] items-center h-[72px] sticky top-0 z-[110] transition-[top] duration-[0.5s] ease-[0s] flex md:flex justify-between`,
    navWrapper: `w-full fixed top-0 left-0 z-[110] items-center`,
    navContainer: `md:flex items-center justify-between bg-[#04111d] md:px-10 px-7`,
    logoContainer: `mr-3`,
    //searchBar: `hidden lg:flex md:flex flex-1 bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] items-center  text-center`,
    searchBar: `flex flex-1 md:items-center md:text-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] md:my-0 my-7`,
    searchIcon: `text-[#8a939b] font-bold text-xl text-center py-3 mx-3 justify-center`,
    //searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    searchInput: `md:flex md:items-center h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    //headerItems: `hidden lg:flex md:flex justify-end items-center`,
    headerItems: `md:flex items-center md:bg-[#04111d] w-full`,
    //headerItem: `lg:px-4 md:px-3 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerItem: `md:ml-8 font-bold text-[#c8cacd] hover:text-white duration-500 cursor-pointer md:my-0 my-7`,
    //headerIcon: `text-[#8a939b] text-3xl font-black lg:px-4 md:px-3 hover:text-white cursor-pointer`,
    headerIcon: `md:ml-8 text-[#8a939b] text-3xl hover:text-white duration-500 cursor-pointer md:my-0 my-7`,
    menuBtn: `text-3xl text-white absolute right-10 top-7 cursor-pointer md:hidden`,
    itemsContainer: `md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#262626] md:z-auto z-[-1] left-0 w-full md:px-0 px-10`, 
}

const Header = () => {

  const [open,setOpen] = useState(false);
  
  return (
    
    <nav className={style.navWrapper}>
      <div className={style.navContainer}>
        <div className={style.logoContainer}>
          <a href="index.html">
            <img src={Logo} width="200" alt="logo" />
          </a>
        </div>

        <div onClick={() => setOpen(!open)} className={style.menuBtn}>
          {!open ? (<AiOutlineMenu />):(<AiOutlineClose />)}
        </div>

        <div className={`${style.itemsContainer} ${open ? 'top-20':'top-[-490px]'}`}>
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
