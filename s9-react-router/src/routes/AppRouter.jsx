import React, {lazy, Suspense} from 'react'
import { Navigate, Route, Routes  } from 'react-router-dom'
import Navbar from '../components/Navbar'
//import CharacterScreen from '../pages/CharacterScreen'
//import IphoneScreen from '../pages/IphoneScreen'
//import SearchScreen from '../pages/SearchScreen'
//import XiaomiScreen from '../pages/XiaomiScreen'

//const Navbar = lazy(() => import('../components/Navbar'));
const CharacterScreen = lazy(() => import('../pages/CharacterScreen'));
const IphoneScreen = lazy(() => import('../pages/IphoneScreen'));
const SearchScreen = lazy(() => import('../pages/SearchScreen'));
const XiaomiScreen = lazy(() => import('../pages/XiaomiScreen'));

const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Suspense fallback={<div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>}>
    <Routes>
        <Route end path="/xiaomi" element={<XiaomiScreen />}/>
        <Route end path="/iphone" element={<IphoneScreen />} />
        <Route end path="/search" element={<SearchScreen />}/>
        <Route end path="/character/:id" element={<CharacterScreen />}/>
        <Route path='*' element={<Navigate to="/iphone" />}/>
    </Routes>
    </Suspense>
    </>
  )
}

export default AppRouter