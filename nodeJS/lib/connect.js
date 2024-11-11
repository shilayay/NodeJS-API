const mongoose = require('mongoose');
const connectDB= ()=>{
    mongoose.connect(process.env.DB_URL);
    const database=mongoose.connection;

    database.on('error',(error)=>{
        console.log('Database connection error:',error);
    });
    database.once('open',()=>{
        console.log('Database connected');
    });
};
module.exports=connectDB;