import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Header from '../header/Header'
import CategoryButton from '../common/CategoryButton'
import PriceRangeButton from '../common/PriceRangeButton'
import Page from '../layout/Page'
import { getAdverts } from '../nfts/service'
import NftCard from '../nft/NftCard'

const style = {
  collectionWrapper: 'overflow-hidden py-0 px-[28px] block',
  nftCardWrapper:
    'grid 2xl:grid-cols-9 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mx-0 items-center justify-center py-8',
  collectionContainer:
    'lg:flex md:block block flex-wrap bg-[#202225] w-full justify-between items-center mt-[24px] mb-[10px] mx-0',
  itemsTextContainer: 'block my-[16px] mx-0 bg-[#202225]',
  itemsText: 'font-normal text-[18px] text-white',
  filterWrapper: 'md:flex block max-w-full mt-0 bg-[#202225] justify-items-end z-30 flex-nowrap',
  optionsContainer: 'grow block order-1 w-full text-white font-normal text-[18px]',
  selectOptionsContainer: 'flex bg-[#353840] hover:bg-[#4c505c] md:mr-[8px] h-[50px] rounded-[10px] border border-[#151B22] min-w-[200px] p-[12px] cursor-pointer',
  selectOptions: 'cursor-pointer w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]',
  sortByContainer: 'grow md:mt-0 mt-3 ml-0 md:ml-[8px] block order-2 w-full text-white font-normal text-[18px]',
  sortSelect: 'flex bg-[#353840] hover:bg-[#4c505c] h-[50px] rounded-[10px] border border-[#151B22] min-w-[200px] p-[12px] cursor-pointer'
}

const ExplorePage = () => {
  const [adverts, setAdverts] = useState([])
  const [categoryFilter, setCategoryFilter] = useState([])
  const [eventSelector, setEventSelector] = useState([])
  const [isSaleFilter, setIsSaleFilter] = useState('')
  const [isFilter, setIsFilter] = useState('all')
  const { id } = useParams()
  const navigate = useNavigate()

  /* useEffect(() => {
    getAdverts(id, eventSelector, isSaleFilter)
      .then((advert) => setAdverts(advert))
      .catch(() => {
        navigate('/404')
      })
  }, [id, eventSelector, isSaleFilter, navigate])

  const sendFilters = e => {
    e.preventDefault()
    sendAllFilters(true)
  } */

  const changeCategorySelector = category => {
    setCategoryFilter(category)
  }

  const sendAllFilters = () => {
    query()
    setIsFilter(true)
  }

  useEffect(() => {
    query()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const query = () => {
    getAdverts(isSaleFilter, categoryFilter).then(
      adverts => setAdverts(adverts)
    )
  }

  return (
    <Page>
      <Header />

      <div className={style.collectionWrapper}>
        <div className={style.collectionContainer}>
          <div className={style.itemsTextContainer}>
            <p className={style.itemsText}>Items</p>
          </div>

          <div className={style.filterWrapper}>
            <CategoryButton
              onClick={sendAllFilters}
              changeCategorySelector={changeCategorySelector}
            />

            <PriceRangeButton />
          </div>
        </div>

        {adverts.length || isFilter
          ? (

          <>

            <div className={style.nftCardWrapper}>
              {adverts.map((advert, id) => (
                <NftCard key={id} advert={advert} {...advert} />
              ))}
            </div>
          </>
            )
          : null}
      </div>
    </Page>
  )
}

export default ExplorePage
