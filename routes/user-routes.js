const { Router } = require('express');

// Controllers
const { login, register } = require('../controllers/users/auth');

const userRouter = Router();

// user NoAuth Route Start
userRouter.post('/register', register);
userRouter.post('/login', login);

// Export default
module.exports = userRouter;
