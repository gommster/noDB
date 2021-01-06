import React,{Component} from 'react'

class JokeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      jokeInput: this.props.joke.joke
    }
  }

  handleInput = (inp) => {
    this.setState({jokeInput: inp})
  }

  toggleEditing = ()=>{
    this.setState({isEditing: !this.state.isEditing})
  }

  handleEdit = (id)=>{
    console.log(this.props.joke)
    this.props.editJoke(id, this.state.jokeInput);
    this.toggleEditing();
  }

  render() {
    return (
      <div className='jokeList'>
        {this.state.isEditing ? (
          <div className='editing'>
            <textarea value = {this.state.jokeInput}
                  onChange = {element=>this.handleInput(element.target.value)}/>
            <div className='buttons'>
              <button onClick={()=>(this.handleEdit(this.props.joke.id))}>Submit</button>
              <button onClick={()=>this.props.delete(this.props.joke.id)}>Delete</button>
            </div>
          </div>
        ) : (
          <div className='displaying'>
            <textarea readonly='true' >{this.props.joke.joke}</textarea>
            <div className='buttons'>
              <button onClick={this.toggleEditing}>Edit Joke</button>
              <button onClick={()=>this.props.delete(this.props.joke.id)}>Delete</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default JokeList;