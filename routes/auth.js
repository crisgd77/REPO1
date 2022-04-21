const router= require('express').Router();

//llama a User.js
const User = require('../models/User');
const Joi= require('@hapi/joi');

//para hacer validaciones desde el frontend
const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()

})




router.post('/register', async(req,res)=> {

//para poder utilizar el esquema de validaciones
// esto se valida antes de crear el nuevo usuario y antes de guardar en la bd
const validaciones= schemaRegister.validate(req.body)
return res.json({
    error:null,
    data: userDB 
})


//captura desde el frontend
const user = new User({
    name:     req.body.name,
    email:    req.body.email,
    password: req.body.password
    
})

try {

//esta constante se llena con lo que la BD devuelve, tiene la respuesta con los datos de la BD
// espera a que el usuario se guarde
const userDB = await user.save();
res.json({
        error:null,
        data: userDB 
    })


} catch (error) {

    res.status(400).json(error)
}


    


})

module.exports = router;
