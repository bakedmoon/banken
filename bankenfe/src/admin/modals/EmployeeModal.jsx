import React, { Component } from 'react';
import {Button,  Modal, Form, Icon, Input, Select} from 'antd';
const { Option } = Select;

class EmployeeModal extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
     return (
      <div>
      <Button type="primary" onClick={this.showModal}>Add Employee</Button>
      <Modal
          title="Add Employee"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
             
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Full Name"
                />
          </Form.Item>

          <Form.Item>
             
             <Input
               prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
               placeholder="Email ID"
             />
           </Form.Item>
           <Form.Item>
           <Select defaultValue="UI" >
              <Option value="UI">UI Developer</Option>
              <Option value="Full">Full Stack Developer</Option>
              <Option value="Frontend">Frontend Developer</Option>
              <Option value="Ux">
                UX Designer 
              </Option>
            </Select>
          
            </Form.Item>
            </Form>
        </Modal>
      </div>
    )
  }
}
export default EmployeeModal;