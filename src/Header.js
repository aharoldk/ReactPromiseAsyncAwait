import React from "react";
import logo from './logo.svg';

export default class Header extends React.Component {
    render() {
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React Open Weather - {this.props.city}</h1>
                <h3>{this.props.owner}</h3>
            </header>
        )
    }
}