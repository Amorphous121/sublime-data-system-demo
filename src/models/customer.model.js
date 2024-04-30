const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    city: { type: String },
    company: { type: String }
}, { timestamps: true, versionKey: false });

exports.CustomerModel = model('customer', customerSchema);