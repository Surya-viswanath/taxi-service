const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    Name :{ type: String},
    Email :{ type: String},
    Password:{ type: String},
});

const taxiuser = mongoose.model('taxiuser',userschema);
module.exports = taxiuser;