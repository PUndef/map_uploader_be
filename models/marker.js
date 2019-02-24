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
    floors: Number,
    latitude: String,
    longitude: String,
    countApartments: Number,
});

module.exports = mongoose.model('Marker', MarkerSchema);