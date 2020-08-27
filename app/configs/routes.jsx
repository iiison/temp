import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Test from '$COMPONENTS/test'
import Test2 from '$COMPONENTS/Test2'

import {
  SideNav
} from '$CONTAINERS'

const routes = () => (
  <div className='app grid'>
    <div className='col'>
      <SideNav />
      <Switch>
        <Route exact path='/' component={Test} />
        <Route exact path='/test-2' component={Test2} />
      </Switch>
    </div>
  </div>
)

export default routes

