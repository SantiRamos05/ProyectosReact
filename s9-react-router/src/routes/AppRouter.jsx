import React, {lazy, Suspense} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
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
    <Switch>
        <Route exact path="/iphone" component={IphoneScreen} />
        <Route exact path="/xiaomi" component={XiaomiScreen}/>
        <Route exact path="/search" component={SearchScreen}/>
        <Route exact path="/character/:id" component={CharacterScreen}/>
        <Redirect to="/login" />
    </Switch>
    </Suspense>
    </>
  )
}

export default AppRouter