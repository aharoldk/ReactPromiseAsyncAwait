import React, { Component } from 'react';
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
    const idCity = '1622786';
    const cntDay = '16'
    const appId = 'b4951299cd6f2e36520517762fc87bf5';

    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?id=${idCity}&cnt=${cntDay}&appid=${appId}`;

    const res = await fetch(url);
    const json = await res.json();
    const arrayList = await json.list;

    // console.log(arrayList);
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