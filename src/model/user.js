const Pool = require("./../config/db");

const findName = (name) => {
    return new Promise ((resolve,reject)=>
        Pool.query(`SELECT * FROM "user" where name ='${name}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    }))
}

const addUser = (data) => {
    const {id,name,phone,role,password,email,date_birth,photo_user,review_status,domisili,address} = data
    return new Promise((resolve, reject) => {
        Pool.query(`INSERT INTO "user" (id,name,password,phone,role,email,date_birth,photo_user,review_status,domisili,address) VALUES('${id}','${name}','${password}',${phone},'${role}','${email}','${date_birth}','${photo_user}','${review_status}','${domisili}','${address}')`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

module.exports = {findName,addUser}