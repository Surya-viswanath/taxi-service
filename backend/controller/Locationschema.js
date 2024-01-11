const mongoose = require('mongoose');
const locationSchema = mongoose.Schema({
  latitude :{ type: Number},
  longitude:{ type: Number},
});
const Location = mongoose.model('Location',locationSchema);
module.exports = Location;