import React from 'react';
import {Component} from 'react';
import axios from 'axios';
import GeneratedJokes from './GeneratedJokes'

class JokeFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomJokes: []
    }
  }

  componentDidMount() {
    this.generateJokes();
  }

  generateJokes = () => {
    axios.get('/api/randomJokes')
      .then(res => {
        this.setState({randomJokes: res.data});
      })
      .catch(err=>console.log(err))
  }

  render() {
    let mappedJokes = this.state.randomJokes.map((jokes, id) => (
      <GeneratedJokes
        key = {id}
        jokes = {jokes}
        add = {this.props.add}
        getMore = {this.generateJokes}/>
    ))

    return(
      <div className='JokeFinder'>
        <h1>RANDOM JOKES</h1>
        {mappedJokes}
      </div>
    )
  }
}
export default JokeFinder;