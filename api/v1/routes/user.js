const router = require('express').Router();
const bodyParser = require('body-parser');
const {getPoeples} = require('../controllers/UserController')
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
  console.log(req.headers.token)
  res.send(`Hello`+ req.headers.token);
});

router.get('/data',auth.isAuth, getPoeples);

module.exports = router;