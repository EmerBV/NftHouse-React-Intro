import Login from './components/auth/login/Login'
import Signup from './components/signup/Signup'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Hero2 from './components/hero/Hero2'
import ExplorePage from './components/explore/ExplorePage'
import CollectionPage from './components/collection/CollectionPage'
import NftDetails from './components/nft/NftDetails'
import NftImage from './components/nft/NFTImage'
import NftId from './components/nfts/NftId'
import NftId2 from './components/nfts/NftId2'
import CreatePage from './components/create/CreatePage'


function App() {
  
  return (
      <div className='m-0 w-full h-full block'>
          <div className='flex flex-col min-h-full bg-[#202225]'>
              {/* <Header /> */}
              <Login />
              {/* <Signup /> */}
              {/* <Hero /> */}
              {/* <Hero2 /> */}
              {/* <ExplorePage /> */}
              {/* <CollectionPage /> */}
              {/* <NftImage /> */}
              {/* <NftDetails /> */}
              {/* <NftId /> */}
              {/* <NftId2 /> */}
              {/* <CreatePage /> */}
              {/* <Footer /> */}
          </div>
      </div>
  );
}

export default App;
