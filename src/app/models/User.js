const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-updater');
// mongoose.plugin(slug);
const mongooseDelete = require('mongoose-delete');

const UserSchema = new Schema(
    {
        // _id: { type: Number },
        name: {
            type: String,
            maxLength: 255,
            required: [true, 'Please enter your name'],
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            maxLength: 255,
            required: [true, 'Please enter your email'],
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            maxLength: 255,
            minLength: 6,
            required: [true, 'Please enter your password'],
            trim: true,
        },
        image: { type: String, maxLength: 255 },
        address: { type: String, maxLength: 255 },
        gender: {
            type: String,
            enum: ['male', 'female', 'other'],
            maxLength: 10,
        },
        phoneNumber: { type: String, maxLength: 10, validate: /^[0-9]{10}$/ },
    },
    {
        // _id: false,
        timestamps: true,
    },
);

module.exports = mongoose.model('User', UserSchema);
