import React, { Component } from 'react';
import { Form, Icon, Input, Row, Col, Select, Button } from 'antd';
const { Option } = Select;

class Signup extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render() {
        return (
            <div className="RegisterWrapper">
                 <Form onSubmit={this.handleSubmit} className="register-form">
                     <Row gutter={16}>
                         <Col className="gutter-row" span={12}>
                             <div className="gutter-box">
                            <Form.Item>
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="First Name"
                                />
                            </Form.Item>
                            </div>
                          </Col>

                          <Col  className="gutter-row" span={12}>
                          <div className="gutter-box">
                          <Form.Item>
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Last Name"
                                />
                            </Form.Item>
                            </div>
                          </Col>
                        </Row>

                        <Form.Item>
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text"
                            placeholder="Email ID"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Input
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text"
                            placeholder="Mobile Number"
                            />
                        </Form.Item>

                        <Form.Item>    
                        <Select defaultValue="Medium">
                            <Option value="large">Large Size</Option>
                            <Option value="medium">Medium Size</Option>
                            <Option value="small">Small Size</Option>
                       </Select>
                       </Form.Item>
                       <Form.Item>
                       <a className="login-form-forgot" href="">
                            Exisiting User?
                        </a>
                       <Button type="primary" htmlType="submit" className="float-right">
                         Sign Up
                       </Button>
                       </Form.Item>
                  </Form>
            </div>
        )
    }
}
export default Signup;