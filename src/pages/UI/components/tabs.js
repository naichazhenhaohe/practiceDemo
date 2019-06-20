import React from 'react';
import { Card, Tabs, message, Icon } from 'antd'

const TabPane = Tabs.TabPane;

export default class TabsDemo extends React.Component {

  newTabIndex = 0;

  handleCallback = (key) => {
    message.info("Hi,您选择了页签：" + key)
  }

  componentWillMount() {
    const panes = [
      {
        title: 'Tab 1',
        content: 'Tab 1',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: 'Tab 2',
        key: '2',
      },
      {
        title: 'Tab 3',
        content: 'Tab 3',
        key: '3',
        closable: false,
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  render() {
    let { activeKey, panes } = this.state
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">tab content 1</TabPane>
            <TabPane tab="Tab 2" key="2" disabled>tab content 2</TabPane>
            <TabPane tab="Tab 3" key="3">tab content 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">tab content 1</TabPane>
            <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">tab content 2</TabPane>
            <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">tab content 3</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab可关闭卡片式页签" className="card-wrap">
          <Tabs
            onChange={this.onChange}
            activeKey={activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              panes.map(panel => {
                return <TabPane
                  tab={panel.title}
                  key={panel.key}
                  closable={panel.closable}
                >
                  {panel.content}
                </TabPane>
              })
            }
          </Tabs>
        </Card>
      </div>
    );
  }
}