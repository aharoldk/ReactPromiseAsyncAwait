import React from 'react';

export default class BodyComponent extends React.Component {
    render(){
        const url_img = `http://openweathermap.org/img/w/${this.props.icon}.png`;
        return(
            <table className="center">
                <tbody>
                    <tr>
                        <td>{this.props.index}. {this.props.main},</td>
                        <td>{this.props.desc}</td>
                        <td rowSpan="2"><img src={url_img} alt={this.props.icon}/></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}