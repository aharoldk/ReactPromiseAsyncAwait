import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Makassar from './Makassar';
import Jakarta from './Jakarta';
import Surabaya from './Surabaya';
import Jepang from './Jepang';
import Bali from './Bali';

export default class Routes extends React.Component {
    render(){
        return (
            <Router>
                <div>
                    <NavLink to="/Bali/" exact activeStyle={{color:'green'}}>Bali</NavLink>&nbsp;
                    <NavLink to="/Jakarta/" exact activeStyle={{color:'green'}}>Jakarta</NavLink>&nbsp;
                    <NavLink to="/Jepang/" exact activeStyle={{color:'green'}}>Jepang</NavLink>&nbsp;
                    <NavLink to="/Makassar/" exact activeStyle={{color:'green'}}>Makassar</NavLink>&nbsp;
                    <NavLink to="/Surabaya/" exact activeStyle={{color:'green'}}>Surabaya</NavLink>

                    <Route path="/" exact strict component={Makassar} />
                    <Route path="/Jakarta/" exact strict component={Jakarta} />
                    <Route path="/Jepang/" exact strict component={Jepang} />
                    <Route path="/Makassar/" exact strict component={Makassar} />
                    <Route path="/Bali/" exact strict component={Bali} />
                    <Route path="/Surabaya/" exact strict component={Surabaya} />
                </div>
            </Router>
        )
    }
}