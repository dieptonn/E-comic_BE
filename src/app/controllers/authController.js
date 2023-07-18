const User = require('../models/User');
const authService = require('../../services/authService');
const { response } = require('express');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');


const login = async (req, res) => {
    const dataLogin = req.body;
    try {
        // Kiểm tra thông tin đăng nhập
        const user = await User.findOne({ email: dataLogin.username });

        if (!user) {
            return res.send('Invalid email or password');
        }

        // Kiểm tra mật khẩu
        const isPasswordValid = await bcrypt.compare(dataLogin.password, user.password);
        // console.log(isPasswordValid);

        if (!isPasswordValid) {
            return res.send('Invalid email or password');
        }

        // Tạo token
        const token = authService.generateToken(user._id);
        const data = {token};

        // Trả về thông tin người dùng và token
        return res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        return res.send('Login failed');
    }
};


const signup = async (req, res) => {
    const userData = req.body;
    // console.log(data);
    try {
        const data = await authService.createNewUser(userData);
        return res.status(200).json({
            status: 'success',
            data
        });
    } catch (error) {
        return res.send('Please double check your information, maybe this account has been registered before');
    }
};

module.exports = { login, signup };
