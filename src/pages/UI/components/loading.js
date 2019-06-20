import React from 'react';
import { Card, Spin, Icon, Alert } from 'antd'

export default function LoadingDemo() {

  const icon = <Icon type="plus" spin={true} style={{ fontSize: '24px' }} />
  return (
    <div>
      <Card title="Spin用法" className="card-wrap">
        <Spin size="small" />
        <Spin style={{ margin: '0 10px' }} />
        <Spin size="large" />
        <Spin indicator={icon} style={{ marginLeft: '10px' }} spinning={true} />
      </Card>
      <Card title="内容遮罩" className="card-wrap">
        <Alert
          className='card-wrap'
          message="React"
          description="欢迎来到React高级实战课程"
          type="info"
        />
        <Spin>
          <Alert
            className='card-wrap'
            message="React"
            description="欢迎来到React高级实战课程"
            type="warning"
          />
        </Spin>
        <Spin tip="加载中...">
          <Alert
            className='card-wrap'
            message="React"
            description="欢迎来到React高级实战课程"
            type="warning"
          />
        </Spin>
        <Spin indicator={icon}>
          <Alert
            className='card-wrap'
            message="React"
            description="欢迎来到React高级实战课程"
            type="warning"
          />
        </Spin>
      </Card>
    </div>
  );
}