const { Joi } = require("express-validation");

exports.CREATE_CUSTOMER_VALIDATION = {
  body: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    city: Joi.string().required(),
    company: Joi.string().required(),
  }),
};

exports.GET_ALL_CUSTOMERS = {
  query: Joi.object({
    firstName: Joi.string().optional(),
    lastName: Joi.string().optional(),
    city: Joi.string().optional(),
    page: Joi.number().default(1),
    limit: Joi.number().default(10),
  }),
};

exports.GET_CUSTOMER_BY_ID = {
  params: Joi.object({
    id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .message("Invalid customer id.")
      .required(),
  }),
};
