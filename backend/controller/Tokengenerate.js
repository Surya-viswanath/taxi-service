const jwt=require('jsonwebtoken');
const taxiuser = require('./Userschema');


const genertock=async(req,res)=>{
    const {Name,Email,Password}=req.body;
    const Userdata=await taxiuser.findOne({Email});

    if(Userdata){
        res.json("already exist");
    }
    else{
        const userdetails=await taxiuser.create({
            Name,Email,Password
        })
        res.json({
            Id:userdetails._id,
            Name:userdetails.Name,
            Email:userdetails.Email,
            Password:userdetails.Password,
            Token:tokengenerate(userdetails._id),
        })
    }
}
const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d',
    })
}
module.exports =genertock;
