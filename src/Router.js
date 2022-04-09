import React, { useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Profile from './Profile'
import Navbar from './components/navbar/';
import Home from './components/home/';
import Services from './components/services/';
import Contact from './components/contact/';
import { Jumbotron } from './components/Jumbotron';


const Router = () => {
  const [current, setCurrent] = useState('home')
  useEffect(() => {
    setRoute()
    window.addEventListener('hashchange', setRoute)
    return () =>  window.removeEventListener('hashchange', setRoute)
  }, [])
  function setRoute() {
    const location = window.location.href.split('/')
    const pathname = location[location.length-1]
    setCurrent(pathname ? pathname : 'home')
  }
  return (
    <HashRouter>
      <Navbar current={current} />
      <Jumbotron />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/profile" component={Profile}/>
        <Route component={Home}/>
      </Switch>
      
    </HashRouter>
  )
}

export default Router