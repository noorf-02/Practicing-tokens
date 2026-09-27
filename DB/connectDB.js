const mongoose = require('mongoose');

const connectDB=()=>{
    mongoose.connect(process.env.URL).then(()=>{
        console.log("DB has been connected")
    }).catch(err=>{
        console.log("Error in DB connected", err)
    })
};

module.exports = connectDB;