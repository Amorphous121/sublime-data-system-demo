const createError = require("http-errors");

const { CustomerModel } = require("../models/customer.model");
const { getSuccessResponse } = require("../utils/response.util");

exports.createCustomer = async (req, res, next) => {
  try {
    const customerPayload = req.body;
    const customer = await CustomerModel.create(customerPayload);
    return res.json(
      getSuccessResponse("Customer created successfully", {
        customer: customer.toObject(),
      })
    );
  } catch (error) {
    next(error);
  }
};

exports.getCustomers = async (req, res, next) => {
  try {
    const queryObject = { ...req.query };

    /* Basic Filteration */
    const excludeField = ["page", "limit"];
    excludeField.forEach((field) => delete queryObject[field]);

    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    const filterQuery = Object.keys(queryObject).reduce((acc, key) => {
      acc[key] = new RegExp(queryObject[key], "ig");
      return acc;
    }, {});

    const totalRecords = await CustomerModel.countDocuments({ ...filterQuery });

    if (skip > totalRecords) {
      throw createError.BadRequest("Invalid page number");
    }

    const customerRecords = await CustomerModel.find({ ...filterQuery })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit)
      .lean();
    return res.json(
      getSuccessResponse("Customer fetched successfully", {
        customers: customerRecords,
        page,
        limit,
        totalPage: Math.ceil(totalRecords / limit),
      })
    );
  } catch (error) {
    next(error);
  }
};

exports.getCustomerById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const customer = await CustomerModel.findById(id).lean();

    if (!customer) {
      throw createError.NotFound(`Customer does not exists with given id`);
    }

    return res.json(
      getSuccessResponse("Customer fetched successfully", { customer })
    );
  } catch (error) {
    next(error);
  }
};

exports.getCityWiseCustomerCount = async (req, res, next) => {
  try {
    const citiWiseData = await CustomerModel.aggregate([
      {
        $group: {
          _id: "$city",
          customerCount: { $sum: 1 },
        },
      },
    ]);

    return res.json(
      getSuccessResponse("CityWise customer count fetched successfully.", {
        citiWiseData,
      })
    );
  } catch (error) {
    next(error);
  }
};
