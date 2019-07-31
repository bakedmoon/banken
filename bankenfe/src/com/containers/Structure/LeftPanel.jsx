import React, { Component } from 'react'
import {  Menu, Icon , Layout} from 'antd';

const { SubMenu } = Menu;
const {  Sider  } = Layout;


class Leftpanel extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

    render() {
      return (
      
        <Sider  className="leftpanel" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"><span>  </span>
        </div>
          <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}>
    
           <Menu.Item key="1">
           <Icon type="dashboard" />
              <span>User Flow</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="calender" />
              <span>Leave</span>
            </Menu.Item>
         
          </Menu>
         </Sider>
     
     
      )
    }
};

export default Leftpanel;