import EthLogo from '../../assets/eth.svg'
import NftImg from '../../assets/1.png'

import { AiOutlineHeart } from 'react-icons/ai'

const style = {
    nftWrapper: `bg-[#303339] max-w-sm rounded-xl overflow-hidden border border-[#151c22] mx-[20px]`,
    topBar: `bg-[#303339] p-2`,
    topBarContent: `flex items-center`,
    ethLogo: `h-8`,
    //likesCounter: `flex-1 flex items-center justify-end`,
    likesCounter: `text-[#8a939b] md:font-bold font-semibold flex flex-1 items-center justify-end`,
    likeIcon: `md:text-2xl text-lg items-center hover:text-red-500 cursor-pointer mr-2`,
    likeText: `md:text-xl text-lg`,
    nftImg: `w-full`,
}

const NFTImage = ({ photo }) => {

    return (
        <div className={style.nftWrapper}>
            <div className={style.topBar}>
                <div className={style.topBarContent}>
                    <img className={style.ethLogo} src={EthLogo} alt='' />
                    <div className={style.likesCounter}>
                        <AiOutlineHeart className={style.likeIcon} />
                        <span className={style.likeText}>
                            2.3K
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <img className={style.nftImg}  src={photo?photo:NftImg} alt="" />
            </div>
        </div>
    )
}

export default NFTImage