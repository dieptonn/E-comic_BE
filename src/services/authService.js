const User = require('../app/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
    
        try {
            const hashPassword = await hashUserPassword(data.password);
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
            return {
                token
            };
        } catch (error) {
            throw error;
        }
};

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.SECRETKEY, {
        expiresIn: '1d',
    });
    return token;
};

const hashUserPassword = async (password) => {
    
        try {
            const hashPassword = await bcrypt.hashSync(password, salt);
            return hashPassword;
        } catch (error) {
            throw error;
        }
};

const authLogin = () => {};

module.exports = { createNewUser, authLogin, generateToken };
