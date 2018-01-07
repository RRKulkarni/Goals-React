import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './HomePage'
import About from './AboutPage'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </Switch>
  </main>
)
export default Main
