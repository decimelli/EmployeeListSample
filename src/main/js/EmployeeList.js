const React = require('react');

import Employee from './Employee.js'

export default class EmployeeList extends React.Component {

    render() {
        return (<table className={"table"}>
            <thead className="thead-light">
            <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Job Name</th>
                <th scope="col">Country of Birth</th>
                <th scope="col">Links</th>
            </tr>
            </thead>
            <tbody>
            {this.props.employees.map(employee => <Employee key={employee._links.self.href} employee={employee}/>)}
            </tbody>
        </table>)
    }

}
