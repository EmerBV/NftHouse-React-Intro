import React from 'react'

import Header from '../header/Header'

import { IoMdWallet } from 'react-icons/io'

const style = {
	createWrapper: `h-screen overflow-hidden`,
	createContainer: `flex items-center justify-center container-lg text-[#e5e8eb] h-full`,
	formContainer: `container p-6`,
	createText: `items-center text-3xl font-extrabold mb-6`,
	detailTopContent: `flex py-6 justify-center`,
	imageWrapper: `mr-3`,
	imageContainer: `flex items-center`,
	imageInput: `rounded-lg border-[#151c22] border w-[345px]`,
	detailsContainer: `flex-[2] ml-4`,
	generalWrapper: `flex`,
	generalInfoContainer: `h-36 flex flex-col flex-1 justify-between mb-6`,
	placeholderContainer: `mb-1`,
	inputContainer: `flex w-full items-center border border-[#151b22] px-3 py-2 rounded-lg bg-[#363840]`,
	selectContainer: `flex w-full items-center border border-[#151b22] rounded-lg bg-[#363840] justify-between px-3 py-2`,
	optionContainer: `px-3 py-2 hover:bg-[#8a939b] rounded-lg`,
	buttonWrapper: `flex mt-5`,
	button: `border border-[#282b2f] bg-[#2081e2] hover:bg-[#42a0ff] transition ease-in-out duration-150 flex items-center py-2 px-12 text-xl font-semibold rounded-lg cursor-pointer text-white`,
	wallet: `text-xl`,
	create: `ml-2 text-lg font-semibold`,

}

const CreatePage = () => {
  return (
		<div>
			<Header />
			<div className={style.createWrapper}>
				<div className={style.createContainer}>
					<form className={style.formContainer}>
						<div className={style.createText}>
								<h3>Create New Item</h3>
						</div>
						<div className={style.detailTopContent} id="nftCreate">
							<div className={style.imageWrapper}>
								<div>
									<div className={style.imageContainer}>
										<label for="image"></label>
										<input className={style.imageInput} type="image" name="image" src="./assets/port_1.png" alt="image" disabled/>
									</div>
								</div>
							</div>
							<div className={style.detailsContainer}>
								<div className={style.generalWrapper}>
									<div className={style.generalInfoContainer}>

										<div className={style.placeholderContainer}>
											<label for="username">Created by</label>
											<input className={style.inputContainer} type="text" name="username" placeholder="Username" required  disabled />
										</div>

										<div className={style.placeholderContainer}>
											<label for="name" class="">Name</label>
											<input className={style.inputContainer} type="text" name="name" placeholder="Item name" required  disabled />
										</div>

										<div className={style.placeholderContainer}>
											<label for="price">Price</label>
											<input className={style.inputContainer} type="text" name="price" placeholder="Item price" required  disabled />
										</div>

										<div class={style.placeholderContainer}>
											<label for="category">Category</label>
											<select className={style.selectContainer} name="category" id="">
												<option className={style.optionContainer} value="">Select category</option>
												<option className={style.optionContainer} value="art">Art</option>
												<option className={style.optionContainer} value="collectibles">Collectibles</option>
											</select>
										</div>

										<div className={style.placeholderContainer}>
											<label for="detail">Detail</label>
											<select className={style.selectContainer} name="detail" id="">
												<option className={style.optionContainer} value="">Select an event</option>
												<option className={style.optionContainer} value="buy">Buy</option>
												<option className={style.optionContainer} value="sale">Sale</option>
											</select>
										</div>

										<div className={style.buttonWrapper}>
											<button className={style.button} type="submit" disabled>
												<i className={style.wallet}><IoMdWallet /></i>
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
		</div>
  )
}

export default CreatePage