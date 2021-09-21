const mongoose = require('mongoose');
const db = require('../Secrets');
const validator = require("email-validator");

mongoose.connect(db.link).then(function (db) {
    // console.log(db);
    // console.log('Db connected');
})
    .catch(function (err) {
        console.log(err);
    })


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type:Number
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate:function(){
            return validator.validate(this.email);
        }
    },
    createdAt:{
        type:String
    },
    password: {
        type: String,
        required: true,
        min: 8,
    },
    confirmPassword: {
        type: String,
        required: true,
        min: 8,
        validate:function(){
            return this.password == this.confirmPassword;
        }
    }

});

userSchema.pre('save',function(){
    this.confirmPassword = undefined;
});

const  userModel = mongoose.model('userModel', userSchema);
module.exports = userModel;
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