const bcrypt = require('bcrypt');
const db = require('../models');
exports.createUserService = async (body) => {
    try {
        const usertype = body.type
        const user = db[usertype]
        if(usertype === 'course')
        {
            const response = await user.create(body);
            return response || null
        }
        body = {...body,password: await bcrypt.hash(body.password,10)}
        return response || null;
    } catch (error) {
        throw new Error(String(error))
    }
}
exports.fetchUsers = async (query) =>
{
    try {
        const type = query.type
        delete query.type
    const user = db[type]
    console.log("============================",type)
    const response =
    type === ('student' || 'teacher') ? await user.findOne({where : query}): await user.findAll() 
    return response || null;   
    } catch (error) {
        throw new Error(String(error))
    }
}