const mongoose=require('mongoose')
const dbName="real_state"
const dbUrl=`mongodb+srv://shama:shama@cluster0.kv1f7eb.mongodb.net/${dbName}`
module.exports={mongoose,dbName,dbUrl}
