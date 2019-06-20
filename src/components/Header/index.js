import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '@/utils/utils'
import { connect } from 'react-redux'

class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      userName: '',
      sysTime: null,
    }
  }

  componentWillMount() {
    this.setState({
      userName: '',
    })
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
  }

  handleClick = e => {
    console.log(e.target.dataset.age)
  }

  render() {
    let { userName, sysTime } = this.state
    return (
      <header>
        <Row className='header-top'>
          <Col span={24}>
            <span>안년! {userName}</span>
            <span data-age='23' onClick={this.handleClick}>취소</span>
          </Col>
        </Row>
        <Row className='breadcrumb'>
          <Col span={4} className='breadcrumb-title'>
            {this.props.menuName}
          </Col>
          <Col span={20} className='weather'>
            <span className='data'>{sysTime}</span>
          </Col>
        </Row>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
      menuName: state.menuName
  }
}

export default connect(mapStateToProps)(Header)