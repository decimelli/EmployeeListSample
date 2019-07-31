const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

import EmployeeList from './EmployeeList.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get('/api/employees')
            .then((response) => this.setState({employees: response.data._embedded.employees}))
            .catch(console.log)
    }

    render() {
        return (<EmployeeList employees={this.state.employees}/>);
    }

}

ReactDOM.render(<App/>, document.getElementById('react'));