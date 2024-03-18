const mongoose=require("mongoose")
// const validator=require("validator")
const mailSchema=new mongoose.Schema({
    email:{type:String,required:true}
},{versionKey:false,collection:"mails"})
const mailModel=mongoose.model("email",mailSchema)
module.exports={mailModel}