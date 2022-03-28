import { useNavigate } from "react-router-dom"

import NftImg from "../../assets/1.png"
import EthLogo from "../../assets/eth.svg"

import { BiHeart } from "react-icons/bi"

const style = {
  nftWrapper:
    "bg-[#303339] max-w-sm shadow-lg rounded-2xl overflow-hidden cursor-pointer border border-[#151b22] transition ease-[0] hover:-translate-y-1",
  imgContainer: "h-2/3 w-full overflow-hidden flex justify-center items-center",
  nftImg: "w-full",
  details: "p-3",
  info: "flex justify-between text-[#e4e8eb] drop-shadow-xl",
  infoLeft: "flex-wrap flex-0.6",
  collectionName: "md:font-semibold font-medium text-sm text-[#8a939b]",
  assetName: "md:font-bold font-semibold text-lg mt-2",
  infoRight: "text-right flex-0.4",
  priceTag: "md:font-semibold font-medium text-sm text-[#8a939b]",
  priceValue:
    "flex items-center md:text-xl text-lg md:font-bold font-semibold mt-2",
  cardEthLogo: "h-5 mr-2",
  likes:
    "text-[#8a939b] md:font-bold font-semibold flex items-center w-full justify-end mt-3 hover:text-red-500 cursor-pointer mr-2",
  likeIcon: "md:text-xl text-lg items-center justify-center",
}

const NftCard = ({ id, name, photo, likes, price }) => {
  const navigate = useNavigate()

  return (
    <div className={style.nftWrapper}>
      <div
        className={style.imgContainer}
        onClick={() => {
          navigate({
            pathname: `/adverts/${id}`,
          })
        }}
      >
        <img className={style.nftImg} src={photo || NftImg} alt="" />
      </div>

      <div className={style.details}>
        <div className={style.info}>
          <div className={style.infoLeft}>
            <div className={style.collectionName}>{}</div>
            <div className={style.assetName}>{name}</div>
          </div>

          <div className={style.infoRight}>
            <div className={style.priceTag}>Price</div>
            <div className={style.priceValue}>
              <img className={style.cardEthLogo} src={EthLogo} alt="" />
              {price}
            </div>
          </div>
        </div>
        <div className={style.likes}>
          <span className={style.likeIcon}>
            <BiHeart> {likes}</BiHeart>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NftCard
