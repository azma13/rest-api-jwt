const router = require('express').Router();
const users = require('./user');
const { signIn,signUp} = require('../controllers/AuthController');
const auth = require('../middleware/auth');
const bodyParser = require('body-parser').json();

router.get('/', (req, res) => {
  res.send(`Hello`);
});

router.post('/signin',bodyParser,signIn);
router.post('/signup',bodyParser, signUp);
router.use('/users',auth.isAuth,users);

module.exports = router;
