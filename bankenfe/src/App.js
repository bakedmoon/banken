import React from 'react';
import './App.css';
import Details from  './admin/components/EmployeeDetails/Details';
import Login from './com/components/Login/Login';
import Signup from './com/components/SignUp/Signup';
import Userflow from './workflow/components/Userflow/Userflow';


function App() {
  return (
    <div>
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
     {/* <Details></Details> */}
      <Userflow></Userflow>
    </div>
  );
}

export default App;
