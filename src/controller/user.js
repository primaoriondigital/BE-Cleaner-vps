const { response } = require("../middleware/common");
const bcrypt = require('bcryptjs');
const {v4: uuidv4} = require('uuid');
const {generateToken} = require('../middleware/auth')
const ModelUser = require("../model/user")

const UsersController = {
    register: async (req,res,next) => {
    let data = {
        id : uuidv4(),
        name : req.body.name,
        password : bcrypt.hashSync(req.body.password),
        phone : req.body.phone,
        role : req.body.role,
        email : req.body.email,
        date_birth : req.body.date_birth || null,
        photo_user : req.body.photo_user,
        review_status : req.body.review_status,
        address : req.body.address,
        domisili : req.body.domisili
        
    }
    try {
        const result = await ModelUser.addUser(data)
        if (result){
            console.log(result)
            response(res,200,true,true,"register success")
        }
    } catch (err){
        console.log(err)
        response(res,404,false,err,"register fail")
    }
    },
    login: async (req,res,next)=>{
        console.log('name',req.body.name)
        console.log('password',req.body.password)
        let {rows:[user]} = await ModelUser.findName(req.body.name)
        if(!user){
            return response(res, 404, false, null," username not found")
        }
        const password = req.body.password
        const validation1 = bcrypt.compareSync(password,user.password)
        if(!validation1){
            return response(res, 404, false, null,"wrong password")
        }
        delete user.password
        let payload = {
            id: user.id,
            fullname: user.name,
            email: user.email,
            role: user.role
        }
        user.token = generateToken(payload)
        response(res, 200, false, user,"login success")
    }
}

exports.UsersController = UsersController;
