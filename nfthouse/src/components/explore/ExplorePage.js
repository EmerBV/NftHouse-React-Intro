import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../header/Header'
import Page from '../layout/Page';

import { getAdverts } from '../nfts/service';

import NftCard from '../nft/NftCard2'

import toast, { Toaster } from 'react-hot-toast'
import { IoIosArrowDown } from 'react-icons/io'

const style = {
    collectionWrapper: `overflow-hidden py-0 px-[28px] block`,
    nftCardWrapper: `grid 2xl:grid-cols-9 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mx-0 items-center justify-center py-8`,

}

const ExplorePage = () => {
  const [adverts, setAdverts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAdverts(id)
      .then(advert => setAdverts(advert))
      .catch(() => {
        navigate('/404');
      });
  }, [id, navigate]);

  
  toast.error("Nothing to show!")

  return (
    <Page>

      <Header />

      <div className={style.collectionWrapper}> 
        <div className='lg:flex md:block block flex-wrap bg-[#202225] w-full justify-between items-center mt-[24px] mb-[10px] mx-0'>
        
          <div className='block my-[16px] mx-0 bg-[#202225]'>
            <p className='font-normal text-[18px] text-white'>Items</p>
          </div>
          
          <div className='md:flex block max-w-full mt-0 bg-[#202225] justify-items-end z-30 flex-nowrap'>

            <div className='grow block order-1 w-full text-white font-normal text-[18px]'>
              <select className='flex bg-[#353840] hover:bg-[#4c505c] md:mr-[8px] h-[50px] rounded-[10px] border border-[#151B22] min-w-[200px] p-[12px] cursor-pointer'>
                <option className='cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]'>
                All items
                </option>
                <option className='cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]'>
                Buy Now
                </option>
                <option className='cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]'>
                Has Offers
                </option>
                {/* <span className='justify-center flex flex-col ml-[12px] cursor-pointer'>
                  <IoIosArrowDown className='inline-block font-normal text-[24px] cursor-pointer text-[#8A939B]' />
                </span> */}
              </select>
            </div>

            <div className='grow md:mt-0 mt-3 ml-0 md:ml-[8px] block order-2 w-full text-white font-normal text-[18px]'>
              <select className='flex bg-[#353840] hover:bg-[#4c505c] h-[50px] rounded-[10px] border border-[#151B22] min-w-[200px] p-[12px] cursor-pointer'>
                <option className='cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]'>
                Sort by
                </option>
                <option className='cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]'>
                Price: Low to High
                </option>
                <option className='cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]'>
                Price: High to Low
                </option>
                {/* <span className='justify-center flex flex-col ml-[12px] cursor-pointer'>
                  <IoIosArrowDown className='inline-block font-normal text-[24px] cursor-pointer text-[#8A939B]' />
                </span> */}
              </select>
            </div>

          </div>
        </div>
     
        {adverts.length ?  (

          <>
                    
            <div className={style.nftCardWrapper}>
              
              {adverts.map((advert, id) => (
                
                <NftCard
                  key={id}
                  advert={advert}  
                  {...advert} 
                />

              ))}
                  
            </div>
          
          </>
                     
        ) : null }

      </div>

    </Page>
  )
}

export default ExplorePage