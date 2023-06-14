const User = require('../models/User');
const authService = require('../../services/authService');
const { response } = require('express');

const login = (req, res) => {
    const data = req.body;
    console.log(data);
    return res.json(data);
};

const signup = async (req, res) => {
    const data = req.body;
    // console.log(data);
    const message = await authService.createNewUser(data);
    return res.send(message);
};

module.exports = { login, signup };
