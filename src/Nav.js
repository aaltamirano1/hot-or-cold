import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component{
	render(){
		return (
			<nav> 
        <ul>
          <li><a className="what" href="#" onClick={() => this.props.showModal()}>What ?</a></li>
          <li><a className="new" href="#" onClick={() => this.props.newGame()}>+ New Game</a></li>
        </ul>
      </nav>
		);
	}
}

export default Nav;