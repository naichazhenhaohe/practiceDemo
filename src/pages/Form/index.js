import React from 'react'

import { Route } from 'react-router-dom'

import Login from './components/login'
import Reg from './components/reg'

export default class Form extends React.Component {
  render() {
    let { match } = this.props
    return (
      <div>
        <Route path={`${match.url}/login`} component={Login} />
        <Route path={`${match.url}/reg`} component={Reg} />
      </div>
    )
  }
}