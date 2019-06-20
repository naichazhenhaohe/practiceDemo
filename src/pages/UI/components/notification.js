import React from 'react';

import { Button, notification, Card} from 'antd'

export default function NotificationDemo() {
  const openNotification = (type,direction)=>{
    if (direction){
        notification.config({
            placement: direction
        })
    }
    notification[type]({
        message:type,
        description:'demo descriptiom'
    })
  }

  return (
      <div>
          <Card title="通知提醒框" className="card-wrap">
              <Button type="primary" onClick={()=>openNotification('success')}>Success</Button>
              <Button type="primary" onClick={()=>openNotification('info')}>Info</Button>
              <Button type="primary" onClick={()=>openNotification('warning')}>Warning</Button>
              <Button type="primary" onClick={()=>openNotification('error')}>Error</Button>
          </Card>
          <Card title="通知提醒框" className="card-wrap">
              <Button type="primary" onClick={() => openNotification('success','topLeft')}>Success</Button>
              <Button type="primary" onClick={() => openNotification('info','topRight')}>Info</Button>
              <Button type="primary" onClick={() => openNotification('warning','bottomLeft')}>Warning</Button>
              <Button type="primary" onClick={() => openNotification('error','bottomRight')}>Error</Button>
          </Card>
      </div>
  );
}