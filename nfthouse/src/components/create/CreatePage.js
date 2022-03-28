import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { createAdvert, getTags } from "../nfts/service"
import Page from "../layout/Page"
import Header from "../header/Header"

import { IoMdWallet } from "react-icons/io"

const style = {
  createWrapper: "h-screen overflow-hidden",
  createContainer:
    "flex items-center justify-center container-lg text-[#e5e8eb] h-full",
  formContainer: "container p-6",
  createText: "items-center text-3xl font-extrabold mb-6",
  detailTopContent: "flex py-6 justify-center",
  imageWrapper: "mr-3",
  imageContainer: "flex items-center",
  imageInput: "rounded-lg border-[#151c22] border w-[345px]",
  detailsContainer: "flex-[2] ml-4",
  generalWrapper: "flex",
  generalInfoContainer: "h-36 flex flex-col flex-1 justify-between mb-6",
  placeholderContainer: "mb-1",
  inputContainer:
    "flex w-full items-center border border-[#151b22] px-3 py-2 rounded-lg bg-[#363840]",
  selectContainer:
    "flex w-full items-center border border-[#151b22] rounded-lg bg-[#363840] justify-between px-3 py-2",
  optionContainer: "px-3 py-2 hover:bg-[#8a939b] rounded-lg",
  buttonWrapper: "flex mt-5",
  button:
    "border border-[#282b2f] bg-[#2081e2] flex items-center py-2 px-12 text-xl font-semibold rounded-lg text-white",
  wallet: "text-xl",
  create: "ml-2 text-lg font-semibold",
}

const CreatePage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState(null)
  const [categorySelector, setCategorySelector] = useState(null)
  const [eventSelector, setEventSelector] = useState(null)
  const [tags, setTags] = useState([])
  const [price, setPrice] = useState(null)
  const [inputFile, setInputFile] = useState(null)

  useEffect(() => {
    getTags().then((tags) => setTags(tags))
  }, [])

  const handleInputName = (e) => {
    setName(e.target.value)
  }

  const handleEventSelector = (e) => {
    const valueEventSelector = Boolean(e.target.value, (option) => option.value)
    setEventSelector(valueEventSelector)
  }

  const handleCategorySelector = (e) => {
    const valueCategorySelector = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    )
    setCategorySelector(valueCategorySelector)
  }

  const handleInputNumber = (e) => {
    if (e.target.value > 1000) {
      e.target.value = 1000
    }
    if (e.target.value < 0) {
      e.target.value = 0
    }
    setPrice(e.target.value)
  }

  const handleInputfile = (e) => {
    setInputFile(e.target.files[0])
  }

  const advertFormData = () => {
    const advertFormData = new FormData()
    advertFormData.append("name", name)
    advertFormData.append("sale", eventSelector)
    advertFormData.append("price", price)
    advertFormData.append("tags", categorySelector)
    if (inputFile) advertFormData.append("photo", inputFile)
    return advertFormData
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    createAdvert(advertFormData()).then((advertResp) => {
      const advert = advertResp
      navigate(`/adverts/${advert.id}`)
    })
  }

  return (
    <Page>
      <Header />
      <div className={style.createWrapper}>
        <div className={style.createContainer}>
          <form className={style.formContainer} onSubmit={handleSubmit}>
            <div className={style.createText}>
              <h3>Create New Item</h3>
            </div>
            <div className={style.detailTopContent}>
              <div className={style.imageWrapper}>
                <div>
                  <div className={style.imageContainer}>
                    <label></label>
                    <input
                      className={style.imageInput}
                      type="file"
                      onChange={handleInputfile}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={style.detailsContainer}>
                <div className={style.generalWrapper}>
                  <div className={style.generalInfoContainer}>
                    <div className={style.placeholderContainer}>
                      <label>Name</label>
                      <input
                        className={style.inputContainer}
                        type="string"
                        placeholder="Item name"
                        onChange={handleInputName}
                        required
                      />
                    </div>

                    <div className={style.placeholderContainer}>
                      <label>Price</label>
                      <input
                        className={style.inputContainer}
                        placeholder="Item price"
                        onChange={handleInputNumber}
                        required
                      />
                    </div>

                    <div className={style.placeholderContainer}>
                      <label>Category</label>
                      <select
                        className={style.selectContainer}
                        onChange={handleCategorySelector}
                      >
                        <option className={style.optionContainer} value="">
                          Select category
                        </option>
                        {tags.map((tag) => (
                          <option
                            key={tag}
                            value={tag}
                            className={style.optionContainer}
                          >
                            {tag}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={style.placeholderContainer}>
                      <label>Event</label>
                      <select
                        className={style.selectContainer}
                        onChange={handleEventSelector}
                      >
                        <option className={style.optionContainer} value="">
                          Select an event
                        </option>
                        <option className={style.optionContainer} value="false">
                          Buy
                        </option>
                        <option className={style.optionContainer} value="true">
                          Sale
                        </option>
                      </select>
                    </div>

                    <div className={style.buttonWrapper}>
                      <button
                        className={style.button}
                        type="submit"
                        disabled={
                          !name ||
                          !price ||
                          eventSelector === null ||
                          categorySelector === null ||
                          categorySelector?.length === 0
                        }
                      >
                        <i className={style.wallet}>
                          <IoMdWallet />
                        </i>
                        <div className={style.create}>Create</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default CreatePage
