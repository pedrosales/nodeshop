'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // ja gera um _id Guid
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        require: true,
        trim: true,
        index: true,
        unique: true
    },
    decription: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    active: {
        type: Boolean,
        require: true,
        default: true
    },
    tags: [
        {
            type: String,
            require: true
        }
    ]
});

module.exports = mongoose.model('Product', schema);