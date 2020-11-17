const config = require('../config');
const mongoose = require('mongoose');


const uri = process.env.MONGODB_URI || config.connectionString;
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.Promise = global.Promise;
mongoose.connect(uri, options).catch(err => {console.log("Connection error!"); tryReconnect();});        


function tryReconnect() {
    mongoose.connect(uri, options).catch(err => {console.log("Connection error!"); tryReconnect();});
}
module.exports = {
    student: require('../models/student'),
    author: require('../models/author'),
    course: require('../models/course')
};
