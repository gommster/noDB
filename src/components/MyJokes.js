import React from 'react'
import JokeList from './JokeList'

const MyJokes = (props) => {
  
  let mappedMyJokes = props.myJokes.map((joke, i) => (
    <JokeList 
      key = {i}
      joke = {joke}
      editJoke = {props.editJoke}
      delete = {props.delete}/>
  ))

  return(
    <div className='myJokes'>
      <h1>MY JOKES LOL</h1>
      <div>
          {mappedMyJokes}
      </div>
    </div>
  )
}
export default MyJokes;