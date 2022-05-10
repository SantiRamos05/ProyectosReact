import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CharacterScreen from '../pages/CharacterScreen'
import IphoneScreen from '../pages/IphoneScreen'
import SearchScreen from '../pages/SearchScreen'
import XiaomiScreen from '../pages/XiaomiScreen'

const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/iphone" component={IphoneScreen} />
        <Route exact path="/xiaomi" component={XiaomiScreen}/>
        <Route exact path="/search" component={SearchScreen}/>
        <Route exact path="/character/:id" component={CharacterScreen}/>
        <Redirect to="/login" />
    </Switch>
    </>
  )
}

export default AppRouter