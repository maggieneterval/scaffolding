const express = require('express');
const apiRouter = express.Router();
import authRouter from './auth';

apiRouter.use('/auth', authRouter);

module.exports = apiRouter;
