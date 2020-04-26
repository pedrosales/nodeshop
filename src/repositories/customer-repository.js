'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');
const authService = require('../services/auth-service');


exports.get = async () => {
    return await Customer.find({});
}

exports.create = async (data) => {
    var customer = new Customer(data);
    return await customer.save();
}

exports.authenticate = async (data) => {
    return await Customer.findOne({
        email: data.email,
        password: data.password
    });
}