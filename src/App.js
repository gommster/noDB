import {Component} from 'react';
import React from 'react'
import './App.css';
import Header from './components/Header'
import JokeFinder from './components/JokeFinder'
import MyJokes from './components/MyJokes'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myJokes: []
    }
    this.add = this.add.bind(this)
  }

  componentDidMount() {
    // axios.get('/api/myJokes')
    //   .then( res=> {
    //     this.setState({myJokes: res.data})
    //   })
    //   .catch(err=>console.log(err));
  }

  add(joke) {
    axios.post('/api/myJokes', {joke: joke})
      .then(res=>{
        this.setState({myJokes: res.data})
      })
      .catch(err=>console.log(err));
  }

  editJoke = (id, editedJoke)=>{
    let newJoke = {joke: editedJoke}
    axios.put(`/api/myJokes/${id}`, newJoke)
      .then(res=>{this.setState({myJokes: res.data})})
      .catch(err=>console.log(err))
  }

  delete = (id)=>{
    axios.delete(`/api/myJokes/${id}`)
      .then(res=>{this.setState({myJokes: res.data})})
      .catch(err=>console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='JokeSpace'>
          <JokeFinder add = {this.add}/>
          <MyJokes 
            myJokes={this.state.myJokes}
            editJoke={this.editJoke}
            delete={this.delete}
            />
        </div>
      </div>
    )
  }
}

export default App;
