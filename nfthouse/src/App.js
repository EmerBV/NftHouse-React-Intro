import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './components/auth/login/Login'
import RequireAuth from './components/auth/RequireAuth'
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
import { AuthContextProvider } from './components/auth/context'


function App({ isInitiallyLogged }) {
    const [isLogged, setIsLogged] = useState(isInitiallyLogged);

    const handleLogin = () => {
        setIsLogged(true);
    };

    const handleLogout = () => {
        setIsLogged(false);
    };
  
    return (
        <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
            
            <div className="App">
                <div className='m-0 w-full h-full block'>
                    <div className='flex flex-col min-h-full bg-[#202225]'>
                        <Routes>

                            <Route index element={<Hero />}></Route>
                            <Route path="/nfts" element={<ExplorePage />} />
                                <Route path=":nftId" element={<NftId2 />} />
                                <Route path="/nfts/new" element={
                                    <RequireAuth>
                                        <CreatePage />
                                    </RequireAuth>
                                }
                                />
                            <Route path="/login" element={<Login onLogin={handleLogin} />} />
                                <Route path="/signup" element={<Signup />} />
                            <Route path="/nft" element={<Navigate to="/nfts" />} />
                            <Route path="/404" element={<div>404 | Not Found Page</div>} />
                            <Route path="*" element={<Navigate to="/404" />} />

                            {/* <Header /> */}
                            {/* <Login /> */}
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

                        </Routes>
                    </div>
                </div>
            </div>
            
        </AuthContextProvider>
    );
}

export default App;
