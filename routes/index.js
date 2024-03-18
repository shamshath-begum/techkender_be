var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const mongoose = require("mongoose");
const { dbUrl } = require("../config/dbConfig");
const { mailModel } = require('../schema/mailSchema');
mongoose.connect(dbUrl);

router.post("/sendMail",async(req,res)=>{
  console.log(req.body.email)
  if(!req.body.email){
    res.status(401).send({
      message:"All Inputs is required"
    })
  }else{
    let doc=new mailModel(req.body)
    await doc.save()
    res.status(201).send({
      message: "Mail Sent Successfully",
    });
  
  }
  
  


let email=req.body.email



  

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sham29.b@gmail.com',
    pass: ' xyin dhqt uywb dref '
  }
});

var mailOptions = {
  from: 'sham29.b@gmail.com',
  to: email,
  subject: 'Keep In Touch',
  text: 'Thank You For Mailing Us!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
})


module.exports = router;
