import { useState, useEffect, Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getAdvert } from '../nfts/service';
import NftCard from '../nft/NftCard2'
import { login as getUser } from '../auth/service'

import { AiFillHeart } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'

const style = {
  wrapper: `flex`,
  infoContainer: `h-36 flex flex-col flex-1 justify-between mb-6`,
  accent: `text-[#2081e2]`,
  nftTitle: `text-3xl font-extrabold text-white`,
  otherInfo: `flex`,
  ownedBy: `text-[#8a939b] mr-2`,
  likes: `flex items-center text-[#8a939b]`,
  likeIcon: `mr-1`,
  actionButtonsContainer: `w-44`,
  actionButtons: `flex container justify-between text-[1.4rem] border-2 rounded-lg text-white`,
  actionButton: `my-2`,
  divider: `border-r-2`,
}

const NftDetails = ({ selectedNft, id, name }) => {

  return (
    <div className={style.wrapper}>
      <div className={style.infoContainer}>
        <div className={style.accent}>{id}</div>
        <div className={style.nftTitle}>{name}</div>
        {/* <div className={style.nftTitle}>Azuki</div> */}
        <div className={style.otherInfo}>
          <div className={style.ownedBy}>
            Owned by <span className={style.accent}>KC</span>
          </div>
          <div className={style.likes}>
            <AiFillHeart className={style.likeIcon} />2.3K favorites
          </div>
        </div>
      </div>
      <div className={style.actionButtonsContainer}>
        <div className={style.actionButtons}>
          <div className={`${style.actionButton} ml-2`}>
            <MdRefresh />
          </div>
          <div className={style.divider} />
          <div className={style.actionButton}>
            <RiShareBoxLine />
          </div>
          <div className={style.divider} />
          <div className={style.actionButton}>
            <GiShare />
          </div>
          <div className={style.divider} />
          <div className={`${style.actionButton} mr-2`}>
            <FiMoreVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftDetails