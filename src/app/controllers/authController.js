const User = require('../models/User');
const authService = require('../../services/authService');
const { response } = require('express');

const login = (req, res) => {
    const data = req.body;
    console.log(data);
    return res.json(data);
};

module.exports = { login };
