import React from 'react'
import { Card, Button, Modal } from 'antd'

export default class Modals extends React.Component {
  state = {
    Modal1: false,
    Modal2: false,
    Modal3: false,
    Modal4: false
  }

  handleOpen = type => {
    this.setState({
      //变量作为对象的key
      [type]: true
    })
  }

  handleConfirm = type => {
    Modal[type]({
      title: 'test',
      content: 'demo content,demo content',
      onCancel(){
        console.log(`cancel ${type}`)
      },
      onOk(){
        console.log(`cancel ${type}`)
      },
      okText: '确认'
    })
  }

  cancelModal = () => {
    this.setState({
      Modal1: false,
      Modal2: false,
      Modal3: false,
      Modal4: false
    })
  }
  
  render() {
    let { Modal1, Modal2, Modal3, Modal4 } = this.state
    return (
      <div>
        <Card title='基础模态框' className='card-wrap'>
          {/* 传参数需要使用箭头函数 */}
          <Button type='primary' onClick={() => this.handleOpen('Modal1')}>Open</Button>
          <Button type='primary' onClick={() => this.handleOpen('Modal2')}>自定义页脚</Button>
          <Button type='primary' onClick={() => this.handleOpen('Modal3')}>自定义位置</Button>
          <Button type='primary' onClick={() => this.handleOpen('Modal4')}>Open</Button>
        </Card>
        <Card title='信息确认' className='card-wrap'>
          <Button type='primary' onClick={()=>this.handleConfirm("confirm")}>confirm</Button>
          <Button type='primary' onClick={()=>this.handleConfirm("info")}>info</Button>
          <Button type='primary' onClick={()=>this.handleConfirm("success")}>success</Button>
          <Button type='primary' onClick={()=>this.handleConfirm("warning")}>warning</Button>
          <Button type='primary' onClick={()=>this.handleConfirm("error")}>error</Button>
        </Card>
        <Modal
          title="React"
          visible={Modal1}
          onOk={this.cancelModal}
          onCancel={this.cancelModal}
        >
          <p>test modal 1</p>
        </Modal>
        <Modal
          title="React"
          visible={Modal2}
          okText='确定'
          onOk={this.cancelModal}
          cancelText='取消'
          onCancel={this.cancelModal}
        >
          <p>指定页脚 modal </p>
        </Modal>
        <Modal
          title="React"
          visible={Modal3}
          style={{top: 20}}
          onOk={this.cancelModal}
          onCancel={this.cancelModal}
        >
          <p>自定义位置 modal </p>
        </Modal>
        <Modal
          title="React"
          visible={Modal4}
          wrapClassName="vertical-center-modal"
          onCancel={this.cancelModal}
          onOk={this.cancelModal}
        >
          <p>水平初值居中 modal </p>
        </Modal>
      </div>
    );
  }
}