import React from 'react';
import { Card, Button, message } from 'antd'

export default function MessageDemo() {

  const showMessage = type => {
    message[type]('message content')
  }
  return (
    <div>
      <Card title="全局提示框" className="card-wrap">
        <Button type="primary" onClick={() => showMessage('success')}>Success</Button>
        <Button type="primary" onClick={() => showMessage('info')}>Info</Button>
        <Button type="primary" onClick={() => showMessage('warning')}>Warning</Button>
        <Button type="primary" onClick={() => showMessage('error')}>Error</Button>
        <Button type="primary" onClick={() => showMessage('loading')}>Loading</Button>
      </Card>
    </div>
  );
}