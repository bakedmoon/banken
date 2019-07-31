import React, { Component } from 'react';
import { Descriptions } from 'antd';

class Personal extends Component {
    render() {
        return (
            <div>
              <Descriptions title="Personal Info">
                <Descriptions.Item label="Name">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Gender">Female</Descriptions.Item>
                <Descriptions.Item label="Date of Birth">25/12/2000</Descriptions.Item>
                <Descriptions.Item label="Marital Status">Single</Descriptions.Item>
                <Descriptions.Item label="Address">
                      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
            </Descriptions>  
            </div>
        )
    }
}
export default Personal;