import React from 'react'
import { Card, Button, Radio } from 'antd'

export default class Buttons extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: false,
      size: 'default'
    }
  }

  handleClick = () => {
    let { loading } = this.state
    this.setState({
      loading: !loading
    })
  }

  handleChange = e => {
    this.setState({
      size: e.target.value
    })
  }

  render() {
    let { loading } = this.state
    return (
      <div>
        <Card title='基础按钮' className="card-wrap">
          <Button type='primary'>demo</Button>
          <Button>demo</Button>
          <Button type='bashed'>demo</Button>
          <Button type='danger'>demo</Button>
          <Button disabled>demo</Button>
        </Card>

        <Card title='图形按钮' className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>

        <Card title='Loading 按钮' className='card-wrap'>
          <Button type='primary' loading={loading} onClick={this.handleClick}>确定</Button>
          <Button type='primary' onClick={this.handleClick}>取消</Button>
          <Button type='primary' shape='circle' loading={loading} onClick={this.handleClick}></Button>
        </Card>

        <Card title='按钮组' style={{ marginTop: '2vh' }}>
          <Button.Group>
            <Button icon='left'>返回</Button>
            <Button icon='right'>继续</Button>
          </Button.Group>
        </Card>

        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>demo</Button>
          <Button size={this.state.size}>demo</Button>
          <Button type="dashed" size={this.state.size}>demo</Button>
          <Button type="danger" size={this.state.size}>demo</Button>
        </Card>
      </div>
    )
  }
}