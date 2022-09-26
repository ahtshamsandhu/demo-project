const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models')
require("dotenv").config();
const {expiresIn} = require('../utils/constVal')    
exports.loginService = async (body) => {
    try {
    const type = body.type
    const user = db[type]
    const {email, password} = body
    const User = await user.findOne({ where:{email}})
    if(!User)
    {
        throw new Error('User with this email is not exist')
    } 
    const isSame = await bcrypt.compare(password, User.password)
    if(isSame)
    {
        const accessToken = jwt.sign({id:User.id}, process.env.scretKey, {
            expiresIn: expiresIn 
        });
        return {accessToken,type}
    }
    else{
        return false
    }
    } catch (error) {
        throw new Error(String(error))   
    }   
};