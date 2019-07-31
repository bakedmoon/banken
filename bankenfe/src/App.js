import React from 'react';
import './App.css';
import Details from  './admin/components/EmployeeDetails/Details';
import Login from './com/components/Login/Login';
import Signup from './com/components/SignUp/Signup';
import Userflow from './workflow/components/Userflow/Userflow';
import Leftpanel from './com/containers/Structure/LeftPanel';
import { Layout } from 'antd';

const { Content} = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
     {/* <Details></Details> */}
     <Leftpanel></Leftpanel>
     <Layout>
      <Content style={{ margin: '0 16px' }}>
      <Userflow></Userflow>
      </Content>
      </Layout>
   </Layout>
  );
}

export default App;
