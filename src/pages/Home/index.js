import React from 'react'
import { List } from 'antd'

export default function Home() {

  const data = [
    '最近有空就来做一下一直想做的一些基础 antd 的使用整合',
    '实现的时候有参考一个学习视频的思路来实现',
    <a href='https://github.com/naichazhenhaohe/practiceDemo'>源代码</a>,
    '左侧的导航栏显得有点单调（会继续补充的！FLAG',
    <strong>react-router, antd, react-redux</strong>,
    '↑ 以上三项主要是本项目的练习对象'
  ]

  return (
    <div>
      <List
        footer={<div>٩( ᐛ )و</div>}
        style={{backgroundColor: '#fff'}}
        header={<div style={{fontSize: '1.1rem'}}><strong>关于本站的一些介绍</strong></div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  );
} 