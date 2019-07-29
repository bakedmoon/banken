import React, { Component } from 'react'
import {  Menu, Icon , Layout} from 'antd';
import logoimg from '../../assets/images/logo.png';
import menu from '../../assets/images/menu1.png';
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
          <div className="logo"><span><img src={logoimg} />  </span>
           <img src={menu} alt="Menu Icon"   className="trigger" onClick={this.toggle}/></div>
          <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}>
    
           <Menu.Item key="1">
              <Icon type="upload" />
              <span>Appointments</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="upload" />
              <span>Patients</span>
            </Menu.Item>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="notification" />
                <label>Prescription Pad</label>
              </span>
            }>
              
            <Menu.Item key="9">Patient Info</Menu.Item>
            <Menu.Item key="10">Investigation</Menu.Item>
            <Menu.Item key="11">Treatment</Menu.Item>
            <Menu.Item key="12">Medication</Menu.Item>
            <Menu.Item key="13">Additional Advice</Menu.Item>
          </SubMenu>

          <Menu.Item key="4">
              <Icon type="upload" />
              <span>Case Study</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="upload" />
              <span>Inventory</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="upload" />
              <span>Billing</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="upload" />
              <span>Reports</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="upload" />
              <span>Account Settings</span>
            </Menu.Item>
          </Menu>
         </Sider>
     
     
      )
    }
};

export default Leftpanel;