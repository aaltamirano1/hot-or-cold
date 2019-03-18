import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Game from './Game';
import Modal from './Modal';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showModal: false,
      number: Math.floor((Math.random() * 100) + 0),
      guessCount: 0,
      guesses: [],
      feedback: 'Make your guess!'
    };
    console.log(this.state.number);
  }
  handleInput(input){
    const guesses = this.state.guesses;
    if(input.value != ''){
      if(this.state.guesses.indexOf(input.value)<0){
        this.setState({
          guessCount: this.state.guessCount+1,
          guesses: [...guesses, input.value]
        });
        input.value = '';
      }else{
        alert('You already guessed this number.');
      }
    }
  }
  updateFeedback(newValue){
    this.setState({feedback: newValue});
    console.log(this.state.feedback);
  }
  newGame(){
    this.setState({
      number: Math.floor((Math.random() * 100) + 0),
      guessCount: 0,
      guesses: [],
      feedback: 'Make your guess!'
    });
    console.log(this.state.number);
  }
  toggleModalDisplay(bool){
    this.setState({showModal: bool});
  }
  render() {
    if(this.state.showModal){
      return(<Modal hideModal={ () => this.toggleModalDisplay(false) }/>);
    }
    return (
      <div className="App">
      <header>
      <Nav showModal={() => this.toggleModalDisplay(true)} newGame={()=>this.newGame()}/>
      <h1>HOT or COLD</h1>

    </header>

    <Game number={this.state.number} guessCount={this.state.guessCount} guesses={this.state.guesses} feedback={this.state.feedback} handleInput={(input)=>this.handleInput(input)} updateFeedback={(newValue)=>this.updateFeedback(newValue)}/>
    </div>
    );
  }
}
