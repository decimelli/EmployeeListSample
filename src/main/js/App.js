const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

import EmployeeList from './EmployeeList.js';
import CountryList from './CountryList.js';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            countries: []
        }
    }

    componentDidMount() {
        axios.get('/api/employees').then((response) => this.setState({employees: response.data._embedded.employees})).catch(console.log);
        axios.get('/api/countries').then((response) => this.setState({countries: response.data})).catch(console.log);
    }

    render() {
        return (<div className="row">
            <div className="col-sm-8">
                <EmployeeList employees={this.state.employees}/>
            </div>
            <div className="col-sm-4">
                <CountryList countries={this.state.countries}/>
            </div>
        </div>);
    }

}

ReactDOM.render(<App/>, document.getElementById('react'));