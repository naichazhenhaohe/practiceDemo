import React from 'react'
import MenuConfig from '@/config/menuConfig'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import { connect } from 'react-redux'
import { switchMenu } from '@/redux/action'
import './index.less'

const SubMenu = Menu.SubMenu

class NavLeft extends React.Component {

  constructor() {
    super()
    this.state = {
      currentKey: []
    }
  }

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }

  handleClick = ({item, key}) => {

    if (key === this.state.currentKey) {
      return false
    }

    const { dispatch } = this.props
    dispatch(switchMenu(item.props.title))
    
    console.log(item)
    this.setState({
      currentKey: [item.key]
    })
  }

  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>
          {item.title}
        </NavLink>
      </Menu.Item>
    })
  }

  render() {
    let { currentKey } = this.state
    return (
      <div>
        <div className="logo">
          <img src="/resource/assets/logo.svg" alt="" />
          <h1>Kick it</h1>
        </div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={currentKey}
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default connect()(NavLeft)