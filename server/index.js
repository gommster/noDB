const express = require('express')
const randomCtrl = require('./controllers/randomCtrl')
const myCtrl = require('./controllers/myCtrl')
const port = 4444
const app = express()

app.use(express.json());
app.get('/api/randomJokes', randomCtrl.generateJokes);
app.get('/api/myJokes', myCtrl.getMyJokes);
app.post('/api/myJokes', myCtrl.add);
app.put('/api/myJokes/:id', myCtrl.editJoke);
app.delete('/api/myJokes/:id', myCtrl.delete);
app.listen(port, () => console.log(`listnin on port ${port}`));