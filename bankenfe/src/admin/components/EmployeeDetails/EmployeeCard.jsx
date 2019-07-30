import React, { Component } from 'react';
import {Card, Icon, Avatar} from 'antd';
const { Meta } = Card;
class EmployeeCard extends Component {
    render() {
        return (
           
                 <Card
                    style={{ width: 275, marginTop: 15, marginRight: 15, float: 'left', }}
                    actions={[<Icon type="edit" />, <Icon type="delete" />, <a href="#"> Details</a>]}>
                    
                        <Meta
                        avatar={
                            <Avatar src="images" />
                        }
                        title="Mayuri Raut"
                        description="mraut@rikoouu.com"/>
                        <p>UI Developer</p>

                  </Card>
           
        )
    }
}

export default EmployeeCard