import React from 'react'
import { Card, Table } from 'antd'
import axios from '@/axios'
import Utils from '@/utils/utils'

export default class Basic extends React.Component {

  params = {
    page: 1
  }

  constructor() {
    super()
    this.state = {}
  }


  componentDidMount() {
    const dataSource = [
      {
        id: '0',
        userName: 'Jack',
        gender: 1,
        state: '1',
        hobby: '1',
        birthday: '2000-01-01',
        address: '地址1',
      },
      {
        id: '1',
        userName: 'Tom',
        gender: 1,
        state: '1',
        hobby: '1',
        birthday: '2000-01-02',
        address: '地址2',
      },
      {
        id: '2',
        userName: 'Lily',
        gender: 1,
        state: '1',
        hobby: '1',
        birthday: '2000-01-03',
        address: '地址3',
      }]
    dataSource.map((item, index) =>
      item.key = index
    )
    this.setState({
      dataSource
    })
    this.getMockInfo()
  }

  getMockInfo() {
    const _this = this
    axios({
      url: '/table/list',
      data: {
        params: {
          page: this.params.page
        }
      }
    })
      .then(res => {
        console.log(res)
        if (res.code === 0) {
          res.result.list.map((item, index) =>
            item.key = index
          )
          this.setState({
            dataSource2: res.result.list,
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

  onRowClick = (record, index) => {
    let selected = [index]
    this.setState({
      selectedRowKeys: selected,
      selectedItem: record
    })
  }


  render() {
    const { dataSource, selectedRowKeys, dataSource2, selectedRowKeys_checkbox, pagination } = this.state
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      }, {
        title: '用户名',
        dataIndex: 'userName'
      }, {
        title: '性别',
        dataIndex: 'gender',
        render(gender) {
          return gender === 1 ? '男' : '女'
        }
      }, {
        title: '状态',
        dataIndex: 'state',
        render(state) {
          return state === 1 ? '划水' : '摸鱼'
        }
      }, {
        title: '爱好',
        dataIndex: 'hobby',
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
        dataIndex: 'birthday'
      }, {
        title: '住址',
        dataIndex: 'address'
      }
    ]
    //单选框
    const rowSelection = {
      type: 'radio',
      selectedRowKeys,
      onChange: selectedRowKeys => {
        this.setState({
          selectedRowKeys
        })
      }
    }
    //复选框
    const rowSelectionCheckbox = {
      type: 'checkbox',
      //这里避雷，避免与单选table的选中项参数重合
      selectedRowKeys: selectedRowKeys_checkbox,
      onChange: (selectedRowKeys, selectedRows) => {
        this.setState({
          selectedRowKeys_checkbox: selectedRowKeys,
          selectedRows
        })
      }
    }
    return (
      <div>
        <Card title='基础表格'>
          <Table
            bordered
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />
        </Card>
        <Card title="easyMock dynamic data" style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns}
            dataSource={dataSource2}
            pagination={false}
          />
        </Card>
        <Card title='单选表格'>
          <Table
            bordered
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index)
                }
              }
            }
            }
            columns={columns}
            dataSource={dataSource2}
            pagination={false}
          />
        </Card>
        <Card title='复选表格' style={{ margin: '10px 0' }}>
          <Table
            bordered
            rowSelection={rowSelectionCheckbox}
            columns={columns}
            dataSource={dataSource2}
            pagination={false}
          />
        </Card>
        <Card title='分页表格' style={{ margin: '10px 0' }}>
          <Table
            bordered
            columns={columns}
            dataSource={dataSource2}
            pagination={pagination}
          />
        </Card>
      </div>
    );
  }
}