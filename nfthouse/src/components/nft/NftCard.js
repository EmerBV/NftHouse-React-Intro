import React from 'react'

import NftImg from '../../assets/1.png';
import EthLogo from '../../assets/eth.svg'

import { BiHeart } from 'react-icons/bi'

const style = {
    nftWrapper: `bg-[#303339] flex-auto w-[14rem] h-[22rem] my-10 mx-5 rounded-2xl overflow-hidden cursor-pointer border border-[#151b22] transition ease-[0] hover:-translate-y-1`,
    imgContainer: `h-2/3 w-full overflow-hidden flex justify-center items-center`,
    nftImg: `w-full object-contain`,
    details: `p-3`,
    info: `flex justify-between text-[#e4e8eb] drop-shadow-xl`,
    infoLeft: `flex-wrap flex-0.6`,
    collectionName: `font-semibold text-sm text-[#8a939b]`,
    assetName: `font-bold text-lg mt-2`,
    infoRight: `text-right flex-0.4`,
    priceTag: `font-semibold text-sm text-[#8a939b]`,
    priceValue: `flex items-center text-xl font-bold mt-2`,
    cardEthLogo: `h-5 mr-2`,
    likes: `text-[#8a939b] font-bold flex items-center w-full justify-end mt-3 hover:text-red-500 cursor-pointer mr-2`,
    likeIcon: `text-xl items-center justify-center`,


}

const NftCard = () => {
  return (
        <div className={style.nftWrapper}>
            <a href="nftDetail.html">
                <div className={style.imgContainer}>
                    <img className={style.nftImg} src={NftImg} alt="nft-image" />
                </div>
                <div className={style.details}>
                    <div className={style.info}>
                        <div className={style.infoLeft}>
                            <div className={style.collectionName}>Azuki</div>
                            <div className={style.assetName}>Azuki # 1</div>
                        </div>
                        <div className={style.infoRight}>
                            <div className={style.priceTag}>Price</div>
                            <div className={style.priceValue}>
                                <img className={style.cardEthLogo} src={EthLogo} alt="" />0.1
                            </div>
                        </div>
                    </div>
                    <div className={style.likes}>
                        <span className={style.likeIcon}>
                            <BiHeart> 238</BiHeart>
                        </span>
                    </div>
                </div>
            </a>
        </div>
  )
}

export default NftCard