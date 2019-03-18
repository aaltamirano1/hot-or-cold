import React, { Component } from 'react';
import './Game.css';

export default class Game extends React.Component {
 constructor(props) {
    super(props);
  }
  checkIfHotOrCold(input){
  	const answer=this.props.number;
  	if(input==answer){
  		this.props.updateFeedback('You Won. Click new game to play again');
  	}else if(input<answer+5 && input>answer-5){
  		this.props.updateFeedback("Hot!");
  	}else if(input<answer+10 && input>answer-10){
  		this.props.updateFeedback("Warm...");
  	}else if(input<answer+20 && input>answer-20){
  		this.props.updateFeedback("Cold");
  	}else if(input<answer+30 && input>answer-30){
  		this.props.updateFeedback("Colder");
  	}else{
  		this.props.updateFeedback("Freezing!");
  	}
  }
  handleSubmit(e){
  	e.preventDefault();
  	this.checkIfHotOrCold(this.textInput.value);
  	this.props.handleInput(this.textInput);
  }
	render(){
		const guesses = this.props.guesses.map(guess=><li>{guess}</li>);
		return (
			<section className="game">
	      
	      <h2 id="feedback">{this.props.feedback}</h2>

	      <form onSubmit={(e)=>this.handleSubmit(e)}>
	        <input type="number" name="userGuess" id="userGuess" maxLength="3" autocomplete="off" placeholder="Enter your Guess" required="" min="0" max="100" ref={input => this.textInput = input} />
	        <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
	      </form>
	      
	      <p>Guess #<span id="count">{this.props.guessCount}</span>!</p>
	      
	      <ul id="guessList">{guesses}</ul>

	    </section>
		);
	}
}
