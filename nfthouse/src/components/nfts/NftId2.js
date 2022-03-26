import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../header/Header'

import { getAdvert } from './service'

import NFTImage from '../nft/NFTImage'
import NftDetails from '../nft/NftDetails'
import ItemActivity from '../nft/ItemActivity'
import Purchase from '../common/Purchase'

const style = {
    nftIdwrapper: `w-full pt-[8px] pb-[16px] block container-lg text-[#e5e8eb]`,
    nftIdContainer: `flex flex-col h-full flex-1`,
    flexColContainer: `items-center flex flex-col`,
    generalAssetWrapper: `px-4 w-[1280px] max-w-full pt-[8px] pb-[16px] block`,
    assetWrapper: `m-0 p-0 block`,
    assetContainer: `block`,
    topContent: `md:flex flex-row block`,
    cardContainer: `flex-[3] w-full md:max-w-[43%] flex md:block my-[20px]`,
    detailsPurchaseWrapper: `flex-[4] block`,
    detailsPurchaseContainer: `mx-[20px] mt-[20px] mb-[15px] flex flex-wrap flex-col justify-between`,
    detailsContainer: `block items-center justify-between mb-[5px] max-w-full`,
    purchaseWrapper: `m-[20px] block`,
    purchaseContainer: `block`,
    bottomWrapper: `w-full mt-0 mb-[20px] block`,
    bottomContainer: `overflow-auto w-full block`,
    activityWrapper: `block`,
    activityContainer: `overflow-hidden block`, 
}

const NftId2 = () => {
  const [advert, setAdvert] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAdvert(id)
      .then(advert => setAdvert(advert))
      .catch(() => {
        navigate('/404');
      });
  }, [id, navigate]);

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
                      <NFTImage { ...advert } />
                    </div>
                    <div className={style.detailsPurchaseWrapper}>
                      <div className={style.detailsPurchaseContainer}>
                        <div className={style.detailsContainer}>
                          <NftDetails { ...advert } />
                        </div>
                        <div className={style.purchaseWrapper}>
                          <div className={style.purchaseContainer}>
                            <Purchase { ...advert } />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={style.bottomWrapper}>
                    <div className={style.bottomContainer}>
                      <div className={style.activityWrapper}>
                        <div className={style.activityContainer}>
                          <ItemActivity { ...advert } />
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
      
    </div>
  )
}

export default NftId2