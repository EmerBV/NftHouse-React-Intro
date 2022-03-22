import React from 'react'

import Header from '../header/Header'
import Footer from '../footer/Footer'

import NFTImage from '../nft/NFTImage'
import NftDetails from '../nft/NftDetails'
import ItemActivity from '../nft/ItemActivity'
import Purchase from '../common/Purchase'

const style = {
    nftIdwrapper: `w-full pt-[8px] pb-[16px] block bg-white container-lg`,
    nftIdContainer: `flex flex-col h-full flex-1 bg-gray-700`,
    flexColContainer: `items-center flex flex-col bg-red-500`,
    generalAssetWrapper: `px-4 w-[1280px] max-w-full pt-[8px] pb-[16px] block bg-blue-600`,
    assetWrapper: `m-0 p-0 block bg-gray-400'`,
    assetContainer: `block bg-black`,
    topContent: `md:flex flex-row block bg-red-500`,
    cardContainer: `flex-[3] w-full md:max-w-[43%] flex md:block bg-yellow-400 my-[20px]`,
    detailsPurchaseWrapper: `flex-[4] block bg-green-500`,
    detailsPurchaseContainer: `mx-[20px] mt-[20px] mb-[15px] flex flex-wrap flex-col justify-between bg-orange-500`,
    detailsContainer: `block items-center justify-between mb-[5px] max-w-full`,
    purchaseWrapper: `m-[20px] block bg-pink-700`,
    purchaseContainer: `block bg-blue-900`,
    bottomWrapper: `w-full mt-0 mb-[20px] block bg-gray-500`,
    bottomContainer: `overflow-auto w-full block bg-purple-700`,
    activityWrapper: `block bg-yellow-200`,
    activityContainer: `overflow-hidden block`, 
}

const NftId2 = () => {
  return (
    <div>

      <Header />
      
      <div className={style.nftIdwrapper}>
        <div className={style.nftIdContainer}>
          <div className={style.flexColContainer}>
            <div className={style.generalAssetWrapper}>
              <div className={style.assetWrapper}>
                <div className={style.assetContainer}>
                  <div className={style.topContent}>
                    <div className={style.cardContainer}>
                      <NFTImage />
                    </div>
                    <div className={style.detailsPurchaseWrapper}>
                      <div className={style.detailsPurchaseContainer}>
                        <div className={style.detailsContainer}>
                          <NftDetails />
                        </div>
                        <div className={style.purchaseWrapper}>
                          <div className={style.purchaseContainer}>
                            <Purchase />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.bottomWrapper}>
                    <div className={style.bottomContainer}>
                      <div className={style.activityWrapper}>
                        <div className={style.activityContainer}>
                          <ItemActivity />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default NftId2