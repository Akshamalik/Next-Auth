import mongoose from "mongoose";

export async function connect(){
    try{
     mongoose.connect(process.env.MONGO_URI!);
     const connection=mongoose.connection;

     connection.on('connected',()=>{
        console.log("mongo connected success")
     })
     connection.on('error',(err)=>{
        console.log('MongoDB connection error please make sure its running'+err)
        process.exit()
     })
    }
    catch(error){
       console.log("Something went wrong")
       console.log(error)
    }
}