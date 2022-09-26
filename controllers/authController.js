const {SuccessResponse,ErrorResponse} =require('../utils/response')
const {loginService} = require('../services/authService')
const logIn = async (req, res) => {
    try {
        const loginResponse = await loginService(req.body)
        if(loginResponse)
        {
            return SuccessResponse(res,200,loginResponse)
        }
        else {
            return ErrorResponse(res,400,'invalid email')
        }
    } catch (error) {
        return ErrorResponse(res,400,String(error))
    }

}

module.exports = {
    logIn
}