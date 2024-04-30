const express = require("express");
const morgan = require("morgan");

const IndexRouter = require("./routes/index.route");
const {
  notFoundHandler,
  mainErrorHandler,
} = require("./middlewares/error.middleware");

const app = express();

/* Middleware Stack */
app.use(express.json());
app.use(morgan("dev"));

/* Route Initialization */
app.use(IndexRouter);

/* Error Handling */
app.use(notFoundHandler);
app.use(mainErrorHandler);

module.exports = app;
