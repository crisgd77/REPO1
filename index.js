const express =require('express');

const mongoose =  require('mongoose');

const bodyparser = require('body-parser');

require('dotenv').config()

const app = express();

//capturar del body los datos que llegan del front end

app.use(bodyparser.urlencoded({extended:false})); 
app.use(bodyparser.json());

//conexion a la base de datos

const uri= `mongodb+srv://api-directo:aynlVqRcen9t20e0@cluster0.yjmbi.mongodb.net/jwt-directo`
const option={useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(uri,option)

    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log('error db:', e ))






//import routes
const authRoutes = require('./routes/auth'); 
app.use('/api/user',authRoutes);


//route de los midlewares

app.get('/', (req, res) => { res.json({estado:true, mensaje:'funciona'}) });

//iniciar server
const PORT=process.env.PORT || 44360;
app.listen(PORT, ()=> {
    console.log(`servidor andando en: ${PORT}`)

})





