const db = require('../models');
const jwt = require('jsonwebtoken');
const {ErrorResponse} = require('../utils/response')
const saveUser = async(req,res,next) => {
    try {
        const type = req.body.type
        const user = db[type]
        const response = await user.findOne({ where:
        {
            email: req.body.email
        }})
        if(response)
        {
            return ErrorResponse(res,400,"User with this email already exist")
        }
        next();
    } catch (error) {
        return error;
    }
};
const verifyToken = async (req,res,next) => {
    const type = req.body.type
    const User = db[type]
    const accessToken = req?.headers?.authorization?.split(' ')[1]
    if(accessToken)
    {
        const isVerified = jwt.verify(accessToken,process.env.scretKey)
        if(isVerified)
        {
            req.user = await User.findOne({
                where:{
                    id: isVerified.id
                }
            })
        }
        else {
            return ErrorResponse(res,401,'Invalid Token')
        }
    }
    else{
        return ErrorResponse(res,401,'Token is required for Authorization')
    }
};
module.exports = {
    saveUser,
    verifyToken
}
