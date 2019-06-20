import React from 'react'
import { Route } from 'react-router-dom'

import Basic from './components/basic'
import Higher from './components/higher'

import './index.less'

export default class UI extends React.Component {

  render() {
    let { match } = this.props
    console.log(match)
    return (
       <div>
         <Route path={`${match.url}/basic`} component={Basic} />
         <Route path={`${match.url}/high`} component={Higher} />
       </div>
    );
  }
}