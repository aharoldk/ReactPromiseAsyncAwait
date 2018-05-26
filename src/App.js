import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Body from './Body';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      nameUser: "Alwandy Harold Kalangi",
      list:[]
    }
  }

  async componentDidMount(){
    const idCity = '1622786'; //makassar
    const cntDay = '16'
    const appId = 'b4951299cd6f2e36520517762fc87bf5'; //this is my appId. Please get a new appId in openweather.org

    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?id=${idCity}&cnt=${cntDay}&appid=${appId}`;

    const res = await axios.get(url);
    const arrayList = await res.data.list;
    const list = this.state.list;

    arrayList.map(lists => {
      return list.push(lists);
    })
    
    this.setState({list});

    console.log(this.state.list);
  }


  render() {
    return (
      <div className="App">
        <Header owner={this.state.nameUser}/>
        <Body lists={this.state.list} />
      </div>
    );
  }
}