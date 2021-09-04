const express = require('express');
require('./db/mongoose'); // create singleton mongoose object

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // parse json to object
app.use(userRouter); // register user router
app.use(taskRouter); // register task router

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});