import React from 'react'

import NftCard from '../nft/NftCard'

import { IoIosArrowDown } from 'react-icons/io'

const style = {
    collectionWrapper: `overflow-hidden min-w-[600px] py-0 px-[28px] block`,
    nftCardWrapper: `grid 2xl:grid-cols-9 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mx-0 items-center justify-center py-8`,

}

const ExplorePage = () => {
  return (
    <div className={style.collectionWrapper}> 
        <div className='lg:flex md:block block flex-wrap bg-[#202225] min-w-[600px] justify-between items-center mt-[24px] mb-[10px] mx-0'>
          <div className='block my-[16px] mx-0 bg-[#202225]'>
            <p className='font-normal text-[18px] text-white'>Items</p>
          </div>
          
          <div className='md:flex block min-w-[600px] max-w-full mt-0 bg-[#202225] justify-items-end z-30 flex-nowrap'>

            <div className='grow block order-1 w-full'>
              <div className='flex bg-[#353840] hover:bg-[#4c505c] mr-[8px] h-[50px] rounded-[10px] border border-[#151B22] w-full p-[12px] cursor-pointer'>
                <input className='cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block py-[1px] px-[2px] bg-transparent text-white font-normal text-[18px]' value='All items'></input>
                <div className='justify-center flex flex-col ml-[12px] cursor-pointer'>
                  <IoIosArrowDown className='inline-block font-normal text-[24px] cursor-pointer text-[#8A939B]' />
                </div>
              </div>
            </div>

            <div className='grow md:mt-0 mt-3 ml-0 md:ml-[8px] block order-2 w-full'>
              <div className='flex bg-[#353840] hover:bg-[#4c505c] h-[50px] rounded-[10px] border border-[#151B22] w-full p-[12px] cursor-pointer'>
                <input className='cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block py-[1px] px-[2px] bg-transparent text-white font-normal text-[18px]' value='Sort by'></input>
                <div className='justify-center flex flex-col ml-[12px] cursor-pointer'>
                  <IoIosArrowDown className='inline-block font-normal text-[24px] cursor-pointer text-[#8A939B]' />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={style.nftCardWrapper} id="nftList">
            <NftCard />
        </div>
    </div>
  )
}

export default ExplorePage