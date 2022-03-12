import React from 'react'

import HeroImg from '../../assets/hero_Img.jpg'
import CardImg from '../../assets/card_Img.jpg'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const style = {
    wrapper: `w-full`,
    /* heroContainer: `relative container justify-center items-center w-full my-2`,
    heroWrapper: `relative w-full my-2`, */
    bgContainer: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://pbs.twimg.com/media/FHo7-W8VcAEnsNh?format=jpg&name=medium')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen justify-center items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[45px] font-bold flex mb-3 mb-6 md:p-0 px-3`,
    heroDescription: `relative text-[#8a939b] text-[24px] mb-6 flex md:p-0 px-3`,
    ctaContainer: `flex md:p-0 px-3`,
    accentedButton: `relative text-lg font-semibold md:px-20 px-6 md:py-4 py-3 bg-[#2081E2] rounded-[10px] mr-5 text-white hover:bg-[#15B2E5] cursor-pointer mb-3 border-[1px] border-[#151B22] justify-center text-center items-center`,
    /* ctaButtonsText: `justify-center text-center`, */
    button: `relative text-lg font-semibold md:px-20 px-6 py-4 bg-[#353840] rounded-[10px] text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer mb-3 border-[1px] border-[#151B22]`,
    cardContainer: `rounded-[3rem] justify-center items-center  hover:shadow-lg transform transition hover:-translate-y-2 mx-3`,
    cardImg: `rounded-t-lg h-full`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    infoImg: `h-[2.25rem] rounded-full`,
    authorContainer: `flex flex-col justify-center ml-4`,
    nameContainer: `flex`,
    nameText: `text-[#1868b7] `,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-2xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}> 
        <div className={style.bgContainer}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <h1 className={style.title}>
                        Discover, collect and sell extraordinary NFTs
                    </h1>
                    <span className={style.heroDescription}>
                        NftHouse is the world's first and largest NFT marketplace.
                    </span>
                    <div className={style.ctaContainer}>
                        <button className={style.accentedButton}>
                            <a href="collections.html">Explore</a>
                        </button>
                        <button className={style.button}>
                            <a href="createNft.html">Create</a>
                        </button>
                    </div>
                </div>
                <div className={style.cardContainer}>
                    <img className={style.cardImg} src={CardImg} alt="" />
                    <div className={style.infoContainer}>
                        <img className={style.infoImg} src="https://pbs.twimg.com/media/FI231MlaIAADj_q?format=jpg&name=small" alt="" />
                        <div className={style.authorContainer}>
                            <div className={style.nameContainer}>AzukiZen</div>
                            <a className={style.nameText} href="">Team Azuki</a>
                        </div>
                        <div className={style.infoIcon}>
                            <AiOutlineInfoCircle />
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default Hero;
