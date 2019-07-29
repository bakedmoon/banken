import React, { Component } from 'react';
import {Select, Layout} from 'antd';
import Record from '../../assets/images/record-voice.svg'; 
const {Header} = Layout;
const {Option} = Select;
class TopHeader extends Component {
    render() {
        return (
            <div>
                <Header style={{ background: '#fff', padding: 0 }} ><span>Patient Info</span>
                 <div className="ant-card-extra">
                     <label style={{marginRight: 20 }}> 
                     <img src={Record} alt="Record Icon" />   Record Observations
                     </label>

                     <Select defaultValue="English" style={{ width: 110 , marginRight: 20 }} >
                        <Option value="English">English</Option>
                        <Option value="Hindi">Hindi</Option>
                        <Option value="French">French</Option>
                      </Select>

                      <Select defaultValue="Samriddhi Clinic" style={{ width: 180 }} >
                        <Option value="Samriddhi Clinic">Samriddhi Clinic</Option>
                        <Option value="Nawaz Clinic">Nawaz Clinic</Option>
                        <Option value="Khemka Clinic">Khemka Clinic</Option>
                      </Select>
                 </div>
                </Header>
            </div>
        )
    }
}
export default TopHeader;