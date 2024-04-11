require('dotenv/config.js')
const path =require('path')
const express = require('express');

const app = require('./src/app.js')

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'public/uploads/images')))
console.log(path.join(__dirname,'public'));
const PORT = 3000
app.listen(PORT,()=>{
   console.log('Servidor Escutando');
});