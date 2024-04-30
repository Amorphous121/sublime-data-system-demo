const createError = require("http-errors");
const { Joi, ValidationError } = require("express-validation");
const { getFailuerResponse } = require("../utils/response.util");

const getErrorMessage = (error) => {
  const errorDetails = error.details;
  if (errorDetails.params) return errorDetails.params[0].message;
  if (errorDetails.body) return errorDetails.body[0].message;
  if (errorDetails.query) return errorDetails.query[0].message;
};

exports.notFoundHandler = (req, res, next) => {
  return next(createError.NotFound('Resource not found.'));
};

exports.mainErrorHandler = async (err, req, res, next) => {
    let { status = 500 } = err;
    let message;
    
    console.log(err instanceof Joi.ValidationError)

    if (err instanceof ValidationError) {
        status = err.statusCode;
        message = getErrorMessage(err);
    } else {
      console.log(err)
    message = err.message || "Something wen't wrong";
  }

  return res.status(status).json(getFailuerResponse(status, message));
};
