import React from 'react';
import {Component} from 'react';

class GeneratedJokes extends Component {
  handleAdd = () => {
    let {jokes} = this.props;
    let newJoke = {
      joke: jokes.joke
    }
    this.props.add(newJoke);
    this.props.getMore();
  }

  render() {
    return (
      <div className='Joke' >
        <p>{this.props.jokes.joke}</p>
        <button onClick={this.handleAdd}>Add Joke</button>
      </div>
    )
  }
}
export default GeneratedJokes