const bcrypt = require('bcrypt');
const db = require('../models');
const { Op } = require("sequelize");
//const db1 = require('../migrations')
const Student = db.student
const Coursest = db.course
exports.createUserService = async (body) => {
    try {
        const usertype = body.type
        const user = db[usertype]
        body = usertype === ('student' || 'teacher') ? {...body,password: await bcrypt.hash(body.password,10)} :body;
        const response = await user.create(body);
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
    const response =
    type === ('student' || 'teacher') ? await user.findOne({where : query}): await user.findAll() 
    return response || null;   
    } catch (error) {
        throw new Error(String(error))
    }
}
exports.Course = async (body) => {
    try {
        const user = db.studentcourse
        //console.log("==================================",user)
        const response = await user.create(body);
        //console.log("================================",response)
        return response || null
    } catch (error) {
        throw new Error(String(error))        
    }
}
exports.fetchAllCourse = async (query) => {
    try {
        const id = query.id
        console.log("========================",id)
        const user = db.studentcourse
        const response = await user.findAll({
            include:[Student,Coursest],
            where:{id}
        })
        return response || null
    } catch (error) {
        throw new Error(String(error))
    }
}