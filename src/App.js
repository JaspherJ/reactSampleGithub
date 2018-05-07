import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
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
        {props.cards.map(cards => <Card key= {cards.key} {...cards}/>)}
       
      </div>
    );
};
class Form extends React.Component {
state = {
  userName: ''
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log('Event : Form Submit', this.state.userName);
  axios.get(`https://api.github.com/users/${this.state.userName}`)
  .then(resp => {
    this.props.onSubmit(resp.data);
    this.setState({userName:""});
  });
}

  render(){
    return (
      <form onSubmit= {this.handleSubmit}>
        <input type = "text" 
        value = {this.state.userName}
        onChange = {(event) => this.setState({userName:event.target.value})}
        ref placeholder = "Github Username" />
        <button>Add Card </button>
      </form>
    );
  }
}
class App extends Component {
state = {
  data : [
   
  ]
}

addNewCard = (cardInfo) => {
  console.log(cardInfo.login);
  this.setState(prevState =>({
    data: prevState.data.concat(cardInfo)
  }));
};
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
        <div> <Form onSubmit = {this.addNewCard}/></div>
        <div><CardList cards = {this.state.data}/> </div>
      </div>
    );
  }
}

export default App;
