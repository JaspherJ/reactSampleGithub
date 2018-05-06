import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card = (props) => {
return (
          <div>
              <img src = {props.avatar}/>
              <div>
                <div>{props.name} </div>
                <div>{props.company}</div>
              </div> 
          </div>
        );
};

const CardList = (props) => {
    return (
      <div>
        {props.cards.map(cards => <Card  {...cards}/>)}
       
      </div>
    );
};
class Form extends React.Component {

  render(){
    return (
      <form>
        <input type = "text" placeholder = "Github Username" />
        <button>Add Card </button>
      </form>
    );
  }
}
class App extends Component {
state = {
  data : [
    {
      name : "Jaspher",
      avatar :"https://avatars0.githubusercontent.com/u/4433303?v=4",
      company:"Fl"
    },
    {
      name : "John",
      avatar :"https://avatars1.githubusercontent.com/u/1668?v=4",
      company:"Syncfusion"
    }
  ]
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div> <Form /></div>
        <div><CardList cards = {this.state.data}/> </div>
      </div>
    );
  }
}

export default App;
