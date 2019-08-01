const React = require('react');

export default class Country extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
            </tr>
        );
    }
}