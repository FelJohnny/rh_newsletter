require('dotenv/config.js')
const path =require('path')
const express = require('express');

const app = require('./src/app.js')
//necessario para que as imagens sejam acessiveis via caminho ex: 'http://localhost:3000/public/uploads/images/1712918282155_img.png'
app.use('/public/uploads/images',express.static(path.join('public/uploads/images')))

const PORT = 3000
app.listen(PORT,()=>{
   console.log('Servidor Escutando');
});