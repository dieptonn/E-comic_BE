const User = require('../app/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);

const createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await hashUserPassword(data.password);
            newUser = await User.create({
                name: data.name,
                email: data.email,
                password: hashPassword,
                image: data.image,
                address: data.address,
                gender: data.gender === '1' ? 'male' : 'female',
                phoneNumber: data.phoneNumber,
                role: 'user',
                // slug: slug,
            });
            const token = generateToken(newUser._id);
            resolve(token);
        } catch (error) {
            reject(error);
        }
    });
};

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.SECRETKEY, {
        expiresIn: '1d',
    });
    return token;
};

const hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (error) {
            reject(error);
        }
    });
};

const authLogin = () => {};

module.exports = { createNewUser, authLogin, generateToken };
