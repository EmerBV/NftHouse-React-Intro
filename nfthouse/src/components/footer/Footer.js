import React from "react";

import "../../index.css";

import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

const style = {
    footerContainer: `bg-[#04111d] py-[0.2rem] items-center justify-center bottom-0 w-full relative`,
    social: `flex items-center px-[1.2rem] pt-[0.4rem] justify-center`,
    socialItem: `text-white hover:text-[#42a0ff] cursor-pointer px-[1.2rem]`,
    list: `flex py-[0.4rem] text-center justify-center`,
    listItem: `text-white hover:text-[#42a0ff] cursor-pointer px-[1.2rem]`,
    copyright: `text-[#8a939b] text-center block mb-[0.4rem]`,
}

const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <div className={style.social}>
                <a className={style.socialItem} href="#"><AiOutlineTwitter /></a>
                <a className={style.socialItem} href="#"><AiFillInstagram /></a>
                <a className={style.socialItem} href="#"><FaDiscord /></a>
                <a className={style.socialItem} href="#"><AiOutlineYoutube /></a>
            </div>
        
            <ul className={style.list}>
                <li>
                    <a className={style.listItem} href="#">Privacy Policy</a>
                </li>
                <li>
                    <a className={style.listItem} href="#">About</a>
                </li>
                <li>
                    <a className={style.listItem} href="#">Terms of Service</a>
                </li>
                <li>
                    <a className={style.listItem} href="#">Contact Us</a>
                </li>
            </ul>
            <p className={style.copyright}>NftHouse <span>&copy;</span> 2022.</p>
        </footer>
    );
};

export default Footer;