import React, { Component } from 'react';
import { Tabs } from 'antd';
import Personal from './Personal/Personal';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
  }

class Userflow extends Component {
    render() {
        return (
            <div>
                 <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="Personal Info" key="1">
                      <Personal></Personal>
                    </TabPane>
                    <TabPane tab="Work" key="2">
                    Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Team" key="3">
                    Content of Tab Pane 3
                    </TabPane>
                 </Tabs>
            </div>
        )
    }
}

export default Userflow;