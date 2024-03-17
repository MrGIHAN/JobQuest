const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const creatError = require('../utils/appError');


// REGISTER USER
exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        
        if(user){
            return next(new creatError("User already exists!", 400))
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        // Assign JWT ( json web token )
        const token = jwt.sign({_id: newUser._id}, 'secretkey123', {
            expiresIn:  '90d',
        });

        res.status(201).json({
            status: 'success',
            message: 'User registered sucessfully',
            token,
        })
    }catch(error){
        next(error);
    }
};


// LOGGING
exports.login = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}