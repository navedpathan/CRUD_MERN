import mongoose from "mongoose";

const Connection = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser:true});
        console.log("Database Connected Successfully")
    }
    catch(err){
        console.log("Error while connecting database",err);
    }
};
export default Connection;
