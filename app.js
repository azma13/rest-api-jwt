const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./src/v1/routes/user');
const index = require('./src/v1/routes/index');
const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(cors())

app.get('/', (req, res) => {
  res.send(`Hello, please login or signup first to access this API`);
});
app.use('/api/v1',index)
app.use('/api/v1/user',user)

app.listen(3000, function() {
  console.log('Success connect')
})