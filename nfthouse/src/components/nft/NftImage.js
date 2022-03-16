import React from 'react'

import EthLogo from '../../assets/eth.svg'
import NftImg from '../../assets/1.png'

import { AiOutlineHeart } from 'react-icons/ai'

const style = {
    nftWrapper: `bg-[#303339] max-w-sm rounded-t-2xl overflow-hidden border border-[#151c22]`,
    topBar: `bg-[#303339] p-2`,
    topBarContent: `flex items-center`,
    //likesCounter: `flex-1 flex items-center justify-end`,
    likesCounter: `text-[#8a939b] md:font-bold font-semibold flex flex-1 items-center justify-end`,
    likeIcon: `md:text-2xl text-lg items-center hover:text-red-500 cursor-pointer mr-2`,
    likeText: `md:text-xl text-lg`,
    nftImg: `w-full`,
}
  
const NftImage = ({ selectedNft }) => {
    return (
        <div className={style.nftWrapper}>
            <div className={style.topBar}>
                <div className={style.topBarContent}>
                    <img src={EthLogo} alt='' />
                    <div className={style.likesCounter}>
                        <AiOutlineHeart className={style.likeIcon} />
                        <span className={style.likeText}>
                            2.3K
                        </span>
                    </div>
                </div>
            </div>
            <div>
                {/* <img src={selectedNft?.image} /> */}
                <img className={style.nftImg} src={NftImg} alt="" />
            </div>
        </div>
    )
}

export default NftImage