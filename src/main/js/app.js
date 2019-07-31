const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client.js');

class DBDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        client({
            method: 'GET',
            path: '/api/employees'
        }).done(response => {
            this.setState({
                employees: response.entity._embedded.employees
            })
        })
    }

    render() {
        return (<EmployeeList employees={this.state.employees}/>);
    }

}

class EmployeeList extends React.Component {

    render() {
        return (<table className={"table"}>
            <thead class="thead-light">
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

class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.firstname}</td>
                <td>{this.props.employee.lastname}</td>
                <td>{this.props.employee.jobname}</td>
                <td>{this.props.employee.birthCountry}</td>
                <td><a href={this.props.employee._links.self.href}>profile</a></td>
            </tr>
        );
    }
}

ReactDOM.render(<DBDisplay/>, document.getElementById('react'));