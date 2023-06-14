const User = require('../app/models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await hashUserPassword(data.password);
            await User.create({
                name: data.name,
                email: data.email,
                password: hashPassword,
                image: data.image,
                address: data.address,
                gender: data.gender === '1' ? 'male' : 'female',
                phoneNumber: data.phoneNumber,
            });
            resolve('Sign up successfully');
        } catch (error) {
            reject('Sign up failed');
        }
    });
};

let hashUserPassword = (password) => {
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

module.exports = { createNewUser, authLogin };
