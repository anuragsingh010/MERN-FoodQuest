// model/reservationSchema.js

import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required!'],
        minLength: [3, 'First name must contain at least 3 characters!'],
        maxLength: [30, 'First name cannot exceed 30 characters!'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!'],
        minLength: [3, 'Last name must contain at least 3 characters!'],
        maxLength: [30, 'Last name cannot exceed 30 characters!'],
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate: [validator.isEmail, 'Provide a valid email!'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required!'],
        validate: {
            validator: (v) => /^\d{10}$/.test(v),
            message: 'Phone number must contain exactly 10 digits!',
        },
    },
    date: {
        type: String,
        required: [true, 'Date is required!'],
    },
    time: {
        type: String,
        required: [true, 'Time is required!'],
    },
});

export const Reservation = mongoose.model('Reservation', reservationSchema);
