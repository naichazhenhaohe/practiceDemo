export default [
  {
    title: '首页',
    key: '/'
  }, {
    title: 'UI',
    key: '/ui',
    children: [
      {
        title: '按钮',
        key: '/ui/button',
      },
      {
        title: '对话框',
        key: '/ui/modal',
      },
      {
        title: 'Loading',
        key: '/ui/loading',
      },
      {
        title: '通知提醒',
        key: '/ui/notification',
      },
      {
        title: '全局Message',
        key: '/ui/message',
      },
      {
        title: 'Tab页签',
        key: '/ui/tab',
      },
      {
        title: '轮播图',
        key: '/ui/carousel',
      }
    ]
  }, {
    title: '表单',
    key: '/form',
    children: [
      {
        title: '登录',
        key: '/form/login',
      },
      {
        title: '注册',
        key: '/form/reg',
      }
    ]
  }, {
    title: '表格',
    key: '/table',
    children: [
      {
        title: '基础表格',
        key: '/table/basic',
      },
      {
        title: '高级表格',
        key: '/table/high',
      }
    ]
  }, 
]