import React from 'react'
import { Route } from 'react-router-dom'

import Button from './components/button'
import Modal from './components/modal'
import Loading from './components/loading'
import Notification from './components/notification'
import Message from './components/message'
import Tab from './components/tabs'
import Carousel from './components/carousel'

import './index.less'

export default class UI extends React.Component {

  render() {
    let { match } = this.props

    return (
       <div>
         <Route path={`${match.url}/button`} component={Button} />
         <Route path={`${match.url}/modal`} component={Modal} />
         <Route path={`${match.url}/loading`} component={Loading} />
         <Route path={`${match.url}/notification`} component={Notification} />
         <Route path={`${match.url}/message`} component={Message} />
         <Route path={`${match.url}/tab`} component={Tab} />
         <Route path={`${match.url}/carousel`} component={Carousel} />
       </div>
    );
  }
}