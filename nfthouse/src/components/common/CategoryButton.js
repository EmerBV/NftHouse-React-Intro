import { useEffect, useState } from 'react'

import { getTags } from '../nfts/service'

const style = {
  optionsContainer: 'grow block order-1 w-full text-white font-normal text-[18px]',
  selectOptionsContainer: 'flex bg-[#353840] hover:bg-[#4c505c] md:mr-[8px] h-[50px] rounded-[10px] border border-[#151B22] min-w-[200px] p-[12px] cursor-pointer w-full',
  selectOptions: 'cursor-pointer min-w-[200px] w-full border-0 outline-0 ring-0 m-0 inline-block px-[2px] bg-transparent text-white font-normal text-[18px]'
}

const CategoryButton = ({ changeCategorySelector, ...adverts }) => {
  const [tags, setTags] = useState([])

  useEffect(() => {
    getTags().then(tags => setTags(tags))
  }, [])

  const handleCategorySelector = e => {
    const valueCategorySelector = Array.from(
      e.target.selectedOptions,
      option => option.value
    )
    changeCategorySelector(valueCategorySelector)
  }

  return (
    <div className={style.optionsContainer}>
        <select
            className={style.selectOptionsContainer}
            onChange={handleCategorySelector}
            {...adverts}
        >
            <option className={style.selectOptions} value="">
                Select category
            </option>
            {tags.map((tag) => (
                <option
                key={tag}
                value={tag}
                className={style.selectOptions}
                >
                {tag}
                </option>
            ))}
        </select>
    </div>
  )
}

export default CategoryButton
