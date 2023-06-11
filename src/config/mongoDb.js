import mongoose from "mongoose";

export const mongoConnect = async () =>{
    try{
        const con = await mongoose.connect('mongodb://localhost:27017/nottododb')
        con && console.log("mongo is connected");
    } catch (error) {
      console.log(error);
    }
  };