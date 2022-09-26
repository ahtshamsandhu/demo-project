const bcrypt = require('bcrypt');
const db = require('../models');
exports.createUserService = async (body) => {
    try {
        const usertype = body.type
        const user = db[usertype]
        body = {...body,password: await bcrypt.hash(body.password,10)}
        const response = await user.create(body);
        return response || null;
    } catch (error) {
        throw new Error(String(error))
    }
}