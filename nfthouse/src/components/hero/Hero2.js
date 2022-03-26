import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import HeroImg from '../../assets/heroImg.jpg'
import CardImg from '../../assets/card_Img.jpg'
import ProfileImg from '../../assets/profile.jpg'
import AHlogo from '../../assets/Andreessen_Horowitz.png'
import Coinbase from '../../assets/coinbase-logo.png'
import FoundersFund from '../../assets/founders-fund-logo.png'
import TrustWallet from '../../assets/trust-wallet-logo.png'
import Quanstamp from '../../assets/quanstamp-logo.png'
import Binance from '../../assets/binance-logo.png'

import { AiFillPlayCircle } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const style = {
    wrapper: `w-full min-h-full flex flex-col`,
    /* heroContainer: `relative container justify-center items-center w-full my-2`,
    heroWrapper: `relative w-full my-2`, */
    bgContainer: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://pbs.twimg.com/media/FHo7-W8VcAEnsNh?format=jpg&name=medium')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen justify-center items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[40px] md:font-bold font-semibold flex mb-4 md:p-3 px-3`,
    heroDescription: `relative text-[#8a939b] text-[24px] mb-6 flex md:p-3 px-3`,
    ctaContainer: `flex px-3`,
    accentedButton: `relative text-lg font-bold lg:px-20 md:px-15 px-10 md:py-4 py-3 md:mr-5 mr-3 mb-3 bg-[#2081E2] rounded-[10px] text-white hover:bg-[#15B2E5] cursor-pointer border-[1px] border-[#151B22] justify-center text-center items-center`,
    /* ctaButtonsText: `justify-center text-center`, */
    button: `relative text-lg font-bold lg:px-20 md:px-15 px-10 md:py-4 py-3 mr-5 mb-3 bg-[#353840] rounded-[10px] text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer border-[1px] border-[#151B22]`,
    cardContainer: `justify-center items-center mx-3 hover:shadow-lg transform transition hover:-translate-y-2`,
    cardImg: `rounded-t-2xl h-full`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-2xl flex items-center text-white`,
    infoImg: `h-[2.25rem] rounded-full`,
    authorContainer: `flex flex-col justify-center ml-4`,
    nameContainer: `flex`,
    nameText: `text-[#1868b7]`,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] hover:text-white text-2xl font-bold cursor-pointer`,
}

const Hero2 = () => {
  return (
        /*<div className={style.wrapper}>
            <Header />
            <div className={style.bgContainer}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <h1 className={style.title}>
                            Discover, collect and sell extraordinary NFTs
                        </h1>
                        <span className={style.heroDescription}>
                            NftHouse is the world's first and largest NFT marketplace.
                        </span>
                        <div className={style.ctaContainer}>
                            <button className={style.accentedButton}>
                                <a href="collections.html">Explore</a>
                            </button>
                            <button className={style.button}>
                                <a href="createNft.html">Create</a>
                            </button>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img className={style.cardImg} src={CardImg} alt="" />
                        <div className={style.infoContainer}>
                            <img className={style.infoImg} src="https://pbs.twimg.com/media/FI231MlaIAADj_q?format=jpg&name=small" alt="" />
                            <div className={style.authorContainer}>
                                <div className={style.nameContainer}>AzukiZen</div>
                                <a className={style.nameText} href="">Team Azuki</a>
                            </div>
                            <div className={style.infoIcon}>
                                <AiOutlineInfoCircle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />   
        </div>*/
        <div>
            <Header />
            <main className='flex flex-col grow shrink basis-[0%]'>
                <div className='flex flex-col h-full grow shrink basis-[0%]'>
                    {/* <div className='flex w-[993px] max-w-full h-full bg-gray-500'> */}
                    <div className='flex flex-col flex-1 w-full max-w-full h-full'>
                        <div className='w-full absolute overflow-hidden block'>
                            <img className='w-full max-w-full h-[586px] bg-cover bg-[#202225]/[0.3] blur-[8px] bg-gradient-to-l from-[#FFFFFF] to-[#FFFFFF] bg-center flex' src={HeroImg}  alt='' />
                        </div>
                        {/* <div className='my-0 mx-auto max-w-full w-[1280px] flex flex-wrap bg-blue-500'> */}
                        <div className='my-0 mx-auto w-full flex flex-wrap justify-center items-center'>
                            <div className='w-[993px] max-w-1/2 pt-[110px] pr-[20px] pb-[44px] pl-[30px] items-start flex flex-col'>
                                <h1 className='w-full max-w-full text-left mr-[10px] z-[2] text-[45px] font-semibold text-white leading-[110%] block'>Discover, collect, and sell extraordinary NFTs</h1>
                                <span className='w-full max-w-[400px] text-[24px] text-left text-[#8A939B] mt-[20px] z-[2]'>NftHouse is the world's first and largest NFT marketplace.</span>
                                <div className='w-full mt-[40px] z-[2] flex'>
                                    <div className='mr-[20px] block'>
                                        <a className='w-[167px] inline-flex flex-row items-center rounded-[10px] justify-center text-white text-[16px] font-semibold py-[12px] px-[20px] bg-[#2081E2] hover:bg-[#15B2E5] border-[1px] border-[#2081E2] no-underline cursor-pointer'>Explore</a>
                                    </div>
                                    <a className='w-[167px] inline-flex flex-row items-center rounded-[10px] justify-center text-white text-[16px] font-semibold py-[12px] px-[20px] bg-[#353840] hover:bg-[#4c505c] border-[1px] border-[#151B22] no-underline cursor-pointer'>Create</a>
                                </div>
                                <div className='flex h-full items-end bg-yellow-500 mt-[20px]'>
                                    <a className='z-[2] cursor-pointer text-[15px] text-[#2081E2] hover:text-[#15B2E5] no-underline '>
                                        <div className='items-center h-[30px] flex cursor-pointer text-[#2081E2] hover:text-[#15B2E5] text-[15px]'>
                                            <i className='inline-block text-[24px]'><AiFillPlayCircle /></i>
                                            <p className='ml-[8px] text-[16px] font-semibold text-[#2081E2] hover:text-[#15B2E5] block cursor-pointer'>Learn more about NftHouse</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='w-[993px] max-w-1/2 py-[40px] px-0 items-end flex flex-col justify-center '>
                                <article className='w-full max-w-[550px] mr-[30px] bg-[#303339] flex flex-col rounded-[10px] z-[2] shadow-lg text-[15px]'>
                                    <a className='rounded-[10px] cursor-pointer text-[15px] no-underline'>
                                        
                                        <div className='h-[420px] z-[2] border-[1px] border-[#151B22] w-full rounded-[10px] block cursor-pointer text-[15px]'>
                                            <div className='items-center justify-center flex flex-col h-full w-full relative'>
                                                <div className='w-[550px] h-[550px] rounded-t-[10px] items-center justify-center max-w-full max-h-full overflow-hidden relative'>
                                                    <img className='object-fit w-full h-full max-w-full max-h-full opacity-[1]' src={CardImg} alt='' />
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className='border-0 w-full font-semibold p-[16px] text-left flex cursor-pointer'>
                                            <div className='self-center order-2 mr-[16px] shrink-0 overflow-hidden border-[1px] border-[#151B22] rounded-[50%] p-0 items-center justify-center flex flex-col w-[40px] h-[40px] font-semibold text-white text-left cursor-pointer text-[15px]'>
                                                <img className='object-cover w-[40px] h-[40px] font-semibold text-left text-[#E5E8EB] cursor-pointer text-[15px]' src={ProfileImg} alt='' />
                                            </div>
                                            <div className='self-stretch flex flex-1 flex-col justify-center mr-[16px] order-3 overflow-hidden text-[16px] items-start font-semibold text-[#E5E8EB] text-left cursor-pointer'>
                                                <span className='font-semibold text-[14px] text-white'>Azuki</span>
                                                <span className='font-medium text-[14px] text-[#2081E2]'>AzukiZen</span>
                                            </div>
                                            <div className='self-stretch flex flex-0 flex-col justify-center max-w-[40%] order-4 overflow-hidden text-right font-semibold text-[#E5E8EB] text-[15px] cursor-pointer'>
                                                <button className='inline-flex items-center text-[24px] border-0 p-0 m-0'>
                                                    <i className='inline-block text-[#8A939B]'><AiOutlineInfoCircle /></i>
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className='h-[360px] items-center flex justify-center overflow-hidden'>
                        <div className='max-w-[1280px] w-full place-content-evenly items-center flex flex-wrap'>
                            <a className='no-underline cursor-pointer'>
                                <img className='w-[150px] h-[50px] m-[10px] overflow-hidden' src={AHlogo} alt='' />
                            </a>
                            <a className='no-underline cursor-pointer'>
                                <img className='w-[150px] h-[50px] m-[10px] overflow-hidden' src={Coinbase} alt='' />
                            </a>
                            <a className='no-underline cursor-pointer'>
                                <img className='w-[150px] h-[50px] m-[10px] overflow-hidden' src={FoundersFund} alt='' />
                            </a>
                            <a className='no-underline cursor-pointer'>
                                <img className='w-[150px] h-[50px] m-[10px] overflow-hidden' src={TrustWallet} alt='' />
                            </a>
                            <a className='no-underline cursor-pointer'>
                                <img className='w-[150px] h-[50px] m-[10px] overflow-hidden' src={Quanstamp} alt='' />
                            </a>
                            <a className='no-underline cursor-pointer'>
                                <img className='w-[150px] h-[50px] m-[10px] overflow-hidden' src={Binance} alt='' />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    
  )
}

export default Hero2;
