import React from "react"

import "../../index.css"

import { AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

const style = {
    footerContainer: `bg-[#04111d] py-[0.2rem] items-center justify-center bottom-0 w-full inline-block relative`,
    joinText: `flex justify-center text-xl font-extrabold text-white pt-2`,
    social: `flex items-center px-[1.2rem] pt-[0.4rem] justify-center`,
    iconWrapper: `flex bg-[#8a939b] hover:bg-[#42a0ff] rounded-lg m-2.5`,
    socialItem: `text-white text-[32px] cursor-pointer px-[1.2rem] py-[1rem]`,
    list: `flex py-[0.4rem] text-center justify-center`,
    listItem: `text-white hover:text-[#42a0ff] cursor-pointer px-[1.2rem]`,
    copyrightContainer: `flex justify-center pb-4`,
    copyright: `text-[#8a939b] text-center block`,
}

const Footer = () => {
    return (
        <footer className={style.footerContainer}>
            <div className={style.joinText}>
                Join the community
            </div>
            <div className={style.social}>
                <div className={style.iconWrapper}>
                    <a className={style.socialItem} href="#"><AiOutlineTwitter /></a>
                </div>
                <div className={style.iconWrapper}>
                    <a className={style.socialItem} href="#"><AiFillInstagram /></a>
                </div>
                <div className={style.iconWrapper}>
                    <a className={style.socialItem} href="#"><FaDiscord /></a>
                </div>
                <div className={style.iconWrapper}>
                    <a className={style.socialItem} href="#"><AiFillYoutube /></a>
                </div>
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

            <div className={style.copyrightContainer}>
                <p className={style.copyright}>NftHouse <span>&copy;</span> 2022.</p>
            </div>
            
        </footer>
    );
};

export default Footer;