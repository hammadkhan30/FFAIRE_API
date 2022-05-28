// Validation of user input
const Joi = require("@hapi/joi");

// Function to validate schema of registering users
const userregvalidation = (data)=> {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(8).required()
    };
    return Joi.validate(data,schema);
}

module.exports.userregvalidation = userregvalidation;


