const { createUserService} = require('../services/usersService');
const { SuccessResponse, ErrorResponse } = require('../utils/response');
const createUser = async (req, res) => {
    try {
      const response = await createUserService(req.body);
      if (response) {
        return SuccessResponse(res, 200, response);
      } else {
        return ErrorResponse(res, 401, 'You have no access');
      }
    } catch (e) {
      return ErrorResponse(res, 400, String(e));
    }
  };
 module.exports =
 {
    createUser
 }