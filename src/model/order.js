const Pool = require("./../config/db");
const getOrderUrgent = () => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT * FROM "order" where order_status = 'open'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
    })
})
}

const writeCleaner = (data) => {
    const {order_id,id} = data
    return new Promise((resolve, reject) => {
        Pool.query(`UPDATE "order" SET order_status='get cleaner',cleaner_id='${id}' WHERE order_id='${order_id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const writeApprovedArea = (order_id) => {
    // const {order_id,id} = data
    return new Promise((resolve, reject) => {
        Pool.query(`UPDATE "order" SET order_status='approved area' WHERE order_id='${order_id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

const writeOrderOngoing = (order_id) => {
    // const {order_id,id} = data
    return new Promise((resolve, reject) => {
        Pool.query(`UPDATE "order" SET order_status='order on going' WHERE order_id='${order_id}'`,(err,result)=>{
            if(!err){
                resolve(result)
            } else {
                reject(err)
            }
        })
    })
}

module.exports = {getOrderUrgent,writeCleaner,writeApprovedArea,writeOrderOngoing}