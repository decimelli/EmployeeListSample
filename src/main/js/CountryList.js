const React = require('react');

import Country from './Country.js'

export default class CountryList extends React.Component {

    render() {
        return (<table className={"table"}>
            <thead className="thead-light">
            <tr>
                <th scope="col">Countries of Birth</th>
            </tr>
            </thead>
            <tbody>
            {this.props.countries.map(country => <Country name={country}/>)}
            </tbody>
        </table>)
    }

}
