
const express = require('express');

require('./db/config');
const User = require('./db/users');
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

// app.get('/', (req , resp)=>{
//   resp.send('hello')
// });

app.post('/contact', async (req, resp)=>{
     let user = new User(req.body);
     let result = await user.save();
     resp.send(result);
});



app.listen(5000)