const Router = require("express").Router;
const { validate } = require("express-validation");

const {
  CREATE_CUSTOMER_VALIDATION,
  GET_ALL_CUSTOMERS,
  GET_CUSTOMER_BY_ID,
} = require("../validations/customer.validation");
const CustomerController = require("../controllers/customer.controller");

const customerRouter = Router({ mergeParams: true });

customerRouter.post(
  "/",
  validate(CREATE_CUSTOMER_VALIDATION),
  CustomerController.createCustomer
);

customerRouter.get(
  "/",
  validate(GET_ALL_CUSTOMERS),
  CustomerController.getCustomers
);

customerRouter.get(
  "/citywise-customers",
  CustomerController.getCityWiseCustomerCount
);

customerRouter.get(
  "/:id",
  validate(GET_CUSTOMER_BY_ID),
  CustomerController.getCustomerById
);

module.exports = customerRouter;
