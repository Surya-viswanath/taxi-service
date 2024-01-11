const Location = require("./Locationschema")

const Createlocation=async(req,res) => {
    const { latitude, longitude } = req.body;
    const newLocation = await Location.create({
        latitude,longitude
    })
    res.json({newLocation});
}
module.exports = Createlocation;



const getlocation= async (req, res)=>{
    const locations = await Location.find();
    res.json(locations);
}
module.exports = getlocation;

  