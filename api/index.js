import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import usersRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js'

const app = express();
dotenv.config();

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongodb');
    }catch(error){
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})

//middlewares

app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/users', usersRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = req.message || "Something went wrong"
    return res.status(errorStatus).json({
        success : false,
        status : errorStatus,
        message : errorMessage,
        stack : err.stack
    })
})
app.listen(3000, ()=>{
    connect();
    console.log("connected to backend");
});

