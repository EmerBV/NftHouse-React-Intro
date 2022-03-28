import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './components/auth/login/Login'
import RequireAuth from './components/auth/RequireAuth'
import Signup from './components/signup/Signup'
import Hero from './components/hero/Hero'
import ExplorePage from './components/explore/ExplorePage'
import AccountPage from './components/account/AccountPage'
import NftId from './components/nfts/NftId'
import CreatePage from './components/create/CreatePage'
import NotFoundPage from './components/error/NotFoundPage'
import { AuthContextProvider } from './components/auth/context'

function App ({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged)

  const handleLogin = () => {
    setIsLogged(true)
  }

  const handleLogout = () => {
    setIsLogged(false)
  }

  return (

        <div className="App">
            <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
                <div className='m-0 w-full h-full block'>
                    <div className='flex flex-col min-h-full bg-[#202225]'>
                        <Routes>

                            <>

                                <Route index element={<Hero />} />
                                <Route path="/adverts" element={<ExplorePage />} />
                                    <Route path="/adverts/:id" element={<NftId />} />
                                    <Route path="/adverts/new" element={
                                        <RequireAuth>
                                            <CreatePage />
                                        </RequireAuth>
                                    }
                                    />
                                    <Route path="/account" element={
                                        <RequireAuth>
                                            <AccountPage />
                                        </RequireAuth>
                                    }
                                    />
                                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                                    <Route path="/signup" element={<Signup />} />
                                <Route path="/" element={<Navigate to="/adverts" />} />
                                <Route path="/404" element={<NotFoundPage />} />
                                <Route path="*" element={<Navigate to="/404" />} />

                            </>

                        </Routes>
                    </div>
                </div>
            </AuthContextProvider>
        </div>

  )
}

export default App
