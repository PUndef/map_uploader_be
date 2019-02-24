const mongoose = require('mongoose');
const mongoDbPath = require('./constants/private');

const initDB = () => {

    mongoose.connect(
        `${mongoDbPath}`, {
            useNewUrlParser: true
        }
    );

    mongoose.connection.once('open', () => {
        console.log('connected to database');
    });

}

module.exports = initDB;