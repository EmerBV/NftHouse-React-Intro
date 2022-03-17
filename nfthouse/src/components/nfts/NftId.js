import React from 'react'

import Header from '../../components/header/Header'
/* import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router' */
import NFTImage from '../nft/NFTImage'
import NftDetails from '../../components/nft/NftDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import Purchase from '../../components/common/Purchase'

const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
}

const NftId = () => {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              {/* <NFTImage selectedNft={selectedNft} /> */}
              <NFTImage />
            </div>
            <div className={style.detailsContainer}>
              {/* <GeneralDetails selectedNft={selectedNft} /> */}
              <NftDetails />
              {/* <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
              /> */}
              <Purchase />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  )
}

export default NftId