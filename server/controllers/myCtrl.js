const myJokes = [];
let id = 1;

module.exports = {
  getMyJokes: (req,res) => {
    res.status(200).send(myJokes)
  },
  add: (req,res) => {
    let {joke} = req.body;
    joke.id = id;
    id++;
    myJokes.push(joke);
    res.status(200).send(myJokes);
  },
  editJoke: (req,res) => {
    let {id}=req.params,
        {joke} = req.body
    console.log(req.body);
    let newjoke = myJokes.find(element=>element.id === +id)
    console.log(joke, id, newjoke)
    newjoke.joke = joke;
    res.status(200).send(myJokes)
  },
  delete: (req,res) => {
    let {id}=req.params;
    let index = myJokes.findIndex(element=>element.id === +id)
    myJokes.splice(index,1);
    res.status(200).send(myJokes)
  } 
}