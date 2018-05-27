import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Body from './Body';

export default class Surabaya extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      nameUser: "Alwandy Harold Kalangi",
      list:[]
    }
  }
  
  componentDidMount(){
    const idCity = '1625822'; //surabaya
    const cntDay = '16'
    const appId = 'b4951299cd6f2e36520517762fc87bf5'; //this is my appId. Please get a new appId in openweather.org

    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?id=${idCity}&cnt=${cntDay}&appid=${appId}`;
    
    const list = this.state.list;

    const thisPromise = data => {
      return new Promise((resolve, reject) => {
        if(data !== null){
          return resolve(data.data.list);
        } else {
          return reject(new Error("List Data Null"));
        }
      });
    }

    axios.get(url)
    .then(response => {
      return thisPromise(response)
    })
    .then(data => {
      data.map(lists => {
        return list.push(lists);
      })

      this.setState({
        list
      });

      console.log(this.state.list);
    })
    .catch(e => console.log(e));
  }


  render() {
    return (
      <div className="App">
        <Header owner={this.state.nameUser} city="Surabaya"/>
        <Body lists={this.state.list} />
      </div>
    );
  }
}