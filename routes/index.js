const { Router } = require('express');
const userRouter = require('./user-router');
const adminRouter = require('./admin-router');

// Export the base-router
const baseRouter = Router();
// Setup routers

// Routes for user-related actions
baseRouter.use('/user', userRouter);

// Routes for admin-related actions
baseRouter.use('/admin', adminRouter);

// Export default.
module.exports = baseRouter;
