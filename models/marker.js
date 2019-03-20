const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const MarkerSchema = new Schema({
    address: String,
    city: String,
    street: String,
    apartment: String,
    floors: String,
    latitude: String,
    longitude: String,
    countApartments: String,
});

module.exports = mongoose.model('Marker', MarkerSchema);