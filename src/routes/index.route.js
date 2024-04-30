const Router = require('express').Router;
const customerRouter = require('./customer.route');

const indexRouter = Router();

indexRouter.use('/customers', customerRouter)

module.exports = indexRouter;