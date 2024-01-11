const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const taxiuser = require('../controller/Userschema');



const jwttoken=async(req,res)=>{
    const{Name,Email,Password} = req.body;

    const tockenuser =await taxiuser.create({
        Name,Email,Password
    })

    const genToken=(id)=>{
        return jwt.sign({id},process.env.JWT_SECRETCODE,{
            expiresIn:'1d',
        })
    }
    res.json({
        tockenuser,
        token:genToken(taxiuser.Name)
    })

}

module.exports=jwttoken