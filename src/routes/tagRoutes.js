const {Router} = require('express')

const route = Router();


route.get('/tags', (req, res)=>{
    res.status(200).json({message:"opa"})
})
