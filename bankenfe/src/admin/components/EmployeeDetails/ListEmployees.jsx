import React, { Component } from 'react';
import EmployeeCard from './EmployeeCard';


export default class ListEmployees extends Component {
    render() {
        return (
            <div className="cardwrapper">
                        <EmployeeCard></EmployeeCard>
                        <EmployeeCard></EmployeeCard>
                        <EmployeeCard></EmployeeCard>
                        <EmployeeCard></EmployeeCard>
                        <EmployeeCard></EmployeeCard>
                        <EmployeeCard></EmployeeCard>
                        <EmployeeCard></EmployeeCard>
              
              
            </div>
        )
    }
}
