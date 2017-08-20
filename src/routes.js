import React from 'react'
import { Route } from 'react-router'
import Example from './containers/Example'
import AnotherExample from './containers/AnotherExample'

const routes = (
  <div>
    <Route exact path="/" component={Example}/>
    <Route exact path="/example" component={Example}/>
    <Route exact path="/another-example" component={AnotherExample}/>
  </div>
)

export default routes
