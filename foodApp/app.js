// const express = require('express');

// //server creation==
// const app = express();
// let port = '8080';
// app.listen(port, function () {
//     console.log(`server is listening on port ${port}`);
// });


// //types of req -> get , post , put and delete
// app.get('/',(req,res)=>{
//     console.log(req.hostname);
//     console.log(req.path);
//     console.log(req.method);
//     res.send('<h1> hello hi </h1>');
// })
// let obj = {
//     'name':'Lavpreet'
// }
// app.get('/user', (req, res) => {
//     res.send(obj);
//     console.log('user');
// })

// app.get('/home', (req, res) => {
//     res.send(obj);
//     console.log('home');
// })