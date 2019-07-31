const React = require('react');

export default class Employee extends React.Component {

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