import React from 'react'
import { Card, Form, Icon, Checkbox, Button, Input, Radio, InputNumber, Select, Switch, DatePicker, Upload, message } from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const TextArea = Input.TextArea;

class Reg extends React.Component {

  state = {
  }

  disableDate = current => {
    return current && current > moment().endOf('day')
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = info => {
    console.info(info)
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg: imageUrl,
        loading: false,
      }));
    }
  }

  handleSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo))
    message.success(`${userInfo.userName} 注册成功，当前密码为：${userInfo.userPwd}`)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: 24,
        sm: 4
      },
      wrapperCol: {
        xs: 24,
        sm: 12,
      }
    }
    const offsetLayout = {
      wrapperCol: {
        xs: 24,
        sm: {
          span: 12,
          offset: 4
        }
      }
    }
    const rowObject = {
      minRows: 2, maxRows: 6
    }
    return (
      <div>
        <Card title="注册">
          <Form>
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    }
                  ]
                })(
                  <Input placeholder="请输入用户名" />
                )
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('userPwd', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '密码不能为空'
                    }
                  ]
                })(
                  <Input.Password placeholder="请输入密码" />
                )
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('userGender', {
                  initialValue: 'male',
                })(
                  <RadioGroup>
                    <Radio value='male'>男</Radio>
                    <Radio value='female'>女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('userAge', {
                  initialValue: '',
                })(
                  <InputNumber />
                )
              }
            </FormItem>
            <FormItem label="状态" {...formItemLayout}>
              {
                getFieldDecorator('userStatus', {
                  initialValue: '1',
                })(
                  <Select>
                    <Option value='1'>划水</Option>
                    <Option value='2'>摸鱼</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('userHobby', {
                  initialValue: ['1', '2', '3', '4'],
                })(
                  <Select mode="multiple">
                    <Option value='1'>唱</Option>
                    <Option value='2'>跳</Option>
                    <Option value='3'>rap</Option>
                    <Option value='4'>篮球</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  initialValue: true,
                  valueRropName: 'checked'
                })(
                  <Switch />
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment(moment().format('YYYY-MM-DD'))
                })(
                  <DatePicker
                    format='YYYY-MM-DD'
                    disabledDate={this.disableDate}
                  />
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: ''
                })(
                  <TextArea
                    autosize={rowObject}
                  />
                )
              }
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('userImg')(
                  <Upload
                    listType="picture-card"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                  >
                    {this.state.userImg ? <img src={this.state.userImg} alt='头像' /> : <Icon type="plus" />}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('isRead')(
                  <Checkbox>我已阅读过<a href="https://www.baidu.com">协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Form.create()(Reg);
