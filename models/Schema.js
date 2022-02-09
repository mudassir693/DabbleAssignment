const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    Country:{
        type:String
    },
    Year:{
        type:String
    },
    Area:{
        type:Number
    },
    TotalPopulation:{
        type:Number
    }
})

module.exports = mongoose.model('Records', Schema)