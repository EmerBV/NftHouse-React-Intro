import React from 'react'

import Header from '../../components/header/Header'
/* import { useEffect, useMemo, useState } from 'react'*/
import NFTImage from '../nft/NFTImage'
import NftDetails from '../../components/nft/NftDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import Purchase from '../../components/common/Purchase'

const style = {
    /* wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`, */
    /* container: `container p-6`, */
    /* topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`, */
}

const NftId = () => {
  return (
    <div>
      <Header />
      <div className={`${style.wrapper} flex flex-col items-center container-lg text-[#e5e8eb]`}>
        <div className={`${style.container} container p-6 flex flex-col`}>
          <div className={`${style.topContent} flex flex-col`}>
            <div className={`${style.nftImgContainer} flex-1 mr-4 `}>
              {/* <NFTImage selectedNft={selectedNft} /> */}
              <NFTImage className='md:order-1 order-2' />
            </div>
            <div className={`${style.detailsContainer} flex-[2] ml-4`}>
              {/* <NftDetails selectedNft={selectedNft} /> */}
              <NftDetails className='md:order-2 order-1' />
            </div>
            <div className={`${style.detailsContainer} flex-[3] ml-4`}>
              <Purchase className='order-3' />
            </div>
          </div>
          <ItemActivity className='order-4' />
        </div>
      </div>
    </div>
  )
}

export default NftId