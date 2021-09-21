const mongoose = require('mongoose');
const db = require('../Secrets');
const validator = require("email-validator");

// mongoose.connect(db.link).then(function (db) {
//     // console.log(db);
//     // console.log('Db connected');
// })
//     .catch(function (err) {
//         console.log(err);
//     })


const planSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    ratings:{
        type:Number
    },
    price:{
        type:Number
    },
    delivery:{
        type:Boolean
    },
    meals:{
        type:Number
    },
    description:{
        type:String
    }

});

// userSchema.pre('save', function () {
//     this.confirmPassword = undefined;
// });

const planModel = mongoose.model('planModel', planSchema);
module.exports = planModel;
// (async function createUser(){
//     let user = {
//         name:'lavpreet',
//         age:20,
//         email:"lsv28856555@gmail.com",
//         password:'lovesingh',
//         confirmPassword:'lovesingh'
//     };

//     let userObj = await userModel.create(user);
//     console.log(userObj);
// })
// ();