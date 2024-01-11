const bcrypt=require('bcrypt');
const taxiuser = require('./Userschema');

const signup = async(req,res)=>{
    const {Name,Email,Password}=req.body;
    const existingStudent = await taxiuser.findOne({Email});

if(existingStudent){
    return res.status(400).json({error:'email alredy exist'})
}

    const salt=await bcrypt.genSalt(10)
    const hashedpassword =await bcrypt.hash(Password,salt)
    
    const studentdetails = await taxiuser.create({
       Name,Email,Password :hashedpassword

})
res.json(studentdetails)
}
module.exports=signup