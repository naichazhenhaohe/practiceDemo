import React from 'react'
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer'
import NavLeft from './components/NavLeft';
import Home from '@/pages/Home'

import './style/common.less'

class Admin extends React.Component {

  render() {
    const { location, children } = this.props
    return (
      <div>
        <Row className="container">
          <Col span={4} className="nav-left">
            <NavLeft />
          </Col>
          <Col span={20} className="main">
            <Header />
            <Row className="content">
              {location.pathname === '/' ? <Home /> : children}
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(Admin)