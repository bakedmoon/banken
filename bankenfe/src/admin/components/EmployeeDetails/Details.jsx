import React, { Component } from 'react';
import { Layout } from 'antd';
import ListEmployees from './ListEmployees';
import EmployeeModal from '../../modals/EmployeeModal';
const { Content} = Layout;

class Details extends Component {
    render() {
        return (
            <div className="employyeeDetails">
              <Layout className="layout">
                <Content style={{ padding: '0 50px' }}>

                  <div className="buttonWrapper">
                     <EmployeeModal></EmployeeModal>
                  </div>
                   <ListEmployees></ListEmployees>
                 
                </Content>
             </Layout>
                
            </div>
        )
    }
}

export default Details;