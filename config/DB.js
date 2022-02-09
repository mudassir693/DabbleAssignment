const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect(process.env.mongo_Url)
    .then(()=>console.log('DataBase has been Connected ...'))
    .catch(error=>{
        console.log(error);
    })
}

module.exports = connectDB