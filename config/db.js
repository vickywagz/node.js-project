const mongoose = require('mongoose');


const connection = mongoose.createConnection('mongodb://localhost:27017/newTodo').on('open', () =>{
    console.log("Mongoose Connected");
}).on('error',()=> {
    console.log("Mongoose connection error");
})


module.exports = connection;