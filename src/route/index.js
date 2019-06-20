import React from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'

import Admin from '../admin'
import NotFound from '@/pages/NotFound'
import UI from '@/pages/UI'
import Form from '@/pages/Form'
import Table from '@/pages/Table'


export default class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route path='/' render={()=>
            <Admin>
              <Route path='/ui' component={UI}/>
              <Route path='/form' component={Form}/>
              <Route path='/table' component={Table}/>
            </Admin>
          } />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}