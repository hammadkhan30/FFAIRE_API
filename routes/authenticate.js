const router = require('express').Router();
const User = require("../models/user");
const userregvalidation = require("./validate");

router.post('/register', async (req,res)=>{

    // Registering user validation
    const {error} = userregvalidation(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
    }


    // Saving registering user in database if he clears the validation
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;