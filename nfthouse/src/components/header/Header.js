import React from "react";

import "../../index.css";

import Logo from '../../assets/nftHouse-logo-2.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const style = {
    navWrapper: `max-w-full bg-[#04111d] px-[1.2rem] py-[0.2rem] items-center h-[72px] sticky top-0 z-[110] transition-[top] duration-[0.5s] ease-[0s] flex md:flex justify-between`,
    logoContainer: `mr-3`,
    searchBar: `hidden lg:flex md:flex flex-1 bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] items-center  text-center`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: `hidden lg:flex md:flex justify-end items-center`,
    headerItem: `lg:px-4 md:px-3 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    headerIcon: `text-[#8a939b] text-3xl font-black lg:px-4 md:px-3 hover:text-white cursor-pointer`, 
}

const Header = () => {
  return (
    <nav className={style.navWrapper}>
      <div className={style.logoContainer}>
        <a href="index.html">
          <img src={Logo} width="200" alt="" />
        </a>
      </div>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
            <AiOutlineSearch />
        </div>
        <input className={style.searchInput} placeholder="Search items, collections and accounts" />
      </div>

      <ul className={style.headerItems}>
        <li>
          <a href="collections.html" className={style.headerItem}>
            Collections
          </a>
        </li>
        <li>
          <a href="stats.html" className={style.headerItem}>
            Stats
          </a>
        </li>
        <li>
          <a href="resources.html" className={style.headerItem}>
            Resources
          </a>
        </li>
        <li>
          <a href="create.html" className={style.headerItem}>
            Create
          </a>
        </li>
        <div className={style.headerIcon}>
          <a href="myCollections.html">
            <i className="far fa-user-circle" title="Account"></i>
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
      </ul>

      <div className="hidden space-y-4 bg-[#04111d] px-3 py-2 left-0 top-[72px] z-[110] w-full absolute mobile-menu">
        <div className="bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] items-center  text-center lg:hidden md:hidden flex flex-1">
          <div className={style.searchIcon}>
            <AiOutlineSearch />
          </div>
          <input
            className={style.searchInput}
            placeholder="Search items, collections and accounts"
          />
        </div>
        <ul className="lg:hidden md:hidden sm:block p-0">
          <li>
            <a href="collections.html" className="lg:px-4 md:px-3 font-bold text-[#c8cacd] hover:text-white cursor-pointer p-0">
              Collections
            </a>
          </li>
          <li>
            <a href="stats.html" className="lg:px-4 md:px-3 font-bold text-[#c8cacd] hover:text-white cursor-pointer p-0">
              Stats
            </a>
          </li>
          <li>
            <a href="resources.html" className="lg:px-4 md:px-3 font-bold text-[#c8cacd] hover:text-white cursor-pointer p-0">
              Resources
            </a>
          </li>
          <li>
            <a href="createNft.html" className="lg:px-4 md:px-3 font-bold text-[#c8cacd] hover:text-white cursor-pointer p-0">
              Create
            </a>
          </li>
          <div className="text-[#8a939b] text-3xl font-black lg:px-4 md:px-3 hover:text-white cursor-pointer p-0">
            <a href="myCollections.html">
              <i className="far fa-user-circle" title="Account"></i>
            </a>
          </div>
          <div className="text-[#8a939b] text-3xl font-black lg:px-4 md:px-3 hover:text-white cursor-pointer p-0">
            <a href="login.html">
              <MdOutlineAccountBalanceWallet title="Login / Logout" />
            </a>
          </div>
        </ul>
      </div>

      <button className="lg:hidden md:hidden flex mobile-menu-button">
        <i className="text-white text-2xl fas fa-bars"></i>
      </button>
    </nav>

  );
  
};

/* const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
        menu.classList.toggle("hidden");
}); */

export default Header;
