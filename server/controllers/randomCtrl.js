const axios = require('axios');

module.exports = {
  generateJokes: (req,res)=>{
    let jokes = [];
    axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit&type=single')
      .then( response => {
        jokes.push(response.data)
        axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit&type=single')
          .then( response=> {
            jokes.push(response.data)
            axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit&type=single')
              .then( response => {
                jokes.push(response.data)
                axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit&type=single')
                  .then( response=> {
                    jokes.push(response.data)
                    axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit&type=single')
                      .then( response=> {
                        jokes.push(response.data)
                        axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit&type=single')
                          .then( response=> {
                            jokes.push(response.data)
                            axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,explicit&type=single')
                              .then( response=> {
                                jokes.push(response.data)
                                res.status(200).send(jokes)
                              })
                          })
                      })
                  })
              })
          })
      })
      .catch(err=>res.status(500).send(err))
  }
}