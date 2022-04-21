//aca se definen los esquemas de la BD
const { required } = require('@hapi/joi/lib/base');
const string = require('@hapi/joi/lib/types/string');
const mongoose = require ('mongoose')  ;
const userSchema = mongoose.Schema({

name: {
    type: string,
    required: true,
    min:6,
    max: 255
},

email: {
    type: string,
    required: true,
    min:6,
    max: 255
},

password: {
    type: string,
    required: true,
    min:6,
    max: 255
},

date: {
    type: Date,
    default: Date.now
}

}) 

module.exports= mongoose.model('User', userSchema);