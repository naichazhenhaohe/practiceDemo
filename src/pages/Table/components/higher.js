import React from 'react'
import axios from '@/axios'
import Utils from '@/utils/utils'

import { Card, Table } from 'antd'

export default class Higher extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  params = {
    page: 1
  }

  componentDidMount() {
    this.getMockInfo()
  }

  getMockInfo() {
    const _this = this
    axios({
      url: '/table/SortList',
      data: {
        params: {
          page: this.params.page
        }
      }
    })
      .then(res => {
        if (res.code === 0) {
          res.result.list.map((item, index) =>
            item.key = index
          )
          this.setState({
            dataSource: res.result.list,
            pagination: Utils.pagination(res, current => {
              _this.params.page = current
              _this.getMockInfo()
            })
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortOrder: sorter.order
    })
  }

  handleDelete = item => {
    console.log(item)
  }

  render() {
    const { dataSource, sortOrder } = this.state
    const columns = [
      {
        title: 'id',
        key: 'id-1',
        dataIndex: 'id',
        width: 80
      }, {
        title: '用户名',
        key: 'userName-1',
        dataIndex: 'userName',
        width: 80
      }, {
        title: '性别',
        key: 'gender-1',
        dataIndex: 'gender',
        width: 80,
        render(gender) {
          return gender === 1 ? '男' : '女'
        }
      }, {
        title: '状态',
        key: 'state-1',
        dataIndex: 'state',
        width: 80,
        render(state) {
          return state === 1 ? '划水' : '摸鱼'
        }
      }, {
        title: '爱好',
        key: 'hobby-1',
        dataIndex: 'hobby',
        width: 80,
        render(hobby) {
          const config = {
            '1': '唱',
            '2': '跳',
            '3': 'rap',
            '4': '篮球'
          }
          return config[hobby]
        }
      }, {
        title: '生日',
        key: 'birthday-1',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '住址',
        key: 'address-1',
        width: 120,
        dataIndex: 'address'
      }
    ]
    const columns2 = [
      {
        title: 'id',
        key: 'id-2',
        fixed: 'left',
        dataIndex: 'id',
        width: 80
      }, {
        title: '用户名',
        key: 'userName-2',
        dataIndex: 'userName',
        width: 80
      }, {
        title: '性别',
        key: 'gender-2',
        dataIndex: 'gender',
        width: 80,
        render(gender) {
          return gender === 1 ? '男' : '女'
        }
      }, {
        title: '状态',
        key: 'state-2',
        dataIndex: 'state',
        width: 80,
        render(state) {
          return state === 1 ? '划水' : '摸鱼'
        }
      }, {
        title: '爱好',
        key: 'hobby-2',
        dataIndex: 'hobby',
        width: 80,
        render(hobby) {
          const config = {
            '1': '唱',
            '2': '跳',
            '3': 'rap',
            '4': '篮球'
          }
          return config[hobby]
        }
      }, {
        title: '生日',
        key: 'birthday-2',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday-2-2',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday-2-3',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday-2-4',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday-2-5',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday-2-6',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '生日',
        width: 120,
        key: 'birthday-2-7',
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday-2-8',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday-2-0',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '生日',
        key: 'birthday-2-9',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '住址',
        key: 'address-2-2',
        fixed: 'right',
        width: 120,
        dataIndex: 'address'
      }
    ]
    //包含 sort 配置
    const columns3 = [
      {
        title: 'id',
        key: 'id-3',
        dataIndex: 'id',
        width: 80
      }, {
        title: '用户名',
        key: 'username-3',
        dataIndex: 'userName',
        width: 80
      }, {
        title: '性别',
        key: 'gender-3',
        dataIndex: 'gender',
        width: 80,
        render(gender) {
          return gender === 1 ? '男' : '女'
        }
      }, {
        title: '状态',
        key: 'state-3',
        dataIndex: 'state',
        width: 80,
        render(state) {
          return state === 1 ? '划水' : '摸鱼'
        }
      }, {
        title: '爱好',
        key: 'hobby-3',
        dataIndex: 'hobby',
        width: 80,
        render(hobby) {
          const config = {
            '1': '唱',
            '2': '跳',
            '3': 'rap',
            '4': '篮球'
          }
          return config[hobby]
        }
      }, {
        title: '生日',
        key: 'birthday-3',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '年龄',
        key: 'age-3',
        width: 80,
        dataIndex: 'age',
        sorter: (a, b) => {
          return a.age - b.age
        },
        sortOrder
      }, {
        title: '住址',
        key: 'add-3',
        width: 120,
        dataIndex: 'address'
      }
    ]
    const columns4 = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 80
      }, {
        title: '用户名',
        dataIndex: 'userName',
        width: 80
      }, {
        title: '性别',
        dataIndex: 'gender',
        width: 80,
        render(gender) {
          return gender === 1 ? '男' : '女'
        }
      }, {
        title: '状态',
        dataIndex: 'state',
        width: 80,
        render(state) {
          return state === 1 ? '划水' : '摸鱼'
        }
      }, {
        title: '爱好',
        dataIndex: 'hobby',
        width: 80,
        render(hobby) {
          const config = {
            '1': '唱',
            '2': '跳',
            '3': 'rap',
            '4': '篮球'
          }
          return config[hobby]
        }
      }, {
        title: '生日',
        width: 120,
        dataIndex: 'birthday'
      }, {
        title: '住址',
        width: 120,
        dataIndex: 'address'
      }, {
        title: '操作',
        width: 80,
        render: (text, item) => {
          return <span onClick={(item) => { this.handleDelete(item) }}>删除</span>
        }
      }
    ]

    return (
      <div>
        <Card title='头部固定table' style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            scroll={{ y: 220 }}
          />
        </Card>
        <Card title='左侧固定table' style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns2}
            dataSource={dataSource}
            pagination={false}
            // 这里的x值比 columns2 中的每项的width的合略大，但是差距太大的话滚动的区域和固定区域会有较大的空隙
            scroll={{ x: 1750 }}
          />
        </Card>
        {/* 此处的排序处理在前端进行 */}
        <Card title='排序' style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns3}
            dataSource={dataSource}
            pagination={false}
            onChange={this.handleChange}
          />
        </Card>
        <Card title='操作' style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns4}
            dataSource={dataSource}
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}